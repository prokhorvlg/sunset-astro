import { scaleAtom, rescaleAtom, selectedLocationAtom, activeMapMetaAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import { useState } from "react"
import './LocalMapLocation.scss'
import { type LocalLocationNode, LocationType } from "@/components/special/MapScreen/BaseMap/data/types"
import LocationSite from "@/components/special/MapScreen/BaseMap/components/Location/LocationSite"

// Generates each individual location.
const LocalMapLocation = ({
  location,
  //zIndex,
  //transform,
  //onWheel
}: {
  location: LocalLocationNode
  //parentLocation?: LocationNode
  //zIndex?: number
  //isRootElement?: boolean
  //transform: ReactZoomPanPinchContentRef
  //onWheel: (e: React.WheelEvent<HTMLDivElement>) => void
}) => {
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [activeMapMeta, setActiveMapMeta] = useAtom(activeMapMetaAtom)


  const [isSite] = useState(location.type === LocationType.Site); 
  const [isField] = useState(location.type === LocationType.Field); 
  const [isLabel] = useState(location.type === LocationType.Label); 

  // Placeholder output
  return (
    <div
        className="local-location-container"
        style={{
          left: location.x * activeMapMeta.distanceMultiplier, 
          top: location.y * activeMapMeta.distanceMultiplier
        }}
      >
        {/* SITE (space station, etc) */}
        {isSite && (
          <LocationSite 
            location={location}
            radius={25}
          />
        )}
      </div>
  )
}

export default LocalMapLocation