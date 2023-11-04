import {
  LocationNode,
  LocationType,
} from "@/components/special/SystemMap/data/types"
import {
  transformAtom,
  rescaleAtom,
  isDetailLevelAtom,
  selectedLocationAtom,
} from "@/components/special/SystemMap/state/atoms"
import { useIsVisible } from "@/utils/hooks/useIsVisible"
import { useAtom } from "jotai"
import { useRef } from "react"
import "./LocationWorld.scss"

const LocationWorld = ({
  location,
  radius,
  color,
}: {
  location: LocationNode
  radius: number
  color: string
}) => {
  // STATE ATOMS
  const [transform, setTransform] = useAtom(transformAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [isDetailLevel, setIsDetailLevel] = useAtom(
    isDetailLevelAtom
  )
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  // VISIBILITY CULLING
  const visibleRef = useRef(null)
  const isVisible = useIsVisible(visibleRef)

  const isSun = location.type === LocationType.Sun

  return (
    <div
      ref={visibleRef}
      className="map-world"
      style={{
        transform: `scale(${rescale})`,
      }}
    >
      {isVisible && (
        <>
          {/* PLANET CIRCLE */}
          <div
            className="map-world-circle map-singular-location"
            onClick={() => {
              if (!transform) return
              setSelectedLocation(location)
              transform.zoomToElement(location.name)
            }}
            style={{
              height: radius,
              width: radius,
              borderColor: location.colorSecondary
                ? location.colorSecondary
                : color,
              // background: location.colorSecondary ? `linear-gradient(to bottom, ${location.colorSecondary} 0%, ${location.color} 100%)` : undefined
            }}
          >
            {isSun && (
              <div
                className="inner-sun-border"
                style={{
                  height: radius + 6,
                  width: radius + 6,
                  borderColor: color,
                  display: "none",
                }}
              ></div>
            )}
            <div
              className="inner-circle"
              style={{
                height: radius - 5,
                width: radius - 5,
                backgroundColor: color,
              }}
            ></div>
            {/* <p className="symbol">V</p> */}
            {/* {location.isImportant && <div className="important">!</div>} */}
          </div>

          {/* PLANET TEXT */}
          <div
            className="text-under"
            style={{
              top: `${radius * 0.5 + 5}px`,
              color: color,
            }}
          >
            <h2 className="name">{location.name}</h2>
            {isDetailLevel && (
              <>
                <p
                  className="type-text"
                  style={{
                    color: color,
                  }}
                >
                  {location.typeText}
                </p>
                <p className="flavor-text">
                  {location.flavorText}
                </p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default LocationWorld
