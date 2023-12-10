import {
  HumanEraAffiliation,
  LocationType,
  SiteSubtype,
  WorldAffiliation,
} from "@/components/special/MapScreen/BaseMap/data/types"
import { AiOutlineSave } from "react-icons/ai"
import { BsGearFill, BsTriangleHalf } from "react-icons/bs"
import {
  CgShapeCircle,
  CgShapeRhombus,
  CgData,
  CgShapeTriangle,
  CgShapeSquare,
  CgClose,
} from "react-icons/cg"
import { FaCog } from "react-icons/fa"
import {
  FaGhost,
  FaIndustry,
  FaMicrochip,
  FaMobileScreen,
  FaTree,
  FaUser,
} from "react-icons/fa6"
import { GiEagleHead, GiHammerSickle, GiLibertyWing } from "react-icons/gi"
import {
  IoLocationSharp,
  IoMoonSharp,
  IoPlanet,
  IoSkullSharp,
  IoSunny,
} from "react-icons/io5"
import { MdQuestionMark } from "react-icons/md"
import { PiFlowerLotusBold, PiPlanetBold } from "react-icons/pi"
import { HiMiniBuildingOffice } from "react-icons/hi2"
import { LuOrbit } from "react-icons/lu"
import { BiSolidFactory } from "react-icons/bi";
import { GoGear } from "react-icons/go";


export const getIconFromType = (type?: LocationType) => {
  switch (type) {
    case LocationType.Sun:
      return <IoSunny />
    case LocationType.AsteroidBelt:
      return <LuOrbit />
    case LocationType.Field:
      return <IoSunny />
    case LocationType.Label:
      return <IoSunny />
    case LocationType.Moon:
      return <IoMoonSharp />
    case LocationType.Planet:
      return <IoPlanet />
    case LocationType.Site:
      return <IoLocationSharp />
  }
  return <IoLocationSharp />
}

export const getIconFromSubType = (
  subType?: SiteSubtype
) => {
  switch (subType) {
    case SiteSubtype.Orbital:
      return <CgShapeCircle />
    case SiteSubtype.Outpost:
      return <CgShapeRhombus />
    case SiteSubtype.Beacon:
      return <CgData />
    case SiteSubtype.Vessel:
      return <CgShapeTriangle />
    case SiteSubtype.MachineMade:
      return <CgShapeSquare />
    case SiteSubtype.Danger:
      return (
        <IoSkullSharp /> //<CgMathPlus />
      )
    case SiteSubtype.DataTrove:
      return <AiOutlineSave />
    case SiteSubtype.Asteroid:
      return <PiPlanetBold />
    case SiteSubtype.PointOfInterest:
      return (
        <MdQuestionMark /> //<LuCompass />
      )
    case SiteSubtype.Factory:
      return <CgShapeRhombus />//<FaIndustry />
  }
  return <CgClose />
}

export const getIconFromWorldAffiliation = (
  worldAffiliation?: WorldAffiliation
) => {
  switch (worldAffiliation) {
    case WorldAffiliation.Anomaly:
      return <FaGhost />
    case WorldAffiliation.CenturyOfProgress:
      return <HiMiniBuildingOffice />
    case WorldAffiliation.MachinesOfGlass:
      return <FaMobileScreen />
    case WorldAffiliation.HumanEra:
      return <FaUser />
    case WorldAffiliation.MachineEra:
      return <FaMicrochip />
    case WorldAffiliation.Natural:
      return <FaTree />
  }
  return <CgClose />
}

export const getIconFromHumanEraAffiliation = (
  humanEraAffiliation?: HumanEraAffiliation
) => {
  switch (humanEraAffiliation) {
    case HumanEraAffiliation.EnduringCoalition:
      return <GiEagleHead />
    case HumanEraAffiliation.GreaterUnion:
      return <GiHammerSickle />
    case HumanEraAffiliation.RisingPact:
      return <PiFlowerLotusBold />
    case HumanEraAffiliation.SunsetResearchInitiative:
      return null
    case HumanEraAffiliation.None:
      return null
  }
  return null
}

export const getFlagFromHumanEraAffiliation = (
  humanEraAffiliation?: HumanEraAffiliation
) => {
  switch (humanEraAffiliation) {
    case HumanEraAffiliation.EnduringCoalition:
      return <GiEagleHead />
    case HumanEraAffiliation.GreaterUnion:
      return <GiHammerSickle />
    case HumanEraAffiliation.RisingPact:
      return <PiFlowerLotusBold />
  }
  return null
}
