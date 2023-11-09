import BaseMap, { MapComponent } from "@/components/special/MapScreen/BaseMap/BaseMap"
import LocalMap from "@/components/special/MapScreen/BaseMap/LocalMap/LocalMap"
import { selectedLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import MapModal from "@/components/special/MapScreen/MapModal"
import { useAtom } from "jotai"
import { useEffect, useRef, useState } from "react"
import './MapScreen.scss'

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [isIntroOpen, setIsIntroOpen] = useState(false)
  const [isExpanded, setIsExpended] = useState(false)
  const [isSystemMapOn, setIsSystemMapOn] = useState(true)

  

  //interbeacon

  console.log("props.locationContent", props.locationContent)

  const renderedContent = () => {
    return <>{props.locationContent}</>
  }

  console.log("renderedContent", renderedContent())

  useEffect(() => {
    // Whenever expanded, apply visible class only to relevant 
  }, [isExpanded])

  const locationContentRef = useRef(null)
  const interbeaconRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    console.log("trynna")
    if (!document.getElementById("content-interbeacon")) return
    interbeaconRef.current = document.getElementById("content-interbeacon")
    console.log("interbeaconRef.current", interbeaconRef.current) 
  })

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
        {/* {isExpanded &&
          <>{props.locationContent}</>
        } */}
      </div>

    </div>
  )
}

export default MapScreen