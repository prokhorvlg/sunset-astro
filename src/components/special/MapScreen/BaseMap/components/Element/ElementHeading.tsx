import { isDetailLevelAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import './ElementHeading.scss'
import { LuOrbit } from "react-icons/lu";
import { type LocationNode, LocationType } from "@/components/special/MapScreen/BaseMap/data/types";

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
    if (!radius) return null
    return (
      <h2 className={`map-name world ${isDetailLevel ? "is-detail-level" : ""}`} 
        style={{
          fontSize: isDetailLevel ? 26 : 14,
          color: location.color,
          //top: isDetailLevel ? -radius * 2 : undefined,
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