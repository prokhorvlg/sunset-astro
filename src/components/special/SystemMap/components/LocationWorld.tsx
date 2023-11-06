import {
  LocationNode,
  LocationType,
} from "@/components/special/SystemMap/data/types"
import {
  transformAtom,
  rescaleAtom,
  isDetailLevelAtom,
  selectedLocationAtom,
  scaleAtom,
} from "@/components/special/SystemMap/state/atoms"
import { mathClamp } from "@/components/special/SystemMap/utils/math"
import { useIsVisible } from "@/utils/hooks/useIsVisible"
import { useAtom } from "jotai"
import { useRef } from "react"
import "./LocationWorld.scss"

const LocationWorld = ({
  location,
  radius,
  color
}: {
  location: LocationNode
  radius: number
  color: string
}) => {
  // STATE ATOMS
  const [transform, setTransform] = useAtom(transformAtom)
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [isDetailLevel, setIsDetailLevel] = useAtom(
    isDetailLevelAtom
  )
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  // VISIBILITY CULLING
  const visibleRef = useRef(null)
  const isInView = useIsVisible(visibleRef)

  const isSun = location.type === LocationType.Sun

  return (
    <div
    
      className="map-world"
      style={{
        transform: `scale(${rescale})`,
      }}
    >
      <div className="culling-radius" ref={visibleRef}
        style={{
          height: radius,
          width: radius 
        }}
      ></div>
      {isInView && (
        <>
          {/* PLANET CIRCLE */}
          <div
            className="map-world-circle map-singular-location"
            style={{
              height: isDetailLevel ? radius + 30 : radius,
              width: isDetailLevel ? radius + 30 : radius,
              borderColor: location.colorSecondary
                ? location.colorSecondary
                : color,
              //background: location.colorSecondary ? `linear-gradient(to bottom, ${location.colorSecondary} 0%, ${location.color} 100%)` : location.color
            }}
          >
            {isSun && (
              <div
                className="inner-sun-border"
                style={{
                  height: isDetailLevel ? radius + 26 : radius + 6,
                  width: isDetailLevel ? radius + 26 : radius + 6,
                  borderColor: color,
                  display: "none",
                }}
              ></div>
            )}
            <div
              className="inner-circle"
              style={{
                height: isDetailLevel ? radius + 25 : radius - 5,
                width: isDetailLevel ? radius + 25 : radius - 5,
                //backgroundColor: color,
                background: location.colorSecondary ? `linear-gradient(to bottom, ${location.colorSecondary} 40%, ${color} 60%)` : color
              }}
            >
              
            </div>
            {location.ringWidth &&
              <div className="ring" style={{
                backgroundColor: location.colorSecondary,
                width: `${location.ringWidth * 2}px`
              }}></div>
            }
            
          </div>

          {/* PLANET TEXT */}
          <div
            className="text-under"
            style={{
              top: `${radius * 0.5 + 5}px`,
              color: color,
            }}
          >
            <h2 className="name" style={{
              fontSize: isDetailLevel ? "22px" : "14px",
            }}>{location.name}</h2>
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
