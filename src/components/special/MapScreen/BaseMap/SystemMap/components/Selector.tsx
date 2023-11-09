import { LocationNode, LocationType, SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"
import { useMapWheel } from "@/components/special/MapScreen/BaseMap/hooks/useMapWheel"
import { transformAtom, rescaleAtom, selectedLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import './Selector.scss'

const Selector = ({
  location,
  radius
}: {
  location: SystemLocationNode
  radius?: number // For worlds with preprocessed radius
}) => {
  const { onWheel }= useMapWheel()

  const [transform, setTransform] = useAtom(transformAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const borderRadiusModifier = 20
  const usedRadius = radius ? radius : 10 // Used for sites

  if (location.type === LocationType.Field) {

  }

  return (
    <button
      className="selection-button"
      style={{
        transform: `translate(-50%, -50%) scale(${rescale})`,
        height: usedRadius + borderRadiusModifier,
        width: usedRadius + borderRadiusModifier,
        left: location.fieldLabelOffset?.x || undefined,
        top: location.fieldLabelOffset?.y || undefined
      }}
      onWheel={(e) => onWheel(e as any)}
      onClick={() => {
        setSelectedLocation(location)
        transform?.zoomToElement(location.name, 10, 400)
      }}
    >
      <div className={`selection-button-inner 
        ${location.worldAffiliation ? location.worldAffiliation : ""}`} style={{
        backgroundColor: location.type !== LocationType.Site ? location.color : undefined
      }}></div>
    </button>
  )
}

export default Selector