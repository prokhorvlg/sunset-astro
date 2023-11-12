import BaseMap, { MapComponent } from "@/components/special/MapScreen/BaseMap/BaseMap"
import { HumanEraAffiliation } from "@/components/special/MapScreen/BaseMap/data/types"
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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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

      

      <div className="map-body">
        <BaseMap map={isSystemMapOn ? MapComponent.System : MapComponent.Titan} />
      </div>

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

      {/* <div className={`map-selected ${isExpanded ? "expanded" : ""}`}>
        <button 
          className="selected-header"
          onClick={(e) => setIsExpended(!isExpanded)}>
            <div className="header-text">
              <h2 className="name" style={{
                color: selectedLocation?.color || undefined
              }}>{selectedLocation?.name}</h2>
              <p className="type">{selectedLocation?.typeText}</p>
            </div>
        </button>
        <div className="selected-content-container">
          
          <div className="flavor-text-container"><p>{selectedLocation?.flavorText}</p></div>
          <>{props.locationContent}</>
          <hr />
          <SelectedDataRow label="Sub-type" content={selectedLocation?.subType} />
          <SelectedDataRow label="Realm of Origin" content={selectedLocation?.worldAffiliation} />
          <SelectedDataRow label="Human-Era Affiliation" content={mapHumanEraAffiliationToLabel[selectedLocation?.humanEraAffiliation || ""]} />
          <SelectedDataRow label="Machine-Era Affiliation" content={undefined} />
          
          
        </div>
      </div> */}
      
    </div>
  )
}

const SelectedDataRow = ({
  label,
  content
}:{
  label?: string
  content?: string
}) => {
  return (
    <div className="row">
      <p className="label">{label || "NOT FOUND"}</p>
      <div className="filler"></div>
      <p className="content">{content || "N/A"}</p>
    </div>
  )
}

const mapHumanEraAffiliationToLabel = {
  [HumanEraAffiliation.GreaterUnion]: "Greater Union"
}

export default MapScreen