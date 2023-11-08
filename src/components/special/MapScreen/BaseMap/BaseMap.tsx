import { MAP_MAX_SCALE, MAP_MIN_SCALE } from "@/components/special/MapScreen/BaseMap/data/constants"
import { transformAtom, scaleAtom, rescaleAtom, usePosXAtom, usePosYAtom, selectedLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import SystemMap from "@/components/special/MapScreen/BaseMap/SystemMap/SystemMap"
import { useAtom } from "jotai"
import { useRef, useEffect, useState } from "react"
import { ReactZoomPanPinchContentRef, TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import {debounce} from "debounce"
import LocalMap from "@/components/special/MapScreen/BaseMap/LocalMap/LocalMap"
import './BaseMap.scss'

export enum MapComponent {
  System = "system",
  Titan = "titan"
}

const getMapComponent = (map: MapComponent, props: any) => {
  const mapToMap = {
    [MapComponent.System]: <SystemMap {...props} />,
    [MapComponent.Titan]: <LocalMap {...props} />
  }
  return mapToMap[map]
}

export interface MapComponentProps {
  transform: ReactZoomPanPinchContentRef
  onWheel: (e: React.WheelEvent<HTMLDivElement>) => void
}

const BaseMap = ({
  map
}: {
  map: MapComponent
}) => {
  const transformComponentRef =
    useRef<ReactZoomPanPinchContentRef | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  // Global state of map
  const [transform, setTransform] = useAtom(transformAtom)
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)

  const [posX, setPosX] = useAtom(usePosXAtom)
  const [posY, setPosY] = useAtom(usePosYAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  useEffect(() => {
    console.log("triggered") // TODO reset the map position to real center when map source is switched
    if (!transformComponentRef.current) return
    setTransform(transformComponentRef.current)
    transformComponentRef.current.zoomIn(0,0)
  }, [transformComponentRef, map])

  // TODO: Unique bounds on mobile scale devices. Desktop should be more limited.

  const updateScaleFromExternalInput = (
    newScale: number
  ) => {
    if (!transformComponentRef.current) return
    const { zoomIn, zoomOut } =
      transformComponentRef.current

    const targetScale = newScale
    const factor =
      Math.log(targetScale / scale) / (1 / MAP_MAX_SCALE)
    if (targetScale > scale) {
      zoomIn(factor, 0)
    } else {
      zoomOut(-factor, 0)
    }
    setScale(targetScale)
  }

  const updateScale = (e: { target: { value: string } }) => {
    updateScaleFromExternalInput(parseFloat(e.target.value))
  }

  const reset = () => {
    //console.log("reset", selectedLocation)
    if (selectedLocation) {
      transformComponentRef.current?.zoomToElement(
        selectedLocation.name,
        1,
        400
      )
    } else {
      transformComponentRef.current?.zoomToElement(
        "Sol",
        1,
        400
      )
    }

    setSelectedLocation(null)
  }

  return (
    <TransformWrapper
      ref={transformComponentRef}
      initialScale={scale}
      initialPositionX={0}
      initialPositionY={0}
      minScale={MAP_MIN_SCALE}
      maxScale={MAP_MAX_SCALE}
      smooth={false}
      wheel={{
        disabled: true
      }}
      doubleClick={{
        disabled: true
      }}
      centerOnInit
      onZoom={(e) => {
        setScale(e.state.scale)
      }}
      onZoomStop={(e) => {
        setScale(e.state.scale)
      }}
      onTransformed={(e) => {
        setScale(e.state.scale)
        setPosX(e.state.positionX)
        setPosY(e.state.positionY)
      }}
    >
      {(transform: ReactZoomPanPinchContentRef) => {
        return (
          <div className={`base-map-container ${map}`} ref={mapContainerRef} >
            <div
              className="base-map-context-menu-container"
              onContextMenu={(e) => {
                e.preventDefault()
                reset()
              }}
              onClick={(e) => {
                if (e.button === 1) {
                  transform.zoomIn()
                }
              }}
            >
              <BaseMapTransformContainer
                transform={transform}
                reset={reset}
                map={map}
              />
            </div>
          </div>
        )
      }}
    </TransformWrapper>
  )
}

const BaseMapTransformContainer = ({
  transform,
  reset,
  map,
}: {
  transform: ReactZoomPanPinchContentRef
  reset: () => void
  map: MapComponent
}) => {
  const [scale, setScale] = useAtom(scaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const boundingBlockRef = useRef<HTMLDivElement>(null);

  const [newWheelScale, setNewWheelScale] = useState<{
    scale: number,
    event: React.WheelEvent<HTMLDivElement>
  } | null>(null)

  // WHEEL: Zoom in/out
  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    // Zooming in is negative, zooming out is positive
    const isZoomingIn = event.deltaY < 0

    let newScale = isZoomingIn ? scale + 1 : scale - 1
    
    if (newScale >= MAP_MAX_SCALE) newScale = MAP_MAX_SCALE;
    else if (newScale <= MAP_MIN_SCALE) newScale = MAP_MIN_SCALE;
    
    setNewWheelScale({
      scale: newScale,
      event: event
    })
  }

  useEffect(() => {
    if (!newWheelScale) return
    const scaleDifference = newWheelScale.scale - scale

    const mousePosition = getMousePosition(newWheelScale.event as any, boundingBlockRef.current as HTMLDivElement, scale)
    const { positionX, positionY } = transform.instance.transformState;

    const calculatedPositionX = positionX - mousePosition.x * scaleDifference;
    const calculatedPositionY = positionY - mousePosition.y * scaleDifference;

    // Set new state, then ensure it's in bound with a zoom in call
    transform.instance.setTransformState(newWheelScale.scale, calculatedPositionX, calculatedPositionY);
    transform.zoomIn(0)

    setNewWheelScale(null)
  }, [newWheelScale])

  // CLICK: Reset selected location
  const onClick = (e) => {
    debounce(() => {
      setSelectedLocation(null)
    }, 200)
  }

  // DOUBLE CLICK: Reset the map
  const onDoubleClick = (e) => {
    reset()
  }

  return (
    <TransformComponent
      wrapperClass="base-transform-wrapper"
      contentClass="base-transform-content"
    >
      {/* BOUNDING BLOCK */}
      <div className="bounding-block" 
        onWheel={(e) => onWheel(e)}
        onClick={(e) => onClick(e)}
        onDoubleClick={(e) => {onDoubleClick(e)}}
        ref={boundingBlockRef}
      ></div>

      {getMapComponent(map, {
        transform,
        onWheel,
      })}
    </TransformComponent>
  )
}

// Stolen straight from the react zoom pan library lol
export function getMousePosition(
  event: WheelEvent | MouseEvent | TouchEvent,
  contentComponent: HTMLDivElement,
  scale: number,
) {
  const contentRect = contentComponent.getBoundingClientRect();

  let mouseX = 0;
  let mouseY = 0;

  if ("clientX" in event) {
    // mouse position x, y over wrapper component
    mouseX = (event.clientX - contentRect.left) / scale;
    mouseY = (event.clientY - contentRect.top) / scale;
  } else {
    const touch = event.touches[0];
    mouseX = (touch.clientX - contentRect.left) / scale;
    mouseY = (touch.clientY - contentRect.top) / scale;
  }

  if (Number.isNaN(mouseX) || Number.isNaN(mouseY))
    console.error("No mouse or touch offset found");

  return {
    x: mouseX,
    y: mouseY,
  };
}

export default BaseMap