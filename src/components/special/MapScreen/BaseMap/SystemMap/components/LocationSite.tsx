
import { useIsVisible } from "@/utils/hooks/useIsVisible"
import { useAtom } from "jotai"
import { useRef, useState } from "react"
import "./LocationSite.scss"
import { CgShapeTriangle, CgClose, CgBlock, CgMaximize, CgShapeRhombus, CgShapeSquare, CgShapeCircle, CgAsterisk, CgSignal, CgData, CgVercel, CgMinimize, CgMathPlus, CgSmartphoneChip, CgServer, CgSearch, CgEditHighlight } from "react-icons/cg";

import {LuCompass} from "react-icons/lu"
import {IoSkullSharp} from "react-icons/io5"
import {MdQuestionMark} from "react-icons/md"
import { PiPlanetBold, PiSkullBold } from "react-icons/pi"
import { AiOutlineQuestionCircle, AiOutlineSave } from "react-icons/ai";
import { SiteSubtype, LocationNode } from "@/components/special/MapScreen/BaseMap/data/types";
import { transformAtom, rescaleAtom, isDetailLevelAtom, selectedLocationAtom, hoveredLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms";

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
  const [hoveredLocation, setHoveredLocation] = useAtom(
    hoveredLocationAtom
  )
  const isHovered = hoveredLocation && hoveredLocation.name === location.name

  // VISIBILITY CULLING
  const visibleRef = useRef(null)
  const isInView = useIsVisible(visibleRef)

  const [icon] = useState(getIconFromSubType(location.subType))

  return (
    <>
      {/* DARK CIRCLE under the icon */}
      <div className={`map-site-dark-container  ${isDetailLevel ? "is-detail-level" : ""}`} style={{
          transform: `scale(${rescale})`,
        }}>
          <div className="dark-container-circle"></div>
      </div>

      {/* ICON, TEXT */}
      <div
        ref={visibleRef}
        className={`map-site ${location.worldAffiliation} ${isDetailLevel ? "is-detail-level" : ""}`}
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
                opacity: isDetailLevel || isHovered ? "1" : "0",
              }}
            >
              {location.name}
            </h2>

            {/* ICON */}
            <div
              className="map-site-icon"
              style={{
                transform: isDetailLevel ? "translate(-50%, -50%) scale(1.6)" : undefined
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
    </>
  )
}

export default LocationSite
