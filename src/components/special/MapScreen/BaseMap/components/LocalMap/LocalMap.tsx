import LocalMapLocation from "@/components/special/MapScreen/BaseMap/components/LocalMap/LocalMapLocation"
import "./LocalMap.scss"
import type { MapComponentProps } from "@/components/special/MapScreen/BaseMap/BaseMap"
import { activeMapMetaAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import type { LocalLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"

const LocalMap = (props: MapComponentProps) => {
  const [activeMapMeta, setActiveMapMeta] = useAtom(activeMapMetaAtom)

  if (!activeMapMeta.image) return null
  const heightToBoundingRatio = activeMapMeta.dimensions.x / activeMapMeta.image.width

  return (
    <>
      {activeMapMeta.image &&
        <div className="local-map-bg" style={{
          backgroundImage: `url(${activeMapMeta.image.src})`,
          height: activeMapMeta.image.height,
          width: activeMapMeta.image.width,
          transform: `translate(-50%, -50%) scale(${heightToBoundingRatio})`
        }}></div>
      }

      {(activeMapMeta.locations as LocalLocationNode[]).map((location) => {
        return <LocalMapLocation
          key={location.name}
          location={location}
        />
      })}
    </>
  )
}

export default LocalMap