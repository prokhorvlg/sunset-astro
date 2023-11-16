import { MAP_DISTANCE_FACTOR } from "@/components/special/MapScreen/BaseMap/data/constants"
import { LocationNode, SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"
import { rescaleAtom, opacityFadeOutAtom, isDetailLevelAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import ElementHeading from "@/components/special/MapScreen/BaseMap/SystemMap/components/Element/ElementHeading"
import ElementOffset from "@/components/special/MapScreen/BaseMap/SystemMap/components/Element/ElementOffset"
import Selector from "@/components/special/MapScreen/BaseMap/SystemMap/components/Element/Selector"
import { useAtom } from "jotai"
import { useState } from "react"
import './LocationAsteroidBelt.scss'

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

  const [height] = useState(location.distance * MAP_DISTANCE_FACTOR * 2 - 25)

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