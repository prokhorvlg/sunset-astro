import { HumanEraAffiliation } from "@/components/special/MapScreen/BaseMap/data/types"
import { isSelectedModalOpenAtom, selectedLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import MapModal from "@/components/special/MapScreen/MapModal"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { MdLocationPin } from "react-icons/md"
import './MapDetailsModalContainer.scss'

const MapDetailsModalContainer = ({
  children,
  id
}) => {
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [isSelectedModalOpen, setIsSelectedModalOpen] =
  useAtom(isSelectedModalOpenAtom)

  const hasSelection = selectedLocation !== null
  const effectiveId = hasSelection ? 
    (selectedLocation.id ? selectedLocation.id : selectedLocation.name.toLowerCase()) :
    ""
  
  const locationIsOpen = hasSelection && isSelectedModalOpen && effectiveId === id

  return (
    <MapModal
        headerIcon={<MdLocationPin />}
        headerText="Selected location"
        isOpen={locationIsOpen}
        setIsOpen={setIsSelectedModalOpen}
      >
        <div className="map-selected-content">
          <div className="selected-content-container">

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

            <div className="flavor-text-container">
              <p>{selectedLocation?.flavorText}</p>
            </div>
            
            <>{children}</>

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

export default MapDetailsModalContainer