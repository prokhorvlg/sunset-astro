import { useState } from 'react'
import {
  MAP_DISTANCE_FACTOR,
  MAP_SCALE_FACTOR,
  MAP_DEFAULT_COLOR,
} from "@/components/special/WorldMap/data/constants"
import {
  LocationNode,
  LocationType,
} from "@/components/special/WorldMap/data/types"
import {
  scaleAtom,
  rescaleAtom,
  selectedLocationAtom,
} from "@/components/special/SystemMap/state/atoms"
import { useAtom } from "jotai"
import { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch"
import './WorldMapLocation.scss'

enum Dimension {
  x = 'x',
  y = 'y'
}

// Generates each individual location.
const WorldMapLocation = ({
  location,
  zIndex,
  transform,
  onWheel
}: {
  location: LocationNode
  parentLocation?: LocationNode
  zIndex?: number
  isRootElement?: boolean
  transform: ReactZoomPanPinchContentRef
  onWheel: (e: React.WheelEvent<HTMLDivElement>) => void
}) => {
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  const [isSite] = useState(location.type === LocationType.Site); 
  const [isField] = useState(location.type === LocationType.Field); 
  const [isLabel] = useState(location.type === LocationType.Label); 
}

export default WorldMapLocation