import {
  MapComponent,
} from "@/components/special/MapScreen/BaseMap/data/types"
import {
  activeMapAtom,
  isIntroOpenAtom,
  isSelectedModalOpenAtom,
  selectedLocationAtom,
} from "@/components/special/MapScreen/BaseMap/state/atoms"
import MapModal from "@/components/special/MapScreen/MapModal"
import { useAtom } from "jotai"
import {
  useState,
} from "react"

import { styled } from "@stitches/react"

const ColoredButton = styled("button", {})
const ModalContent = styled("article", {})

import "./MapScreen.scss"
import BaseMap from "@/components/special/MapScreen/BaseMap/BaseMap"
import { FaQuestionCircle } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [isIntroOpen, setIsIntroOpen] = useAtom(isIntroOpenAtom)
  const [isSystemMapOn, setIsSystemMapOn] = useState(true)
  const [activeMap, setActiveMap] = useAtom(activeMapAtom)
  
  const [isSelectedModalOpen, setIsSelectedModalOpen] =
    useAtom(isSelectedModalOpenAtom)

  return (
    <div className="map-screen">
      <MapModal
        headerIcon={<FaQuestionCircle />}
        headerText="About the map"
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

      
    </div>
  )
}

export default MapScreen
