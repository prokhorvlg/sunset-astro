import { MAP_DISTANCE_FACTOR } from "@/components/special/SystemMap/data/constants"
import { LocationNode } from "@/components/special/SystemMap/data/types"
import { opacityFadeOutAtom, rescaleAtom } from "@/components/special/SystemMap/state/atoms"
import { mathClamp } from "@/components/special/SystemMap/utils/math"
import { useAtom } from "jotai"
import './LocationAsteroidBelt.scss'

const LocationAsteroidBelt = ({
  location,
  ringsCurrentZIndex,
  radius,
}: {
  location: LocationNode
  ringsCurrentZIndex: number
  radius: number
}) => {
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [opacityFadeOut, setOpacityFadeOut] = useAtom(
    opacityFadeOutAtom
  )

  return (
    <div
      className="map-asteroid-belt-container"
      style={{
        height:
          location.distance * MAP_DISTANCE_FACTOR * 2 - 25,
        width:
          location.distance * MAP_DISTANCE_FACTOR * 2 - 25,
        zIndex: ringsCurrentZIndex,
      }}
    >
      <div
        className="map-asteroid-belt"
        style={{
          borderWidth: `${radius}px`,
          backgroundSize: `${mathClamp(rescale * 100, 50, 200)}px`,
          opacity: mathClamp(opacityFadeOut * 0.8, 0.3, 0.8)
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