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
import { mathClamp } from "@/components/special/SystemMap/utils/math"

const SMOOTH_SCROLL_MODE = false

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
    //console.log(posX * (scale), posY * (scale))
  }, [posX])

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
    if (selectedLocation) {
      transformComponentRef.current?.zoomToElement(
        selectedLocation.name,
        1,
        500
      )
    } else {
      transformComponentRef.current?.zoomToElement(
        "Sol",
        1,
        500
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
        disabled: SMOOTH_SCROLL_MODE
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
              {/* <svg className="noise-rectangle" xmlns='http://www.w3.org/2000/svg'>
                  <filter id='noiseFilter'>
                    <feTurbulence 
                      type='fractalNoise' 
                      result="noiseResult"
                      baseFrequency='0.65' 
                      numOctaves='3' 
                      stitchTiles='stitch'>
                    </feTurbulence>
                    <feColorMatrix in="noiseResult" type="hueRotate" values="0" result="noiseRotated">
                      <animate attributeName="values" from="0" to="360" dur="20s" repeatCount="indefinite"/>
                    </feColorMatrix>
                  </filter>
                  
                  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
                </svg> */}
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
  const [opacityFadeOut, setOpacityFadeOut] = useAtom(
    opacityFadeOutAtom
  )
  const [scale, setScale] = useAtom(scaleAtom)
  const [posX, setPosX] = useAtom(usePosXAtom)
  const [posY, setPosY] = useAtom(usePosYAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  
  const [realX, setRealX] = useState(0)
  useEffect(() => {
    //console.log("posX", posX)
    setRealX(posX)
  }, [posX])

  const onWheel = (e) => {
    console.log("ewf")
    if (SMOOTH_SCROLL_MODE) {
      

      const wrapper = document.getElementsByClassName('react-transform-wrapper')?.[0];
      if (!wrapper) return
      //console.log(wrapper?.getBoundingClientRect().left)
      const x = wrapper?.getBoundingClientRect().left || 0;
      const y = wrapper?.getBoundingClientRect().top || 0;
      const coordinates = {
          x: x - e.clientX,
          y: y - e.clientY,
        };

      
      const newScale = scale - 1

      transform.setTransform(
        (coordinates.x + wrapper?.clientWidth / (newScale * 2)) * newScale,
        (coordinates.y + wrapper?.clientHeight / (newScale * 2)) * newScale,
        newScale
      );
      //const x = e.nativeEvent.offsetX
      //const y = e.nativeEvent.offsetY
      //console.log(e.pageX)
      //setScale(scale)
      const mod = 0
      //transformComponentRef.current?.setTransform(x + mod,y + mod,scale + 1, 200)
      //transformComponentRef.current?.zoomIn(1 / rescale / 2, 200, "easeInOutCubic")
    }
  }

  return (
    <TransformComponent
      wrapperClass="sunset-map-dynamic"
      contentClass="sunset-map-dynamic-content"
      
    >
      <div className="sunset-map-bounding-block" onWheel={(e) => onWheel(e)}></div>
      <div className="sunset-map-large-glowing-background"></div>
      <div className="sunset-map-large-outer-fade-background"></div>
     
      <div className="sunset-map-glowing-sun" style={{
        opacity: opacityFadeOut * 0.4
      }}></div>
      { scale < 4 &&
        <div className="sunset-map-starry-container">
          <div className="sunset-map-starry-pattern" style={{
            transform: `transform(-50%, -50%)`,
            //backgroundSize: `${rescale * 800}px`,
            backgroundPosition: `${posX * 0.3}px ${posY * 0.3}px`, //scale(${rescale})
            //opacity: mathClamp(opacityFadeOut * 0.1, 0, 0.06),
          }}></div>
        </div>
      }
      
      <SystemGrid />
      <div className="sunset-map-inner-container">
        <SystemMapLocation
          location={locationsData}
          isRootElement
          transform={transform}
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
        //marginLeft: -(posX * rescale / 5),
        //marginTop: -(posY * rescale / 5)
        opacity: opacityFadeIn,
      }}
    >
      <div className="sunset-map-grid"></div>
    </div>
  )
}

export default SystemMap
