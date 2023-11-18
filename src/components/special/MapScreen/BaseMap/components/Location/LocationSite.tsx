
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
import { transformAtom, rescaleAtom, isDetailLevelAtom, selectedLocationAtom, hoveredLocationAtom, isDetailLevel2Atom } from "@/components/special/MapScreen/BaseMap/state/atoms";
import Selector from "@/components/special/MapScreen/BaseMap/components/Element/MapSelector";
import ElementHeading from "@/components/special/MapScreen/BaseMap/components/Element/ElementHeading";
import DetailsContainer from "@/components/special/MapScreen/BaseMap/components/Element/DetailsContainer";
import { SiteSubtype, type SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types";

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
  location: SystemLocationNode
  radius: number
}) => {
  const [transform, setTransform] = useAtom(transformAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [isDetailLevel, setIsDetailLevel] = useAtom(isDetailLevelAtom)
  const [isDetailLevel2, setIsDetailLevel2] = useAtom(isDetailLevel2Atom)

  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  // VISIBILITY CULLING
  const visibleRef = useRef(null)
  const isInView = useIsVisible(visibleRef)

  const [icon] = useState(getIconFromSubType(location.subType))

  return (
    <>
      <Selector location={location} />

      {/* DARK CIRCLE under the icon */}
      <div className={`map-site-dark-container 
        ${location.worldAffiliation ? location.worldAffiliation : ""} 
        ${isDetailLevel ? "is-detail-level" : ""}`} style={{
          transform: `scale(${rescale})`,
        }}>
          <div className="dark-container-circle"></div>
      </div>

      {/* ICON, TEXT */}
      <div
        ref={visibleRef}
        className={`map-site ${location.worldAffiliation ? location.worldAffiliation : ""} ${isDetailLevel ? "is-detail-level" : ""}`}
        style={{
          transform: `scale(${rescale})`,
        }}
      >
        {isInView && (
          <>
            {/* NAME */}
            <ElementHeading location={location} radius={radius} />

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
            <DetailsContainer location={location}>
              <>
                <p className={`type-text ${isDetailLevel ? "is-detail-level" : ""}`}>{location.typeText}</p>
                {(isDetailLevel2 && location.flavorText) &&
                  <p className="flavor-text">
                    {location.flavorText}
                  </p>
                }
              </>
            </DetailsContainer>
          </>
        )}
      </div>
    </>
  )
}

export default LocationSite
