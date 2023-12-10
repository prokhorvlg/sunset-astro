import { useMapWheel } from "@/components/special/MapScreen/BaseMap/hooks/useMapWheel"
import { transformAtom, rescaleAtom, selectedLocationAtom, isDetailLevelAtom, activeMapMetaAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import { useState } from "react"
import './MapSelector.scss'
import { type SystemLocationNode, LocationType, type LocationNode } from "@/components/special/MapScreen/BaseMap/data/types"

const MapSelector = ({
  location,
  radius,
  children
}: {
  location: LocationNode
  radius?: number // For worlds with preprocessed radius
  children?: any
}) => {
  const { onWheel } = useMapWheel()

  const onWheelHandler = (e) => onWheel(e)
  const onClickHandler = (e) => {
    setSelectedLocation(location)
    const effectiveId = location.id ? location.id : location.name
    transform?.zoomToElement(effectiveId, 10, 400)
  }

  const [transform, setTransform] = useAtom(transformAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [isDetailLevel, setIsDetailLevel] = useAtom(isDetailLevelAtom)

  const [isField] = useState(location.type === LocationType.Field)
  const [isBelt] = useState(location.type === LocationType.AsteroidBelt)
  const [isSite] = useState(location.type === LocationType.Site)

  const noOverlayCircle = 
    location.type === LocationType.Site ||
    isField ||
    isBelt

  return (
    <>
      {/* SELECTION (captures any clicks for this object) */}
      <SelectionButton 
        location={location} 
        radius={radius}
        isField={isField} 
        isBelt={isBelt} 
        isSite={isSite}
        onWheelHandler={onWheelHandler} 
        onClickHandler={onClickHandler}       
      >
        <>
          {children}

          {/* SELECTION CIRCLE (bg faded) */}
          <div className={`selection-button-inner 
            ${isDetailLevel ? "is-detail-level" : ""} 
            ${location.worldAffiliation ? location.worldAffiliation : ""}`} style={{
              backgroundColor: noOverlayCircle ? undefined : location.color,
          }}></div>

          {/* SELECTION CIRCLE (dotted outline) */}
          <div className={`selection-button-inner dotted 
            ${isDetailLevel ? "is-detail-level" : ""} 
            ${location.worldAffiliation ? location.worldAffiliation : ""}`} style={{
              borderColor: location.color || undefined
          }}></div>
        </>
      </SelectionButton>
    </>
  )
}

const SelectionButton = ({
  location,
  radius,
  isField,
  isBelt,
  isSite,
  onWheelHandler,
  onClickHandler,
  children
}) => {
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [isDetailLevel, setIsDetailLevel] = useAtom(isDetailLevelAtom)
  const [activeMapMeta, setActiveMapMeta] = useAtom(
    activeMapMetaAtom
  )

  const borderRadiusModifier = 20
  const usedRadius = radius ? radius : 10 // Used for sites

  if (isField) {
    return (
      <div className="selection-button-offset field" style={{
        transform: `translate(-50%, -50%) scale(${rescale})`,
        left: location.fieldLabelOffset?.x || undefined,
        top: location.fieldLabelOffset?.y || undefined
      }}>
        <button
          className={`selection-button`}
          onWheel={onWheelHandler}
          onClick={onClickHandler}
        >
          {children}
        </button>
      </div>
    )
  }

  else if (isBelt) {
    return (
      <div className="selection-button-offset belt" style={{
        top: '50%',
        left: `calc(${location.distance * activeMapMeta.distanceMultiplier}px)`,
        transform: `translate(-50%, -50%) scale(${rescale})`,
      }}>
        <button
          className={`selection-button`}
          onWheel={onWheelHandler}
          onClick={onClickHandler}
        >
          {children}
        </button>
      </div>
    )
  }

  else if (isSite) {
    return (
      <div className={`selection-button-offset normal ${isDetailLevel ? "is-detail-level" : ""} `} style={{
        height: usedRadius + borderRadiusModifier,
        width: usedRadius + borderRadiusModifier,
        transform: `translate(-50%, -50%) scale(${rescale})`,
      }}>
        <button
          className={`selection-button ${isDetailLevel ? "is-detail-level" : ""}`}
          onWheel={onWheelHandler}
          onClick={onClickHandler}
        >
          {children}
        </button>
  
        {selectedLocation?.name === location.name && 
          <div className="selected-marker">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
          </div>
        }
      </div>
    )
  }

  // Normal circle for most locations
  return (<>
      <div className="selection-button-offset normal" style={{
          height: usedRadius + borderRadiusModifier,
          width: usedRadius + borderRadiusModifier,
          transform: `translate(-50%, -50%) scale(${rescale})`,
      }}>
        <button
          className={`selection-button ${isDetailLevel ? "is-detail-level" : ""}`}
          onWheel={onWheelHandler}
          onClick={onClickHandler}
        >
          {children}
        </button>
      </div>

      {selectedLocation?.name === location.name && 
        <div className="map-selected-marker-container" style={{
          transform: `translate(-50%, -50%) scale(${rescale})`,
        }}>
          <div className="selected-marker-radial-dot" style={{
            height: usedRadius + 10 + 38,
            width: usedRadius + 10 + 38
          }}></div>
          <div className="selected-marker-radial" style={{
            height: usedRadius + 105
          }}>
            <div className="selected-marker-radial-inner">
              <div className="line top">
                <div className="subline"></div>
              </div>
              <div className="line bottom"><div className="subline"></div></div>
            </div>
          </div>
          </div>
      } 
    </>
  )
}

export default MapSelector