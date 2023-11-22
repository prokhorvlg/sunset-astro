import { MAP_MAX_SCALE, MAP_MIN_SCALE } from "@/components/special/MapScreen/BaseMap/data/constants"
import { scaleAtom, rescaleAtom, usePosXAtom, usePosYAtom, selectedLocationAtom, boundingBlockAtom, isSelectedModalOpenAtom, isIntroOpenAtom, isDetailLevelAtom, activeMapAtom, activeMapMetaAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import { useRef, useEffect, type MouseEventHandler } from "react"
import { TransformWrapper, TransformComponent, type ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch"
import {debounce} from "debounce"
import './BaseMap.scss'
import { useMapWheel } from "@/components/special/MapScreen/BaseMap/hooks/useMapWheel"
import { LuOrbit } from "react-icons/lu";
import { PiCaretUpBold } from "react-icons/pi";
import { TbRefresh, TbZoomIn, TbZoomOut } from "react-icons/tb";
import { FaQuestionCircle } from "react-icons/fa"
import { ActiveMap, ActiveMapType } from "@/components/special/MapScreen/BaseMap/data/mapTypes"
import { useMapControls } from "@/components/special/MapScreen/BaseMap/hooks/useMapControls"
import LocalMap from "@/components/special/MapScreen/BaseMap/components/LocalMap/LocalMap"
import SystemMap from "@/components/special/MapScreen/BaseMap/components/SystemMap/SystemMap"

export interface MapComponentProps {
  transform: ReactZoomPanPinchContentRef
}

const getMapComponent = (mapType: ActiveMapType, props: any) => {
  const mapToMap = {
    [ActiveMapType.System]: <SystemMap {...props} />,
    [ActiveMapType.Local]: <LocalMap {...props} />
  }
  return mapToMap[mapType]
}

const BaseMap = () => {
  // BASE MAP STATE
  const [scale, setScale] = useAtom(scaleAtom)
  const [posX, setPosX] = useAtom(usePosXAtom)
  const [posY, setPosY] = useAtom(usePosYAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)

  // MAP SCREEN STATE
  const [isSelectedModalOpen, setIsSelectedModalOpen] =
  useAtom(isSelectedModalOpenAtom)
  const [isIntroOpen, setIsIntroOpen] =
  useAtom(isIntroOpenAtom)

  // SELECTION STATE
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  const {
    transformComponentRef,
    mapContainerRef,
    reset,
    resetToSelected,
    resetToCenter
  } = useMapControls()

  // CURRENT ACTIVE MAP STATE
  const [activeMap, setActiveMap] = useAtom(activeMapAtom)
  const [activeMapMeta, setActiveMapMeta] = useAtom(activeMapMetaAtom)

  return (
    <TransformWrapper
      ref={transformComponentRef}
      initialScale={scale}
      initialPositionX={0}
      initialPositionY={0}
      minScale={activeMapMeta.minScale}
      maxScale={activeMapMeta.maxScale}
      smooth={false}
      disablePadding={activeMapMeta.mapType === ActiveMapType.Local}
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
            className={`base-map-container ${activeMap}`}
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
                    onClick={() => {
                      if (!selectedLocation.localMap) return
                      setActiveMap(selectedLocation.localMap)
                      resetToCenter()
                    }}
                    icon={<TbZoomIn />}
                    isWide
                  />
                }
                {(selectedLocation === null && 
                    activeMap !== ActiveMap.System
                  ) &&
                  <MapControlButton
                    classes="open-local-map"
                    text="Return to System"
                    onClick={() => {
                      setActiveMap(ActiveMap.System)
                      resetToCenter()
                    }}
                    icon={<TbZoomOut />}
                    isWide
                  />
                }
                <MapControlButton
                  classes="about-map"
                  text="About Map"
                  onClick={() => setIsIntroOpen(true)}
                  icon={<FaQuestionCircle />}
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
                  <div className="open-details-none"><p>AWAITING SELECTION<span className="blinking">_</span></p></div>
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
}: {
  transform: ReactZoomPanPinchContentRef
  reset: () => void
}) => {
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [isDetailLevel, setIsDetailLevel] = useAtom(
    isDetailLevelAtom
  )
  const [activeMapMeta, setActiveMapMeta] = useAtom(activeMapMetaAtom)
  
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
      wrapperClass={`base-transform-wrapper ${isDetailLevel ? "is-detail-level" : ""}`}
      contentClass="base-transform-content"
    >
      {/* BOUNDING BLOCK */}
      <div
        className="bounding-block"
        style={{
          height: activeMapMeta.dimensions.y,
          width: activeMapMeta.dimensions.x,
        }}
        onWheel={(e) => onWheel(e)}
        onClick={(e) => onClick(e)}
        onDoubleClick={(e) => {
          onDoubleClick(e)
        }}
        ref={boundingBlockRef}
      ></div>

        <div
          className="map-bg-pattern" style={{
            display: isDetailLevel ? "block" : "none"
          }}
        ></div>

      {getMapComponent(activeMapMeta.mapType, {
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