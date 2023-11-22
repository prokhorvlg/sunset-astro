import { scaleAtom, usePosXAtom, usePosYAtom, rescaleAtom, opacityFadeOutAtom, isDetailLevelAtom, activeMapMetaAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import SystemMapLocation from "@/components/special/MapScreen/BaseMap/components/SystemMap/SystemMapLocation"
import { useAtom } from "jotai"
import './SystemMap.scss'
import type { MapComponentProps } from "@/components/special/MapScreen/BaseMap/BaseMap"
import type { SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"

const SystemMap = (props: MapComponentProps) => {
  const [scale, setScale] = useAtom(scaleAtom)
  const [posX, setPosX] = useAtom(usePosXAtom)
  const [posY, setPosY] = useAtom(usePosYAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [opacityFadeOut, setOpacityFadeOut] = useAtom(
    opacityFadeOutAtom
  )
  const [isDetailLevel, setIsDetailLevel] = useAtom(
    isDetailLevelAtom
  )

  const starryPositionModifier = isDetailLevel ? 0.5 : 0.5

  const [activeMapMeta, setActiveMapMeta] = useAtom(activeMapMetaAtom)

  return (
    <>
      {/* BACKGROUND GLOWS */}
      <div className="sunset-map-large-glowing-background" style={{
        opacity: isDetailLevel ? 0.2 : undefined
        // height: 1 / scale * 2000,
        // width: 1 / scale * 2000,
      }}></div>
      <div className="sunset-map-large-outer-fade-background"></div>

      <div className="sunset-map-glowing-sun" style={{
        opacity: opacityFadeOut * 0.4
      }}></div>
      
      {/* PARALLAXING STARS */}
      <div className="sunset-map-starry-container">
        <div className="sunset-map-starry-pattern" style={{
          transform: `transform(-50%, -50%)`,
          width: 3200 + 200,
          height: 2000 + 200,
          backgroundSize: isDetailLevel ? "200px" : `${rescale * 800}px`,
         // backgroundSize: isDetailLevel ? "200px" : "600px",
          backgroundPosition: `${posX * rescale * starryPositionModifier}px ${posY * rescale * starryPositionModifier}px`,
          //display: isDetailLevel ? "none" : "block"
        }}></div>
      </div>
        
      {/* GRID AT HIGH ZOOM */}
      {/* <div className="sunset-map-grid-container"
        style={{
          opacity: opacityFadeIn
        }}>
        <div className="sunset-map-grid"></div>
      </div> */}
      
      {/* ROOT LOCATION */}
      <div className="sunset-map-inner-container">
        <SystemMapLocation
          location={activeMapMeta.locations as SystemLocationNode}
          isRootElement
          transform={props.transform}
        />
      </div>
    </>
  )
}

export default SystemMap