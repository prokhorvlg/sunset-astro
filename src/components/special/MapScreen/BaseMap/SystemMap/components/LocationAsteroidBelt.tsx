import { MAP_DISTANCE_FACTOR } from "@/components/special/MapScreen/BaseMap/data/constants"
import { LocationNode, SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"
import { rescaleAtom, opacityFadeOutAtom, isDetailLevelAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { mathClamp } from "@/components/special/MapScreen/BaseMap/utils/math"
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
          //borderWidth: `${radius}px`,
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
      <div
        className="map-asteroid-belt-name"
        id={location.name}
        style={{
          transform: `scale(${rescale})`,
          left: `calc(100% + ${rescale * 90 - 80}px)`,
        }}
      >
        <h2 className="name">{location.name}</h2>
      </div>
    </div>
  )
}

export default LocationAsteroidBelt