import {
  MAP_MAX_SCALE,
  MAP_MIN_SCALE,
} from "@/components/special/SystemMap/data/constants"
import { locationsData } from "@/components/special/SystemMap/data/locationsData"
import { useEffect, useRef, useState } from "react"
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchContentRef,
} from "react-zoom-pan-pinch"
import "./SystemMap.scss"
import { useAtom } from "jotai"
import SystemMapLocation from "@/components/special/SystemMap/components/SystemMapLocation"
import {
  scaleAtom,
  usePosXAtom,
  usePosYAtom,
  selectedLocationAtom,
  rescaleAtom,
  opacityFadeInAtom,
  transformAtom,
  opacityFadeOutAtom,
} from "@/components/special/SystemMap/state/atoms"
import {debounce} from 'debounce'
import { mathClamp } from "@/components/special/SystemMap/utils/math"

const SystemMap = () => {
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

  const updateScale = (e) => {
    updateScaleFromExternalInput(parseFloat(e.target.value))
  }

  const reset = () => {
    console.log("reset", selectedLocation)
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
          <>
            {/* <div className="controls-test">
              <input
                type="range"
                value={scale}
                min={MAP_MIN_SCALE}
                max={MAP_MAX_SCALE}
                step={MAP_SCALE_STEP}
                style={{
                  position: "absolute",
                  zIndex: "900",
                }}
                onChange={updateScale}
              />
              <button
                onClick={(e) => {
                  updateScaleFromExternalInput(1);
                }}
              >
                level 1
              </button>
              <button
                onClick={(e) => {
                  updateScaleFromExternalInput(5);
                }}
              >
                level 2
              </button>
              <button
                onClick={(e) => {
                  reset()
                }}
              >
                reset
              </button>
              <p>{selectedLocation?.name}</p>
              <p>{selectedLocation?.flavorText}</p>
              <p>{selectedLocation?.description}</p>
            </div> */}
            <div className="sunset-map-container" ref={mapContainerRef} >
              <div
                className="system-map-context-menu-container"
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
                  reset={reset}
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
  reset
}: {
  transform: ReactZoomPanPinchContentRef
  reset: () => void
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
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  const boundingBlockRef = useRef<HTMLDivElement>(null);

  // WHEEL: Zoom in/out
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Zooming in is negative, zooming out is positive
    const isZoomingIn = e.deltaY < 0

    let newScale = isZoomingIn ? scale + 1 : scale - 1
    
    if (newScale >= MAP_MAX_SCALE) newScale = MAP_MAX_SCALE;
    else if (newScale <= MAP_MIN_SCALE) newScale = MAP_MIN_SCALE;
    setScale(newScale)
    const scaleDifference = newScale - scale

    const mousePosition = getMousePosition(e as any, boundingBlockRef.current as HTMLDivElement, scale)
    const { positionX, positionY } = transform.instance.transformState;

    const calculatedPositionX = positionX - mousePosition.x * scaleDifference;
    const calculatedPositionY = positionY - mousePosition.y * scaleDifference;

    // Set new state, then ensure it's in bound with a zoom in call
    transform.instance.setTransformState(newScale, calculatedPositionX, calculatedPositionY);
    transform.zoomIn(0)
  }

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
      wrapperClass="sunset-map-dynamic"
      contentClass="sunset-map-dynamic-content"
    >
      {/* BOUNDING BLOCK */}
      <div className="sunset-map-bounding-block" 
        onWheel={(e) => onWheel(e)}
        onClick={(e) => onClick(e)}
        onDoubleClick={(e) => {onDoubleClick(e)}}
        ref={boundingBlockRef} 
      ></div>

      {/* BACKGROUND GLOWS */}
      <div className="sunset-map-large-glowing-background"></div>
      <div className="sunset-map-large-outer-fade-background"></div>
      <div className="sunset-map-glowing-sun" style={{
        opacity: opacityFadeOut * 0.4
      }}></div>

      {/* PARALLAXING STARS */}
      <div className="sunset-map-starry-container">
        <div className="sunset-map-starry-pattern" style={{
          transform: `transform(-50%, -50%)`,
          backgroundSize: `${rescale * 800}px`,
          backgroundPosition: `${posX * 0.3}px ${posY * 0.3}px`,
        }}></div>
      </div>
        
      {/* GRID AT HIGH ZOOM */}
      <SystemGrid />

      {/* ROOT LOCATION */}
      <div className="sunset-map-inner-container">
        <SystemMapLocation
          location={locationsData}
          isRootElement
          transform={transform}
          onWheel={onWheel}
        />
      </div>
    </TransformComponent>
  )
}

const SystemGrid = () => {
  const [opacityFadeIn, setOpacityFadeIn] = useAtom(
    opacityFadeInAtom
  )

  return (
    <div
      className="sunset-map-grid-container"
      style={{
        opacity: opacityFadeIn,
      }}
    >
      <div className="sunset-map-grid"></div>
    </div>
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

export default SystemMap




