import BaseMap, { MapComponent } from "@/components/special/MapScreen/BaseMap/BaseMap"
import LocalMap from "@/components/special/MapScreen/BaseMap/LocalMap/LocalMap"
import { selectedLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import MapModal from "@/components/special/MapScreen/MapModal"
import { useAtom } from "jotai"
import { useState } from "react"
import './MapScreen.scss'

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [isIntroOpen, setIsIntroOpen] = useState(false)
  const [isExpanded, setIsExpended] = useState(false)
  const [isSystemMapOn, setIsSystemMapOn] = useState(true)

  return (
    <div className="map-screen">

      {isIntroOpen &&
        <MapModal introContent={props.mapIntro} />
      }

      <div className="map-header">
        <button>Back</button>
        <h1>Map | Solar System</h1>
        <button onClick={e => setIsSystemMapOn(prev => !prev)}>System Map On</button>
        <button onClick={(e) => setIsIntroOpen(true)}>?</button>
      </div>

      <div className="map-body">
        <BaseMap map={isSystemMapOn ? MapComponent.System : MapComponent.Titan} />
      </div>

      <div className={`map-selected ${isExpanded ? "expanded" : ""}`}>
        <button 
          className="selected-header"
          onClick={(e) => setIsExpended(!isExpanded)}>
            <p>{selectedLocation?.name}</p>
        </button>
        <p>{selectedLocation?.description}</p>
        {/* {props.mapIntro} */}
      </div>

    </div>
  )
}

export default MapScreen