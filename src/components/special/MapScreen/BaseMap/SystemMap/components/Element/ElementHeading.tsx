import { LocationNode, LocationType } from "@/components/special/MapScreen/BaseMap/data/types"
import { isDetailLevelAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import './ElementHeading.scss'
import { LuOrbit } from "react-icons/lu";

const ElementHeading = ({
  location,
  radius
}: {
  location: LocationNode
  radius?: number
}) => {
  const [isDetailLevel, setIsDetailLevel] = useAtom(isDetailLevelAtom)

  // WORLD
  if (location.type === LocationType.Planet || location.type === LocationType.Moon || location.type === LocationType.Sun) {
    return (
      <h2 className={`map-name world ${isDetailLevel ? "is-detail-level" : ""}`} 
        style={{
          fontSize: isDetailLevel ? 22 : 14,
          color: location.color
      }}>{location.name}</h2>
    )
  }

  // SITE
  else if (location.type === LocationType.Site) {
    return (
      <h2 className={`map-name site ${isDetailLevel ? "is-detail-level" : ""}`} 
        style={{
          bottom: `8px`,
      }}>{location.name}</h2>
    )
  }

  // FIELD
  else if (location.type === LocationType.Field) {
    return (
      <h2 className={`map-name field ${isDetailLevel ? "is-detail-level" : ""} ${location.fieldClass}`} 
        style={{
      }}>{location.typeText} «{location.name}»</h2>
    )
  }

  // ASTEROID BELT
  else if (location.type === LocationType.AsteroidBelt) {
    return (
      <h2 className={`map-name belt ${isDetailLevel ? "is-detail-level" : ""}`}
      >{isDetailLevel && <LuOrbit />}{location.name}</h2>
    )
  }

  return null
}

export default ElementHeading