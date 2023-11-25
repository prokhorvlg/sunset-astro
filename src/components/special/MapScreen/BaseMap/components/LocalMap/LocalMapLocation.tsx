import {
  scaleAtom,
  rescaleAtom,
  selectedLocationAtom,
  activeMapMetaAtom,
} from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import { useState } from "react"
import "./LocalMapLocation.scss"
import {
  type LocalLocationNode,
  LocationType,
} from "@/components/special/MapScreen/BaseMap/data/types"
import LocationSite from "@/components/special/MapScreen/BaseMap/components/Location/LocationSite"
import ZoomToMarker from "@/components/special/MapScreen/BaseMap/components/Element/ZoomToMarker"

// Generates each individual location.
const LocalMapLocation = ({
  location,
}:
{
  location: LocalLocationNode
}) => {
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [activeMapMeta, setActiveMapMeta] = useAtom(
    activeMapMetaAtom
  )

  const [isSite] = useState(
    location.type === LocationType.Site
  )
  const [isField] = useState(
    location.type === LocationType.Field
  )
  const [isLabel] = useState(
    location.type === LocationType.Label
  )

  const left = location.x * activeMapMeta.distanceMultiplier +
      activeMapMeta.dimensions.x / 2
  const top = location.y * activeMapMeta.distanceMultiplier +
      activeMapMeta.dimensions.y / 2

  // Placeholder output
  return (
    <>
      <ZoomToMarker
        location={location}
        left={left}
        top={top}
      />

      <div
        className="local-location-container"
        style={{
          left: left,
          top: top,
        }}
      >
        {/* SITE (space station, etc) */}
        {isSite && (
          <LocationSite location={location} radius={25} />
        )}
      </div>
    </>
  )
}

export default LocalMapLocation
