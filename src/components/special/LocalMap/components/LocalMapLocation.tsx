import { useState } from 'react'
import {
  MAP_DISTANCE_FACTOR,
  MAP_SCALE_FACTOR,
  MAP_DEFAULT_COLOR,
} from "@/components/special/LocalMap/data/constants"
import {
  LocationNode,
  LocationType,
} from "@/components/special/LocalMap/data/types"
import {
  scaleAtom,
  rescaleAtom,
  selectedLocationAtom,
} from "@/components/special/SystemMap/state/atoms"
import { useAtom } from "jotai"
import { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch"
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
  onWheel
}: {
  location: LocationNode
  //parentLocation?: LocationNode
  //zIndex?: number
  //isRootElement?: boolean
  //transform: ReactZoomPanPinchContentRef
  onWheel: (e: React.WheelEvent<HTMLDivElement>) => void
}) => {
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  const [isMiddle] = useState(location.type === LocationType.Middle); 
  const [isSite] = useState(location.type === LocationType.Site); 
  const [isField] = useState(location.type === LocationType.Field); 
  const [isLabel] = useState(location.type === LocationType.Label); 

  if (isMiddle) return <div style={{ left: '50%', top: '50%' }}>{location.type}</div>
  return <div style={{ left: location.x, top: -location.y }}>{location.type}</div>
}

export default LocalMapLocation