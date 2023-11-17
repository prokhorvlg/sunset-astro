import LocalMapLocation from "@/components/special/MapScreen/BaseMap/components/LocalMap/LocalMapLocation"
import { titanLocations } from "@/components/special/MapScreen/BaseMap/data/localLocationsData"
import "./LocalMap.scss"
import type { MapComponentProps } from "@/components/special/MapScreen/BaseMap/BaseMap"

const LocalMap = (props: MapComponentProps) => {
  return (
    <div className="local-map">
      <div className='local-map-center'>
        {titanLocations.map(loc => {
          return <LocalMapLocation 
            location={loc}
          />
        })}
      </div>
    </div>
  )
}

export default LocalMap