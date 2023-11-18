
import { MAP_DISTANCE_FACTOR } from "@/components/special/MapScreen/BaseMap/data/constants"
import { rescaleAtom, isDetailLevelAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import { useState } from "react"
import './LocationOrbitRing.scss'
import type { SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"

const LocationOrbitRing = ({
  location,
  ringsCurrentZIndex,
}: {
  location: SystemLocationNode
  ringsCurrentZIndex: number
}) => {
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [isDetailLevel, setIsDetailLevel] = useAtom(
    isDetailLevelAtom
  )

  const [size] = useState(location.distance * MAP_DISTANCE_FACTOR * 2)

  return (
    <div
      className={`map-orbit-ring ${isDetailLevel ? "is-detail-level" : ""}`}
      style={{
        height: size,
        width: size,
        zIndex: ringsCurrentZIndex,
        opacity: isDetailLevel ? "0.8" : "1"
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