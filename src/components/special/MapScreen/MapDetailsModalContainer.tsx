import { HumanEraAffiliation, LocationType, mapHumanEraAffiliationToText, mapSiteSubTypeToText, mapTypeToText, mapWorldAffiliationToText } from "@/components/special/MapScreen/BaseMap/data/types"
import { isSelectedModalOpenAtom, selectedLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import MapModal from "@/components/special/MapScreen/MapModal"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { MdLocationPin } from "react-icons/md"
import './MapDetailsModalContainer.scss'
import { getIconFromHumanEraAffiliation, getIconFromSubType, getIconFromType, getIconFromWorldAffiliation } from "@/components/special/MapScreen/BaseMap/data/icons"

const MapDetailsModalContainer = ({
  children,
  id,
  matchingFile
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

  const isWorld = (selectedLocation?.type === LocationType.Planet ||
    selectedLocation?.type === LocationType.Moon ||
    selectedLocation?.type === LocationType.Sun)

  return (
    <MapModal
        headerIcon={<MdLocationPin />}
        headerText="Selected location"
        isOpen={locationIsOpen}
        setIsOpen={setIsSelectedModalOpen}
        //desiredWidth={matchingFile !== undefined ? 1600 : 1200}
        desiredWidth={selectedLocation?.isWideContent ? 1600 : 1200}
      >
        <div className="map-selected-content">
          <div className="selected-content-container">

            {/* {mapTypeToText[selectedLocation?.type || ""]} */}
            <div className="header-types-title-container">
              {/* TITLE */}
              <div className="header-text-container">
                {selectedLocation?.icon &&
                  <div className={`header-main-icon ${isWorld ? "is-world" : ""}`} style={{
                    color: selectedLocation?.color
                  }}>
                    {selectedLocation?.icon}
                  </div>
                }
                <div className="header-text">
                  <h2
                    className={`name ${selectedLocation?.worldAffiliation}`}
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
              </div>
                    
              {/* TYPES */}
              <div className="header-types">
                {!selectedLocation?.subType &&
                  <div className={`type`}>
                    {getIconFromType(selectedLocation?.type)} {selectedLocation?.type}
                  </div>
                }
                {selectedLocation?.subType &&
                  <div className={`sub-type`}>
                    {getIconFromSubType(selectedLocation?.subType)} {mapSiteSubTypeToText[selectedLocation?.subType] ?? selectedLocation?.subType}
                  </div>
                }
                {selectedLocation?.worldAffiliation &&
                  <div className={`world-affiliation ${selectedLocation?.worldAffiliation}`}>
                    {getIconFromWorldAffiliation(selectedLocation?.worldAffiliation)} {mapWorldAffiliationToText[selectedLocation?.worldAffiliation || ""]} 
                  </div>
                }
                {selectedLocation?.humanEraAffiliation &&
                  <div className={`human-era-affiliation ${selectedLocation?.humanEraAffiliation}`}>
                    {getIconFromHumanEraAffiliation(selectedLocation?.humanEraAffiliation)} 
                    {mapHumanEraAffiliationToText[selectedLocation?.humanEraAffiliation || ""]} 
                </div>
                }
                {selectedLocation?.humanEraPopulation &&
                  <div className={`human-era-population`}>
                    human pop. ~{selectedLocation.humanEraPopulation.toLocaleString()} 
                </div>
                }
              </div>
            </div>

            <div className="flavor-text-container">
              <p>{selectedLocation?.flavorText}</p>
            </div>
            
            <>{children}</>

            {/* <hr />

            <SelectedDataRow
              label="Sub-type"
              content={selectedLocation?.subType}
            />
            <SelectedDataRow
              label="Realm of Origin"
              content={mapWorldAffiliationToText[selectedLocation?.worldAffiliation || ""]}
            />
            <SelectedDataRow
              label="Human-Era Affiliation"
              content={
                mapHumanEraAffiliationToText[
                  selectedLocation?.humanEraAffiliation ||
                    ""
                ]
              }
            />
            <SelectedDataRow
              label="Machine-Era Affiliation"
              content={undefined}
            /> */}

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

export default MapDetailsModalContainer