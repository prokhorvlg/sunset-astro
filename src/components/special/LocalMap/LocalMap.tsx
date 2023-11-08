import {
  MAP_MAX_SCALE,
  MAP_MIN_SCALE,
} from "@/components/special/LocalMap/data/constants"
import { useEffect, useRef } from "react"
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchContentRef,
} from "react-zoom-pan-pinch"
import "./LocalMap.scss"
import { useAtom } from "jotai"
import {
  scaleAtom,
  usePosXAtom,
  usePosYAtom,
  selectedLocationAtom,
  rescaleAtom,
  opacityFadeInAtom,
  transformAtom,
  opacityFadeOutAtom,
} from "@/components/special/LocalMap/state/atoms"
import { locationsData, middleLocation } from "@/components/special/LocalMap/data/locationsData"
import LocalMapLocation from "@/components/special/LocalMap/components/LocalMapLocation"

const LocalMap = () => {
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
    if (!transformComponentRef.current) return
    setTransform(transformComponentRef.current)
  }, [transformComponentRef])

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

  const updateScale = (e) => {
    updateScaleFromExternalInput(parseFloat(e.target.value))
  }

  const reset = () => {
    if (selectedLocation) {
      transformComponentRef.current?.zoomToElement(
        selectedLocation.name,
        1,
        400
      )
    } else {
      transformComponentRef.current?.zoomToElement(
        "middle",
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
        disabled: false
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
          <>
            <div className="local-map-container" ref={mapContainerRef} >
              <div
                className="local-map-context-menu-container"
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
                <SystemMapTransformContainer
                  transform={transform}
                />
              </div>
            </div>
          </>
        )
      }}
    </TransformWrapper>
  )
}

const SystemMapTransformContainer = ({
  transform,
}: {
  transform: ReactZoomPanPinchContentRef
}) => {
  const [opacityFadeIn] = useAtom(
    opacityFadeInAtom
  )
  const [opacityFadeOut, setOpacityFadeOut] = useAtom(
    opacityFadeOutAtom
  )
  const [scale, setScale] = useAtom(scaleAtom)
  const [posX, setPosX] = useAtom(usePosXAtom)
  const [posY, setPosY] = useAtom(usePosYAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)

  const myRef = useRef<HTMLDivElement>(null);

  return (
    <TransformComponent
      wrapperClass="local-map-dynamic"
      contentClass="local-map-dynamic-content"
    >
      <div className="local-map-bounding-block" ref={myRef} ></div>
      
      <div className="local-map-inner-container">
        {/* <LocalMapLocation location={middleLocation} /> */}
        {locationsData.map(loc => {
          return <LocalMapLocation 
            location={loc}
          />
        })}
      </div>
    </TransformComponent>
  )
}

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

export default LocalMap