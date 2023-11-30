import { LocationType, SiteSubtype, WorldAffiliation } from "@/components/special/MapScreen/BaseMap/data/types"
import { AiOutlineSave } from "react-icons/ai"
import { BsTriangleHalf } from "react-icons/bs"
import { CgShapeCircle, CgShapeRhombus, CgData, CgShapeTriangle, CgShapeSquare, CgClose } from "react-icons/cg"
import { FaCog } from "react-icons/fa"
import { FaGhost, FaMicrochip, FaMobileScreen, FaTree, FaUser } from "react-icons/fa6"
import { GiLibertyWing } from "react-icons/gi"
import { IoSkullSharp, IoSunny } from "react-icons/io5"
import { MdQuestionMark } from "react-icons/md"
import { PiPlanetBold } from "react-icons/pi"
import { HiMiniBuildingOffice } from "react-icons/hi2";

export const getIconFromType = (type?: LocationType) => {
  switch (type) {
    case LocationType.Sun: 
      return (
        <IoSunny />
      )
  }
  return (
    <CgClose />
  )
}

export const getIconFromSubType = (subType?: SiteSubtype) => {
  switch (subType) {
    case SiteSubtype.Orbital: 
      return (
        <CgShapeCircle />
      )
    case SiteSubtype.Outpost:
      return (
        <CgShapeRhombus />
      )
    case SiteSubtype.Beacon: 
      return (
        <CgData />
      )
    case SiteSubtype.Vessel: 
      return (
        <CgShapeTriangle />
      )
    case SiteSubtype.MachineMade:
      return (
        <CgShapeSquare />
      )
    case SiteSubtype.Danger:
      return (
        <IoSkullSharp />//<CgMathPlus />
      )
    case SiteSubtype.DataTrove:
      return (
        <AiOutlineSave />
      )
    case SiteSubtype.Asteroid:
      return (
        <PiPlanetBold />
      )
    case SiteSubtype.PointOfInterest:
      return (
        <MdQuestionMark /> //<LuCompass />
      )
  }
  return (
    <CgClose />
  )
}

export const getIconFromWorldAffiliation = (worldAffiliation?: WorldAffiliation) => {
  switch (worldAffiliation) {
    case WorldAffiliation.Anomaly: 
      return (
        <FaGhost />
      )
    case WorldAffiliation.CenturyOfProgress: 
      return (
        <HiMiniBuildingOffice />
      )
    case WorldAffiliation.MachinesOfGlass: 
      return (
        <FaMobileScreen />
      )
    case WorldAffiliation.HumanEra: 
      return (
        <FaUser />
      )
    case WorldAffiliation.MachineEra: 
      return (
        <FaMicrochip />
      )
    case WorldAffiliation.Natural: 
      return (
        <FaTree />
      )
  }
  return (
    <CgClose />
  )
}

