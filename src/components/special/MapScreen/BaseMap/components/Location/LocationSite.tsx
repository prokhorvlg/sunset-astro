
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
import { SiteSubtype, type LocationNode, type SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types";
import { getIconFromSubType } from "@/components/special/MapScreen/BaseMap/data/icons";

const LocationSite = ({
  location,
  radius,
}: {
  location: LocationNode
  radius: number
}) => {
  const [transform, setTransform] = useAtom(transformAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [isDetailLevel, setIsDetailLevel] = useAtom(isDetailLevelAtom)
  const [isDetailLevel2, setIsDetailLevel2] = useAtom(isDetailLevel2Atom)

  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  const isSelected = selectedLocation && location.name === selectedLocation.name

  // VISIBILITY CULLING
  const visibleRef = useRef(null)
  const isInView = useIsVisible(visibleRef)

  const [subTypeIcon] = useState(getIconFromSubType(location.subType))

  const showBorderOnBgCircle = isDetailLevel && !location.icon

  return (
    <>
      <Selector location={location} />

      {/* DARK CIRCLE under the icon */}
      <div className={`map-site-dark-container 
        ${location.worldAffiliation ? location.worldAffiliation : ""} 
        ${isDetailLevel ? "is-detail-level" : ""}`} style={{
          
          transform: `scale(${rescale})`,
        }}>
          <div className="dark-container-circle" style={{
            borderWidth: showBorderOnBgCircle ? undefined : "0px",
            borderColor: isSelected ? "rgba(0,0,0,0)" : undefined,
          }}></div>
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
              {(isDetailLevel && location.icon) ?
                <div className={`icon-container-custom ${location.subType}`}>
                  {location.icon}
                </div>
                :
                <div className={`icon-container ${location.subType}`}>
                  {subTypeIcon}
                </div>
              }
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
