import { MAP_DISTANCE_FACTOR } from "@/components/special/SystemMap/data/constants"
import { LocationNode } from "@/components/special/SystemMap/data/types"
import { rescaleAtom } from "@/components/special/SystemMap/state/atoms"
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
          backgroundSize: `${rescale * 100}px`,
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