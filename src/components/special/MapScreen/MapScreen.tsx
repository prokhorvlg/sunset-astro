import BaseMap, { MapComponent } from "@/components/special/MapScreen/BaseMap/BaseMap"
import LocalMap from "@/components/special/MapScreen/BaseMap/LocalMap/LocalMap"
import { selectedLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import MapModal from "@/components/special/MapScreen/MapModal"
import DiagonalPattern from "@/components/special/patterns/DiagonalPattern"
import { useAtom } from "jotai"
import { createRef, useEffect, useRef, useState } from "react"
import './MapScreen.scss'

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [isIntroOpen, setIsIntroOpen] = useState(false)
  const [isExpanded, setIsExpended] = useState(false)
  const [isSystemMapOn, setIsSystemMapOn] = useState(true)
  const locationContentRefs = useRef({})

  const refAllContentItems = () => {
    const allLocationItems = Array.from(document.getElementsByClassName("location-content-item") as HTMLCollectionOf<HTMLElement>)

    allLocationItems.forEach((item) => {
      locationContentRefs.current[item.id] = item
    })
  }

  useEffect(() => {
    // On first run, ref each element
    if (Object.keys(locationContentRefs.current).length === 0) {
      refAllContentItems()
    }

    // Apply visible class
    //if (!selectedLocation && !selectedLocation?.id) return
    if (!selectedLocation) return
    const selectedId = selectedLocation?.id || ""
    try {
      locationContentRefs.current["content-" + selectedId].style.display = "block"
    } catch (e) {
      console.warn("Content not found for location with given id.")
    }
  }, [isExpanded, selectedLocation])

  return (
    <div className="map-screen">

      {isIntroOpen &&
        <MapModal introContent={props.mapIntro} />
      }

      <div className="map-header">
        <div className="map-title">
          <h1>Map | Solar System</h1>
        </div>

        <div className="button-set left">
          <button>{"<"}</button>
        </div>

        <div className="map-header-diagonal"></div>

        <div className="button-set right">
          <button onClick={e => setIsSystemMapOn(prev => !prev)}>M</button>
          <button onClick={(e) => setIsIntroOpen(true)}>?</button>
        </div>
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
        <p>{selectedLocation?.flavorText}</p>
        <p>{selectedLocation?.description}</p>
        <p>{selectedLocation?.worldAffiliation}</p>
        <p>{selectedLocation?.typeText}</p>
        <p>{selectedLocation?.subType}</p>
        <>{props.locationContent}</>
      </div>
    </div>
  )
}

export default MapScreen