import PageHeading from "@/components/page/PageHeading.component"
import MapModal from "@/components/special/MapScreen/MapModal"
import { selectedLocationAtom } from "@/components/special/SystemMap/state/atoms"
import SystemMap from "@/components/special/SystemMap/SystemMap"
import { useAtom } from "jotai"
import { useState } from "react"
import './MapScreen.scss'
import LocalMap from "../LocalMap/LocalMap"

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  const [isIntroOpen, setIsIntroOpen] = useState(false)
  const [isExpanded, setIsExpended] = useState(false)
  const [isSystemMapOn, setIsSystemMapOn] = useState(false)

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
        {isSystemMapOn ? <SystemMap /> : <LocalMap />}
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