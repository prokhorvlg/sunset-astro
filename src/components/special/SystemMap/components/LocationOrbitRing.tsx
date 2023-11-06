import { MAP_DISTANCE_FACTOR } from "@/components/special/SystemMap/data/constants"
import { LocationNode } from "@/components/special/SystemMap/data/types"
import { isDetailLevelAtom, rescaleAtom } from "@/components/special/SystemMap/state/atoms"
import { useAtom } from "jotai"
import { useState } from "react"
import './LocationOrbitRing.scss'

const LocationOrbitRing = ({
  location,
  ringsCurrentZIndex,
}: {
  location: LocationNode
  ringsCurrentZIndex: number
}) => {
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [isDetailLevel, setIsDetailLevel] = useAtom(
    isDetailLevelAtom
  )

  const [size] = useState(location.distance * MAP_DISTANCE_FACTOR * 2)

  return (
    <div
      className="map-orbit-ring"
      style={{
        height: size,
        width: size,
        zIndex: ringsCurrentZIndex,
        opacity: isDetailLevel ? "0.2" : "1"
      }}
    >
      <div className="cover" style={{
        height: isDetailLevel ? size - 2 : size - 2,
        width: isDetailLevel ? size - 2 : size - 2,
        zIndex: ringsCurrentZIndex,
      }}></div>
    </div>
  )
}

export default LocationOrbitRing