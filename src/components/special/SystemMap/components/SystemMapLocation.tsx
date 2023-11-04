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
import { useRef } from "react"
import { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch"
import './SystemMapLocation.scss'

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

  const someRef = useRef(null)
  const isVisible = useIsVisible(someRef)

  const objectPoint = findNewPoint(
    0,
    0,
    location.startingAngle,
    location.distance * MAP_DISTANCE_FACTOR
  )
  const radius = location.radius
    ? location.radius * MAP_SCALE_FACTOR * 2.2
    : 0
  const color = location.color
    ? increaseBrightness(location.color, 20)
    : MAP_DEFAULT_COLOR

  const isZoomLevel2 = scale > 4

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
        ref={someRef}
        style={{
          left: isRootElement ? "50%" : objectPoint.x,
          top: isRootElement ? "50%" : objectPoint.y,
        }}
      >
        <div
          className="zoom-to-marker"
          id={location.name}
        ></div>

        {isVisible && (
          <>
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

            {isWorld && (
              <LocationWorld
                location={location}
                radius={radius}
                color={color}
              />
            )}
            {isSite && (
              <LocationSite 
                location={location}
                radius={radius}
              />
            )}
          </>
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
