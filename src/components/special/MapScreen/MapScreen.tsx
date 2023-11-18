import {
  HumanEraAffiliation,
  MapComponent,
} from "@/components/special/MapScreen/BaseMap/data/types"
import LocalMap from "@/components/special/MapScreen/BaseMap/components/LocalMap/LocalMap"
import {
  isIntroOpenAtom,
  isSelectedModalOpenAtom,
  selectedLocationAtom,
} from "@/components/special/MapScreen/BaseMap/state/atoms"
import MapModal from "@/components/special/MapScreen/MapModal"
import DiagonalPattern from "@/components/special/patterns/DiagonalPattern"
import { useAtom } from "jotai"
import {
  createRef,
  useEffect,
  useRef,
  useState,
} from "react"

import Modal from "react-modal"
import { styled } from "@stitches/react"

const ColoredButton = styled("button", {})
const ModalContent = styled("article", {})

import "./MapScreen.scss"
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import BaseMap from "@/components/special/MapScreen/BaseMap/BaseMap"

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [isIntroOpen, setIsIntroOpen] = useAtom(isIntroOpenAtom)
  const [isSystemMapOn, setIsSystemMapOn] = useState(true)
  const [activeMap, setActiveMap] = useState<MapComponent>(
    MapComponent.System
  )
  // const locationContentRefs = useRef({})

  const [isSelectedModalOpen, setIsSelectedModalOpen] =
    useAtom(isSelectedModalOpenAtom)

  // const refAllContentItems = () => {
  //   const allLocationItems = Array.from(
  //     document.getElementsByClassName(
  //       "location-content-item"
  //     ) as HTMLCollectionOf<HTMLElement>
  //   )

  //   allLocationItems.forEach((item) => {
  //     locationContentRefs.current[item.id] = item
  //   })
  // }

  // useEffect(() => {
  //   // On first run, ref each element
  //   if (
  //     Object.keys(locationContentRefs.current).length === 0
  //   ) {
  //     refAllContentItems()
  //   }

  //   // Apply visible class
  //   //if (!selectedLocation && !selectedLocation?.id) return
  //   if (!selectedLocation) return
  //   const selectedId = selectedLocation?.id || ""
  //   try {
  //     locationContentRefs.current[
  //       "content-" + selectedId
  //     ].style.display = "block"
  //   } catch (e) {
  //     console.warn(
  //       "Content not found for location with given id."
  //     )
  //   }
  // }, [isSelectedModalOpen, selectedLocation])

  return (
    <div className="map-screen">
      <MapModal
        isOpen={isIntroOpen}
        setIsOpen={setIsIntroOpen}
      >
        {props.mapIntro}
      </MapModal>

      <div className="map-body">
        <BaseMap map={activeMap} />
      </div>

      <div className="map-header">
        <div className="map-header-diagonal"></div>
        <div className="map-title">
          <h1>Map | Sunset System</h1>
        </div>
        <div className="map-header-diagonal"></div>
      </div>

      <MapModal
        isOpen={isSelectedModalOpen}
        setIsOpen={setIsSelectedModalOpen}
      >
        <div className="map-selected-content">
          <div className="header-text">
            <h2
              className="name"
              style={{
                color: selectedLocation?.color || undefined,
              }}
            >
              {selectedLocation?.name}
            </h2>
            <p className="type">
              {selectedLocation?.typeText}
            </p>
          </div>
          <div className="selected-content-container">
            <div className="flavor-text-container">
              <p>{selectedLocation?.flavorText}</p>
            </div>
            <>{props.locationContent}</>
            <hr />
            <SelectedDataRow
              label="Sub-type"
              content={selectedLocation?.subType}
            />
            <SelectedDataRow
              label="Realm of Origin"
              content={selectedLocation?.worldAffiliation}
            />
            <SelectedDataRow
              label="Human-Era Affiliation"
              content={
                mapHumanEraAffiliationToLabel[
                  selectedLocation?.humanEraAffiliation ||
                    ""
                ]
              }
            />
            <SelectedDataRow
              label="Machine-Era Affiliation"
              content={undefined}
            />
          </div>
        </div>
      </MapModal>
    </div>
  )
}

const SelectedDataRow = ({
  label,
  content,
}: {
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
  [HumanEraAffiliation.GreaterUnion]: "Greater Union",
}

export default MapScreen
