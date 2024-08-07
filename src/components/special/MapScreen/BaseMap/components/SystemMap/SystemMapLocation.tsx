import { MAP_SCALE_FACTOR, MAP_DEFAULT_COLOR } from "@/components/special/MapScreen/BaseMap/data/constants"
import { scaleAtom, rescaleAtom, selectedLocationAtom, hoveredLocationAtom, activeMapMetaAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { findNewPoint, increaseBrightness } from "@/components/special/MapScreen/utils/WorldGenerationHelpers"
import { useAtom } from "jotai"
import { useMemo, useState } from "react"
import './SystemMapLocation.scss'
import ZoomToMarker from "@/components/special/MapScreen/BaseMap/components/Element/ZoomToMarker"
import LocationAsteroidBelt from "@/components/special/MapScreen/BaseMap/components/Location/LocationAsteroidBelt"
import LocationField from "@/components/special/MapScreen/BaseMap/components/Location/LocationField"
import LocationOrbitRing from "@/components/special/MapScreen/BaseMap/components/Location/LocationOrbitRing"
import LocationSite from "@/components/special/MapScreen/BaseMap/components/Location/LocationSite"
import LocationWorld from "@/components/special/MapScreen/BaseMap/components/Location/LocationWorld"
import { type SystemLocationNode, LocationType } from "@/components/special/MapScreen/BaseMap/data/types"
import type { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch"

enum Dimension {
  x = 'x',
  y = 'y' 
}

const getProcessedRadius = (radius?: number) => {
  return radius
    ? radius * MAP_SCALE_FACTOR * 2.2
    : 0
}

// Generates each individual location.
const SystemMapLocation = ({
  location,
  parentLocation,
  zIndex,
  isRootElement,
  transform,
  parentRootVector
}: {
  location: SystemLocationNode
  parentLocation?: SystemLocationNode
  zIndex?: number
  isRootElement?: boolean
  transform: ReactZoomPanPinchContentRef
  parentRootVector: {
    x: number
    y: number
  }
}) => {
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [hoveredLocation, setHoveredLocation] = useAtom(
    hoveredLocationAtom
  )
  const [activeMapMeta, setActiveMapMeta] = useAtom(
    activeMapMetaAtom
  )

  const [isWorld] = useState(
    location.type === LocationType.Planet ||
    location.type === LocationType.Moon ||
    location.type === LocationType.Sun)
  const [isSun] = useState(location.type === LocationType.Sun)
  const [isSite] = useState(location.type === LocationType.Site)
  const [isBelt] = useState(location.type === LocationType.AsteroidBelt)
  const [isField] = useState(location.type === LocationType.Field)

  const [isParentBelt] = useState(parentLocation?.type === LocationType.AsteroidBelt)

  // NEW COORDINATES FOR THIS LOCATION
  const [objectPoint] = useState(findNewPoint(
    0,
    0,
    location.startingAngle,
    isParentBelt ? 
      ((parentLocation?.distance || 0) + location.distance) * activeMapMeta.distanceMultiplier :
      location.distance * activeMapMeta.distanceMultiplier
  ))
  const [objectPointNoDistance] = useState(findNewPoint(
    0,
    0,
    location.startingAngle,
    1
  ))
  const [objectPointHypotenuse] = useState(Math.sqrt(objectPoint.x ** 2 + objectPoint.y ** 2))
  const [parentRadius] = useState(getProcessedRadius(parentLocation?.radius))
  const [hypotenuseRatio] = useState(parentRadius / objectPointHypotenuse)
  const [objectPointFromParentRadius] = useState({
    x: objectPoint.x * hypotenuseRatio * 0.55 + (objectPointNoDistance.x * 10),
    y: objectPoint.y * hypotenuseRatio * 0.55 + (objectPointNoDistance.y * 10)
  })

  const [radius] = useState(getProcessedRadius(location.radius))
  const color = location.color || MAP_DEFAULT_COLOR

  // Makes sure inner rings are stacked over
  const ringsBeginningZIndex = 200
  const [ringsCurrentZIndex] = useState(zIndex
    ? zIndex + 1
    : ringsBeginningZIndex)

  

  

  const getDimensionOffset = (dimension: Dimension) => {
    // Sun needs to be in direct center of div.
    if (isRootElement) return "50%"

    // Sites need to remain at least as far as the parent's radius.
    if (!isParentBelt && isSite) {
      const rescaledParentRadius = parentRadius * rescale
      
      if (location.distance * activeMapMeta.distanceMultiplier < rescaledParentRadius) {
        return objectPointFromParentRadius[dimension] * rescale
      } else {
        return objectPoint[dimension]
      }
    }

    // Anything else gets its normal offset.
    return objectPoint[dimension]
  }

  const dimensionOffsetX = useMemo(() => getDimensionOffset(Dimension.x), [parentRadius, rescale])
  const dimensionOffsetY = useMemo(() => getDimensionOffset(Dimension.y), [parentRadius, rescale])

  const rootVector = isRootElement ? {
    x: 0,
    y: 0
  } : {
    x: parentRootVector.x + objectPoint[Dimension.x],
    y: parentRootVector.y + objectPoint[Dimension.y]
  }

  const getChildrenElements = () => {
    return (<>
      {location.children
        ?.slice(0)
        .reverse()
        .map((childLocation) => {
          return (
            <SystemMapLocation
              key={childLocation.name}
              location={childLocation as SystemLocationNode}
              parentLocation={location}
              zIndex={ringsCurrentZIndex}
              transform={transform}
              parentRootVector={rootVector}
            />
          )
        })}
    </>)
  }

  const zoomToLeft = () => {
    if (isRootElement) return "50%"
    else if (isBelt) return location.distance * activeMapMeta.distanceMultiplier
    //else if (isField) return location.fieldLabelOffset?.x || 0
    return objectPoint.x
  } 
  const zoomToTop = () => {
    if (isRootElement) return "50%"
    else if (isBelt) return "50%"
    //else if (isWorld) return "calc(50% + 5px)"
    //else if (isField) return location.fieldLabelOffset?.y || 0
    return objectPoint.y
  } 

  return (
    <>
      {/* ORBIT RING (if this is a world) */}
      {isWorld && (
        <LocationOrbitRing
          location={location}
          ringsCurrentZIndex={ringsCurrentZIndex}
        />
      )}

      {/* ASTEROID BELT */}
      {isBelt && (
        <LocationAsteroidBelt
          location={location}
          ringsCurrentZIndex={ringsCurrentZIndex}
          radius={radius}
        />
      )}

      <ZoomToMarker location={location} 
        left={zoomToLeft()} 
        top={zoomToTop()} />

      {/* Container to shift location relative to parent */}
      <div
        className="map-location-container"
        style={{
          left: dimensionOffsetX,
          top: dimensionOffsetY,
        }}
      >           
        {/* WORLD (sun, moon, planet) */}
        {isWorld && (
          <LocationWorld
            isRootElement={isRootElement ?? false}
            rootVector={rootVector}
            location={location}
            radius={radius}
            color={color}
          />
        )}

        {/* SITE (space station, etc) */}
        {isSite && (
          <LocationSite 
            location={location}
            radius={radius}
          />
        )}

        {/* FIELD (reality field, asteroids, weather) */}
        {isField && (
          <LocationField 
            location={location}
            radius={radius}
            color={color}
          />
        )}

        {!isBelt && getChildrenElements()}
      </div>
      {isBelt && getChildrenElements()}
    </>
  )
}

export default SystemMapLocation
