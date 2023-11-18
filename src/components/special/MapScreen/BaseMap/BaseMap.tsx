import { MAP_MAX_SCALE, MAP_MIN_SCALE } from "@/components/special/MapScreen/BaseMap/data/constants"
import { transformAtom, scaleAtom, rescaleAtom, usePosXAtom, usePosYAtom, selectedLocationAtom, boundingBlockAtom, isSelectedModalOpenAtom, isIntroOpenAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import SystemMap from "@/components/special/MapScreen/BaseMap/components/SystemMap/SystemMap"
import { useAtom } from "jotai"
import { useRef, useEffect, useState, type MouseEventHandler } from "react"
import { TransformWrapper, TransformComponent, type ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch"
import {debounce} from "debounce"
import LocalMap from "@/components/special/MapScreen/BaseMap/components/LocalMap/LocalMap"
import './BaseMap.scss'
import { useMapWheel } from "@/components/special/MapScreen/BaseMap/hooks/useMapWheel"
import { MapComponent } from "@/components/special/MapScreen/BaseMap/data/types"
import { LuOrbit } from "react-icons/lu";
import { PiCaretUpBold } from "react-icons/pi";
import { TbInfoSmall, TbRefresh, TbZoomIn, TbZoomReset } from "react-icons/tb";

const getMapComponent = (map: MapComponent, props: any) => {
  const mapToMap = {
    [MapComponent.System]: <SystemMap {...props} />,
    [MapComponent.Titan]: <LocalMap {...props} />
  }
  return mapToMap[map]
}

export interface MapComponentProps {
  transform: ReactZoomPanPinchContentRef
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
  const [isSelectedModalOpen, setIsSelectedModalOpen] = useAtom(isSelectedModalOpenAtom)
  const [isIntroOpen, setIsIntroOpen] = useAtom(isIntroOpenAtom)

  useEffect(() => {
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
          <div
            className={`base-map-container ${map}`}
            ref={mapContainerRef}
          >
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
              {/* PANNING RULER */}
              <div className="ruler">
                <div
                  className="ruler-pattern"
                  style={{
                    transform: `translate(${posX}px, 0px)`,
                  }}
                >
                  <div className="ruler-border"></div>
                  <div className="ruler-blocks">
                    {Array.from({ length: 400 }).map(
                      (item, i) => (
                        <div
                          className="ruler-block"
                          key={i}
                        >
                          <div
                            className="ruler-block-width"
                            style={{
                              width: `${scale * 10}px`,
                            }}
                          ></div>
                          <div className="ruler-block-marker"></div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* FLOATING TEXT TOP */}
              <div className="floating-code-text">
                <span className="scale">
                  M_SCALE 00 {Math.round(scale)}
                </span>
                <span className="center-coords">
                  {Math.round((-posX + 998) * rescale)} :{" "}
                  {Math.round((-posY + 552) * rescale)}{" "}
                  M_CENTER STRICT
                </span>
              </div>

              {/* FLOATING MAP TITLE */}
              <div className="floating-title-container">
                <p>current map //</p>
                <h1>
                  <LuOrbit />
                  solar system
                </h1>
              </div>

              {/* CONTROLS */}
              <div className="bottom-controls">
                {(selectedLocation !== null && 
                    selectedLocation.localMap
                  ) &&
                  <MapControlButton
                    classes="open-local-map"
                    text="Open Local Map"
                    onClick={reset}
                    icon={<TbZoomIn />}
                    isWide
                  />
                }
                <MapControlButton
                  classes="about-map"
                  text="About Map"
                  onClick={() => setIsIntroOpen(true)}
                  icon={<TbInfoSmall />}
                />
                {selectedLocation !== null && 
                  <MapControlButton
                    classes="open-details"
                    text="Open Details"
                    onClick={() => setIsSelectedModalOpen(true)}
                    icon={<PiCaretUpBold />}
                    isWide
                  />
                }
                {selectedLocation === null && 
                  <div className="open-details-none"><p>NO SELECTED<span className="blinking">_</span></p></div>
                }
                <MapControlButton
                  classes="reset-view"
                  text="Reset View"
                  onClick={reset}
                  icon={<TbRefresh />}
                />
              </div>

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
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  
  const boundingBlockRef = useRef<HTMLDivElement>(null);
  const [boundingBlock, setBoundingBlock] = useAtom(boundingBlockAtom)
  const { onWheel }= useMapWheel()

  useEffect(() => {
    setBoundingBlock(boundingBlockRef.current)
  }, [boundingBlockRef])

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

const MapControlButton = ({
  text,
  icon,
  onClick,
  classes,
  isWide
}: {
  text?: string
  icon?: any
  onClick?: MouseEventHandler<HTMLButtonElement>
  classes?: string
  isWide?: boolean
}) => {
  return (
    <button className={`map-control-button ${classes ? classes : ""} ${isWide ? "is-wide" : ""}`} onClick={onClick}>
      <div className="icon-top">
        {icon}
      </div>
      <p className="text-bottom">{text}</p>
    </button>
  )
}

export default BaseMap