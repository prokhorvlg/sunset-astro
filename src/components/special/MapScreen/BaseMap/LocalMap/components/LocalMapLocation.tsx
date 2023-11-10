import { LocalLocationNode, LocationType } from "@/components/special/MapScreen/BaseMap/data/types"
import { scaleAtom, rescaleAtom, selectedLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import { useState } from "react"
import './LocalMapLocation.scss'

// enum Dimension {
//   x = 'x',
//   y = 'y'
// }

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

  const [isSite] = useState(location.type === LocationType.Site); 
  const [isField] = useState(location.type === LocationType.Field); 
  const [isLabel] = useState(location.type === LocationType.Label); 

  // Placeholder output
  return <div style={{ left: location.x, top: location.y }} className='poop'>{location.name}</div>
}

export default LocalMapLocation