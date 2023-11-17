import { MAP_DISTANCE_FACTOR } from "@/components/special/MapScreen/BaseMap/data/constants"
import { LocationNode, LocationType, SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"
import { useMapWheel } from "@/components/special/MapScreen/BaseMap/hooks/useMapWheel"
import { transformAtom, rescaleAtom, selectedLocationAtom, isDetailLevelAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import { useState } from "react"
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
  const { onWheel } = useMapWheel()

  const onWheelHandler = (e) => onWheel(e)
  const onClickHandler = (e) => {
    setSelectedLocation(location)
    transform?.zoomToElement(location.name, 10, 400)
  }

  const [transform, setTransform] = useAtom(transformAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [isDetailLevel, setIsDetailLevel] = useAtom(isDetailLevelAtom)

  const [isField] = useState(location.type === LocationType.Field)
  const [isBelt] = useState(location.type === LocationType.AsteroidBelt)

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

          {selectedLocation?.name === location.name && 
            <div className="selected-marker">
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>
            </div>
          }
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
  onWheelHandler,
  onClickHandler,
  children
}) => {
  const [rescale, setRescale] = useAtom(rescaleAtom)

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
        left: `calc(${location.distance * MAP_DISTANCE_FACTOR}px)`,
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

  return (
    <div className="selection-button-offset normal" style={{
      height: usedRadius + borderRadiusModifier,
      width: usedRadius + borderRadiusModifier,
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

export default Selector