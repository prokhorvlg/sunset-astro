import {
  isIntroOpenAtom,
} from "@/components/special/MapScreen/BaseMap/state/atoms"
import MapModal from "@/components/special/MapScreen/MapModal"
import { useAtom } from "jotai"
import BaseMap from "@/components/special/MapScreen/BaseMap/BaseMap"
import { FaQuestionCircle } from "react-icons/fa"
import { MdArrowForward } from "react-icons/md";
import "./MapScreen.scss"
import { useEffect } from "react"

export const MAP_INTRO_SEEN_ID = "map-intro-seen"

const MapScreen = (props) => {
  const [isIntroOpen, setIsIntroOpen] = useAtom(isIntroOpenAtom)

  useEffect(() => {
    // On load, check if localstorage recorded opened modal
    const currentMapIntroSeen = localStorage.getItem(MAP_INTRO_SEEN_ID)

    if (!currentMapIntroSeen) {
      // If not, open the intro modal
      setIsIntroOpen(true)
      // Then update localstorage
      localStorage.setItem(MAP_INTRO_SEEN_ID, "true")
    }    
  })

  return (
    <div className="map-screen">

      {/* INTRO MODAL */}
      <MapModal
        headerIcon={<FaQuestionCircle />}
        headerText="About the map"
        isOpen={isIntroOpen}
        setIsOpen={setIsIntroOpen}
        closeButtonContent={<><MdArrowForward /> Go forth and explore</>}
      >
        {props.mapIntro}
      </MapModal>

      {/* MAP */}
      <div className="map-body">
        <BaseMap />
      </div>

      {/* MAP HEADER (aesthetic) */}
      <div className="map-header">
        <div className="map-header-diagonal"></div>
        <div className="map-title">
          <h1>Map | Sunset System</h1>
        </div>
        <div className="map-header-diagonal"></div>
      </div>

    </div>
  )
}

export default MapScreen
