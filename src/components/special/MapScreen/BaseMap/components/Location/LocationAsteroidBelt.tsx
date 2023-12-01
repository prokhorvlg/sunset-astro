import { rescaleAtom, opacityFadeOutAtom, isDetailLevelAtom, activeMapMetaAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import ElementHeading from "@/components/special/MapScreen/BaseMap/components/Element/ElementHeading"
import ElementOffset from "@/components/special/MapScreen/BaseMap/components/Element/DetailsContainer"
import Selector from "@/components/special/MapScreen/BaseMap/components/Element/MapSelector"
import { useAtom } from "jotai"
import { useState } from "react"
import './LocationAsteroidBelt.scss'
import type { SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"

const LocationAsteroidBelt = ({
  location,
  ringsCurrentZIndex,
  radius,
}: {
  location: SystemLocationNode
  ringsCurrentZIndex: number
  radius: number
}) => {
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [opacityFadeOut, setOpacityFadeOut] = useAtom(
    opacityFadeOutAtom
  )
  const [isDetailLevel, setIsDetailLevel] = useAtom(
    isDetailLevelAtom
  )
  const [activeMapMeta, setActiveMapMeta] = useAtom(
    activeMapMetaAtom
  )

  const [height] = useState(location.distance * activeMapMeta.distanceMultiplier * 2 - 25)

  return (
    <>
      {/* NAME */}
      <Selector location={location} radius={height}>
        <>
          <ElementHeading location={location} />
          {isDetailLevel &&
            <p className="flavor-text">{location.flavorText}</p>
          }
        </>
      </Selector>
    
      <div
        className="map-asteroid-belt-container"
        style={{
          height:height,
          width:height,
          zIndex: ringsCurrentZIndex,
        }}
      >
        <div
          className="map-asteroid-belt"
          style={{
            background: isDetailLevel ? "#ff4111" : undefined,
            opacity: isDetailLevel ? "0.1" : "0.8"
          }}
        >
          <div
            className="map-asteroid-belt-cover"
            style={{
              top: `${radius}px`,
              left: `${radius}px`,
              right: `${radius}px`,
              bottom: `${radius}px`,
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default LocationAsteroidBelt