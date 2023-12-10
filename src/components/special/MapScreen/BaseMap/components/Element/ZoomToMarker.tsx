import type { LocationNode } from "@/components/special/MapScreen/BaseMap/data/types"

const ZoomToMarker = ({
  location,
  left,
  top
}: {
  location: LocationNode
  left
  top
}) => {
  const zoomMarkerVerticalOffset = 10 // Used to slightly shift the zoom up or down
  const effectiveId = location.id ? location.id : location.name
  
  return (
    <div className="zoom-to-marker-container" style={{
      position: "absolute",
      left: left,
      top: top,
      transform: "translate(-50%, -50%)",
    }}>
      <div
        className="zoom-to-marker"
        style={{
          position: "absolute",
          left: location.fieldLabelOffset?.x || undefined,
          top: (location.fieldLabelOffset?.y || 0) + zoomMarkerVerticalOffset
        }}
        id={effectiveId}
      ></div>
    </div>
  )
}

export default ZoomToMarker