import LocationAsteroidBelt from "@/components/special/SystemMap/components/LocationAsteroidBelt"
import LocationOrbitRing from "@/components/special/SystemMap/components/LocationOrbitRing"
import LocationSite from "@/components/special/SystemMap/components/LocationSite"
import LocationWorld from "@/components/special/SystemMap/components/LocationWorld"
import {
  MAP_DISTANCE_FACTOR,
  MAP_SCALE_FACTOR,
  MAP_DEFAULT_COLOR,
} from "@/components/special/SystemMap/data/constants"
import {
  LocationNode,
  LocationType,
} from "@/components/special/SystemMap/data/types"
import {
  scaleAtom,
  rescaleAtom,
  selectedLocationAtom,
} from "@/components/special/SystemMap/state/atoms"
import {
  findNewPoint,
  increaseBrightness,
} from "@/components/special/SystemMap/_old/WorldGenerationHelpers"
import { useIsVisible } from "@/utils/hooks/useIsVisible"
import { useAtom } from "jotai"
import { useMemo, useRef, useState } from "react"
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
  location: LocationNode
  parentLocation?: LocationNode
  zIndex?: number
  isRootElement?: boolean
  transform: ReactZoomPanPinchContentRef
}) => {
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  // NEW COORDINATES FOR THIS LOCATION
  const [objectPoint] = useState(findNewPoint(
    0,
    0,
    location.startingAngle,
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
    x: objectPoint.x * hypotenuseRatio * 0.5 + (objectPointNoDistance.x * 10),
    y: objectPoint.y * hypotenuseRatio * 0.5 + (objectPointNoDistance.y * 10)
  })

  const [radius] = useState(getProcessedRadius(location.radius))
  const [color] = useState(location.color
    ? increaseBrightness(location.color, 20)
    : MAP_DEFAULT_COLOR)

  // Makes sure inner rings are stacked over
  const ringsBeginningZIndex = 200
  const ringsCurrentZIndex = zIndex
    ? zIndex + 1
    : ringsBeginningZIndex

  const isWorld =
    location.type === LocationType.Planet ||
    location.type === LocationType.Moon ||
    location.type === LocationType.Sun
  const isSun = location.type === LocationType.Sun
  const isSite = location.type === LocationType.Site
  const isBelt = location.type === LocationType.AsteroidBelt

  const getDimensionOffset = (dimension: Dimension) => {
    // Sun needs to be in direct center of div.
    if (isRootElement) return "50%"

    // Sites need to remain at least as far as the parent's radius.
    if (isSite) {
      const rescaledParentRadius = parentRadius * rescale
      
      if (location.distance * MAP_DISTANCE_FACTOR < rescaledParentRadius) {
      //if (true){
        return objectPointFromParentRadius[dimension] * rescale
      } else {
        return objectPoint[dimension]
      }
    }

    // Anything else gets its normal offset.
    return objectPoint[dimension]
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

      {/* Container to shift location relative to parent */}
      <div
        className="map-location-container"
        style={{
          left: getDimensionOffset(Dimension.x),
          top: getDimensionOffset(Dimension.y),
        }}
      >
        {/* ZOOM MARKER (map zooms to this div) */}
        <div
          className="zoom-to-marker"
          id={location.name}
        ></div>

        {/* SELECTION BUTTON */}
        <div
          style={{
            transform: `scale(${rescale})`,
          }}
          className="selection-button-container"
        >
          <button
            className="selection-button"
            style={{
              height: radius + 22,
              width: radius + 22,
            }}
            onClick={() => {
              setSelectedLocation(location)
              transform.zoomToElement(location.name)
            }}
          ></button>
        </div>
            
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

        {location.children
          ?.slice(0)
          .reverse()
          .map((childLocation) => {
            return (
              <SystemMapLocation
                key={childLocation.name}
                location={childLocation}
                parentLocation={location}
                zIndex={ringsCurrentZIndex}
                transform={transform}
              />
            )
          })}
      </div>
    </>
  )
}

export default SystemMapLocation
