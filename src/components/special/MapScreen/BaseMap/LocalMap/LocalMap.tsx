import { MapComponentProps } from "@/components/special/MapScreen/BaseMap/BaseMap"
import LocalMapLocation from "@/components/special/MapScreen/BaseMap/LocalMap/components/LocalMapLocation"
import { titanLocations } from "@/components/special/MapScreen/BaseMap/data/localLocationsData"
import "./LocalMap.scss"

const LocalMap = (props: MapComponentProps) => {
  return (
    <div className="local-map">
      {titanLocations.map(loc => {
        return <LocalMapLocation 
          location={loc}
        />
      })}
    </div>
  )
}

export default LocalMap