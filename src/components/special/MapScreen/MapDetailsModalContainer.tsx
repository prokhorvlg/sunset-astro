import { HumanEraAffiliation, LocationType, mapHumanEraAffiliationToText, mapSiteSubTypeToText, mapTypeToText, mapWorldAffiliationToText, WorldAffiliation } from "@/components/special/MapScreen/BaseMap/data/types"
import { isSelectedModalOpenAtom, selectedLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import MapModal from "@/components/special/MapScreen/MapModal"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { MdLocationPin } from "react-icons/md"
import { WiStars } from "react-icons/wi";
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
                  <p className="type" style={{
                      color: selectedLocation?.colorSecondary || undefined,
                  }}> 
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

            {(selectedLocation?.type === LocationType.Field && selectedLocation?.worldAffiliation === WorldAffiliation.Anomaly) && 
              <div className="reality-field">
                <p className="field-title"><WiStars /> <strong>Reality Field</strong></p>

                <p>This is a region of space where the rules governing reality no longer apply. They have either been deliberately altered or destroyed by chaotic noetic phenomena, causing strange anomalies that cannot be explained by rational means. The border is only an approximation, mostly based on events recorded within the field.</p>
                  
                <p>Intensity can vary depending on the field. Weak anomalies can be as simple as spatial warps, unexplainable signals, and manifested objects. These gradually ramp to include unwelcome visitors from timelines that never came to pass, dimensional folds which exist outside of known space, even entire planets in a state of flux.</p>
                  
                <p>The most dangerous of these anomalies change <em>you</em> in such a way that your own memory of events and very existence are inconsistent with the generally-accepted truth.</p>
              </div>
            }
            
            <>{children}</>
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