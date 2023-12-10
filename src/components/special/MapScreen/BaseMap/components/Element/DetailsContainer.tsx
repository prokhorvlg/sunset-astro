import { isDetailLevelAtom, rescaleAtom } from '@/components/special/MapScreen/BaseMap/state/atoms'
import { useAtom } from 'jotai'
import './DetailsContainer.scss'
import { type LocationNode, LocationType } from '@/components/special/MapScreen/BaseMap/data/types'

// Container for details, offset from the center and rescaled. 
// Usually contains the flavor text, and occasionally the heading.
const DetailsContainer = ({
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
        top: isDetailLevel ? `${radius / 2 + 64}px` : `${radius / 2 + 8}px`,
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

export default DetailsContainer