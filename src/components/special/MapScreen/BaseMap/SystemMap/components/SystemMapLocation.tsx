import { MAP_SCALE_FACTOR, MAP_DISTANCE_FACTOR, MAP_DEFAULT_COLOR } from "@/components/special/MapScreen/BaseMap/data/constants"
import { LocationNode, LocationType, SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"
import { scaleAtom, rescaleAtom, selectedLocationAtom, hoveredLocationAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import LocationAsteroidBelt from "@/components/special/MapScreen/BaseMap/SystemMap/components/LocationAsteroidBelt"
import LocationField from "@/components/special/MapScreen/BaseMap/SystemMap/components/LocationField"
import LocationOrbitRing from "@/components/special/MapScreen/BaseMap/SystemMap/components/LocationOrbitRing"
import LocationSite from "@/components/special/MapScreen/BaseMap/SystemMap/components/LocationSite"
import LocationWorld from "@/components/special/MapScreen/BaseMap/SystemMap/components/LocationWorld"
import { findNewPoint, increaseBrightness } from "@/components/special/MapScreen/utils/WorldGenerationHelpers"
import { useAtom } from "jotai"
import { useMemo, useState } from "react"
import { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch"
import './SystemMapLocation.scss'

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
}: {
  location: SystemLocationNode
  parentLocation?: SystemLocationNode
  zIndex?: number
  isRootElement?: boolean
  transform: ReactZoomPanPinchContentRef
}) => {
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )
  const [hoveredLocation, setHoveredLocation] = useAtom(
    hoveredLocationAtom
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
      ((parentLocation?.distance || 0) + location.distance) * MAP_DISTANCE_FACTOR :
      location.distance * MAP_DISTANCE_FACTOR
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
  const [color] = useState(location.color
    ? increaseBrightness(location.color, 20)
    : MAP_DEFAULT_COLOR)

  // Makes sure inner rings are stacked over
  const ringsBeginningZIndex = 200
  const [ringsCurrentZIndex] = useState(zIndex
    ? zIndex + 1
    : ringsBeginningZIndex)

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
            />
          )
        })}
    </>)
  }

  const getDimensionOffset = (dimension: Dimension) => {
    // Sun needs to be in direct center of div.
    if (isRootElement) return "50%"

    // Sites need to remain at least as far as the parent's radius.
    if (!isParentBelt && isSite) {
      const rescaledParentRadius = parentRadius * rescale
      
      if (location.distance * MAP_DISTANCE_FACTOR < rescaledParentRadius) {
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

      {/* Container to shift location relative to parent */}
      <div
        className="map-location-container"
        style={{
          left: dimensionOffsetX,
          top: dimensionOffsetY,
        }}
      >
        {/* SELECTION BUTTON */}
        {/* <button
          className="selection-button"
          style={{
            transform: `translate(-50%, -50%) scale(${rescale})`,
            height: radius + borderRadiusModifier,
            width: radius + borderRadiusModifier,
          }}
          onWheel={(e) => onWheel(e as any)}
          //onMouseOver={(e) => setHoveredLocation(location)}
          //onMouseLeave={(e) => setHoveredLocation(null)}
          onClick={() => {
            setSelectedLocation(location)
            transform.zoomToElement(location.name, 10, 400)
          }}
        >
          <div className={`selection-button-inner 
            ${location.worldAffiliation ? location.worldAffiliation : ""}`} style={{
            backgroundColor: location.type !== LocationType.Site ? location.color : undefined
          }}></div>
        </button> */}
            
        {/* WORLD (sun, moon, planet) */}
        {isWorld && (
          <LocationWorld
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
