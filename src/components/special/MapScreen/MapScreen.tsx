import {
  activeMapAtom,
  activeMapMetaAtom,
  isIntroOpenAtom,
} from "@/components/special/MapScreen/BaseMap/state/atoms"
import MapModal from "@/components/special/MapScreen/MapModal"
import { useAtom } from "jotai"
import BaseMap from "@/components/special/MapScreen/BaseMap/BaseMap"
import { FaQuestionCircle } from "react-icons/fa"

import "./MapScreen.scss"

const MapScreen = (props) => {
  const [isIntroOpen, setIsIntroOpen] = useAtom(isIntroOpenAtom)

  return (
    <div className="map-screen">

      {/* INTRO MODAL */}
      <MapModal
        headerIcon={<FaQuestionCircle />}
        headerText="About the map"
        isOpen={isIntroOpen}
        setIsOpen={setIsIntroOpen}
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
