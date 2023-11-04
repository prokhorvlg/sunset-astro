import { MAP_DISTANCE_FACTOR } from "@/components/special/SystemMap/data/constants"
import { LocationNode } from "@/components/special/SystemMap/data/types"
import { rescaleAtom } from "@/components/special/SystemMap/state/atoms"
import { useAtom } from "jotai"
import './LocationOrbitRing.scss'

const LocationOrbitRing = ({
  location,
  ringsCurrentZIndex,
}: {
  location: LocationNode
  ringsCurrentZIndex: number
}) => {
  const [rescale, setRescale] = useAtom(rescaleAtom)

  return (
    <div
      className="map-orbit-ring"
      style={{
        height: location.distance * MAP_DISTANCE_FACTOR * 2,
        width: location.distance * MAP_DISTANCE_FACTOR * 2,
        zIndex: ringsCurrentZIndex,
        borderWidth: `${rescale * 0.5}px`,
        //opacity: fadedOpacity
      }}
    />
  )
}

export default LocationOrbitRing