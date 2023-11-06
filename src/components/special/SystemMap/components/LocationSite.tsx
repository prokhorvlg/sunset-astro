import { LocationNode, SiteSubtype } from "@/components/special/SystemMap/data/types"
import {
  transformAtom,
  rescaleAtom,
  selectedLocationAtom,
  isDetailLevelAtom,
} from "@/components/special/SystemMap/state/atoms"
import { useIsVisible } from "@/utils/hooks/useIsVisible"
import { useAtom } from "jotai"
import { useRef, useState } from "react"
import "./LocationSite.scss"
import { CgShapeTriangle, CgClose, CgBlock, CgMaximize, CgShapeRhombus, CgShapeSquare, CgShapeCircle, CgAsterisk, CgSignal, CgData, CgVercel } from "react-icons/cg";

const getIconFromSubType = (subType?: SiteSubtype) => {
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
        <CgVercel />
      )        
  }
  return (
    <CgClose />
  )
}

const LocationSite = ({
  location,
  radius,
}: {
  location: LocationNode
  radius: number
}) => {
  const [transform, setTransform] = useAtom(transformAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [isDetailLevel, setIsDetailLevel] = useAtom(
    isDetailLevelAtom
  )
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  // VISIBILITY CULLING
  const visibleRef = useRef(null)
  const isInView = useIsVisible(visibleRef)

  const [icon] = useState(getIconFromSubType(location.subType))

  return (
    <div
      ref={visibleRef}
      className={`map-site ${location.worldAffiliation}`}
      style={{
        transform: `scale(${rescale})`,
      }}
    >
      {isInView && (
        <>

          {/* NAME */}
          <h2
            className={`name`}
            style={{
              bottom: `${radius * 0.5 + 10}px`,
              opacity: isDetailLevel ? "1" : "0",
            }}
          >
            {location.name}
          </h2>

          {/* ICON */}
          <div
            className="map-site-icon"
            onClick={() => {
              if (!transform) return
              setSelectedLocation(location)
              transform.zoomToElement(location.name)
            }}
          >
            <div className={`icon-container ${location.subType}`}>
              {icon}
            </div>
          </div>

          {/* TYPE, FLAVOR TEXT */}
          <div
            className="text-under"
            style={{
              top: `${radius * 0.5 + 10}px`,
              opacity: isDetailLevel ? "1" : "0",
            }}
          >
            <p className="type-text">{location.typeText}</p>
            {location.flavorText && 
              <p className="flavor-text">
                {location.flavorText}
              </p>
            }
          </div>
        </>
      )}
    </div>
  )
}

export default LocationSite
