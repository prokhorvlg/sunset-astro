import { LocationNode, LocationType, SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"
import { useMapWheel } from "@/components/special/MapScreen/BaseMap/hooks/useMapWheel"
import { transformAtom, rescaleAtom, selectedLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import './Selector.scss'

const Selector = ({
  location,
  radius,
  children
}: {
  location: SystemLocationNode
  radius?: number // For worlds with preprocessed radius
  children?: any
}) => {
  const { onWheel }= useMapWheel()

  const [transform, setTransform] = useAtom(transformAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const borderRadiusModifier = 20
  const usedRadius = radius ? radius : 10 // Used for sites

  const isLabel = location.type === LocationType.Field || location.type === LocationType.AsteroidBelt

  const doNotApplyBackground = 
    location.type === LocationType.Site ||
    isLabel

  return (
    <>
      {/* ZOOM MARKER (map zooms to this div) */}
      <div
          className="zoom-to-marker"
          style={{
            left: location.fieldLabelOffset?.x || undefined,
            top: location.fieldLabelOffset?.y || undefined
          }}
          id={location.name}
        ></div>

      {/* SELECTION (captures any clicks for this object) */}
      <button
        className={`selection-button ${isLabel ? "label" : ""}`}
        style={{
          transform: `translate(-50%, -50%) scale(${rescale})`,
          height: isLabel ? undefined : usedRadius + borderRadiusModifier,
          width: isLabel ? undefined : usedRadius + borderRadiusModifier,
          left: location.fieldLabelOffset?.x || undefined,
          top: location.fieldLabelOffset?.y || undefined
        }}
        onWheel={(e) => onWheel(e as any)}
        onClick={() => {
          setSelectedLocation(location)
          transform?.zoomToElement(location.name, 10, 400)
        }}
      >
        {children}
        <div className={`selection-button-inner 
          ${location.worldAffiliation ? location.worldAffiliation : ""}`} style={{
            backgroundColor: doNotApplyBackground ? undefined : location.color
        }}></div>
      </button>
    </>
  )
}

export default Selector