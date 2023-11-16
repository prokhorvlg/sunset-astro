import { LocationNode, LocationType } from '@/components/special/MapScreen/BaseMap/data/types'
import { isDetailLevelAtom, rescaleAtom } from '@/components/special/MapScreen/BaseMap/state/atoms'
import { useAtom } from 'jotai'
import './ElementOffset.scss'

// Container for details, offset from the center and rescaled. 
// Usually contains the flavor text, and occasionally the heading.
const ElementOffset = ({
  location,
  children,
  useRescale,
  radius
}: {
  location: LocationNode
  children: any
  useRescale?: boolean,
  radius?: number
}) => {
  const [isDetailLevel, setIsDetailLevel] = useAtom(isDetailLevelAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)

  // WORLD
  if (location.type === LocationType.Planet || location.type === LocationType.Moon || location.type === LocationType.Sun) {
    if (!radius) return null
    return (
      <div className="element-offset world" style={{
        // dynamic top based on radius
        top: isDetailLevel ? `${radius * 0.8 + 8}px` : `${radius * 0.5 + 5}px`,
        // horizontal center
        transform: `translate(-50%, 0) scale(${useRescale ? rescale : "1"})`
      }}>
        {children}
      </div>
    )
  }

  // SITE
  else if (location.type === LocationType.Site) {
    return (
      <div className="element-offset site" style={{
        opacity: isDetailLevel ? "1" : "0",
        transform: `translate(-50%, 0) scale(${useRescale ? rescale : "1"})`
      }}>
        {children}
      </div>
    )
  }

  return null
}

export default ElementOffset