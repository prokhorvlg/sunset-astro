import LocalMapLocation from "@/components/special/MapScreen/BaseMap/components/LocalMap/LocalMapLocation"
import "./LocalMap.scss"
import type { MapComponentProps } from "@/components/special/MapScreen/BaseMap/BaseMap"
import { activeMapMetaAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import type { LocalLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"

const LocalMap = (props: MapComponentProps) => {
  const [activeMapMeta, setActiveMapMeta] = useAtom(activeMapMetaAtom)

  return (
    <div className="local-map" style={{
      //top: -activeMapMeta.dimensions.y
    }}>

      {activeMapMeta.image &&
        <div className="map-bg" style={{
          backgroundImage: `url(${activeMapMeta.image.src})`,
          height: activeMapMeta.dimensions.y,
          width: activeMapMeta.dimensions.x
        }}></div>
      }

      <div className='local-map-center'>
        {(activeMapMeta.locations as LocalLocationNode[]).map((location) => {
          return <LocalMapLocation
            key={location.name}
            location={location}
          />
        })}
      </div>

    </div>
  )
}

export default LocalMap