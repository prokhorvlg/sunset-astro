import { LocationNode, LocationType, SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"
import { transformAtom, scaleAtom, rescaleAtom, isDetailLevelAtom, selectedLocationAtom, hoveredLocationAtom, isDetailLevel2Atom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import ElementHeading from "@/components/special/MapScreen/BaseMap/SystemMap/components/Element/ElementHeading"
import ElementOffset from "@/components/special/MapScreen/BaseMap/SystemMap/components/Element/ElementOffset"
import Selector from "@/components/special/MapScreen/BaseMap/SystemMap/components/Element/Selector"
import { useIsVisible } from "@/utils/hooks/useIsVisible"
import { useAtom } from "jotai"
import { useRef } from "react"
import "./LocationWorld.scss"

const LocationWorld = ({
  location,
  radius,
  color
}: {
  location: SystemLocationNode
  radius: number
  color: string
}) => {
  // STATE ATOMS
  const [transform, setTransform] = useAtom(transformAtom)
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [isDetailLevel, setIsDetailLevel] = useAtom(isDetailLevelAtom)
  const [isDetailLevel2, setIsDetailLevel2] = useAtom(isDetailLevel2Atom)
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  // VISIBILITY CULLING
  const visibleRef = useRef(null)
  const isInView = useIsVisible(visibleRef)

  const isSun = location.type === LocationType.Sun
  const isUranus = location.name === "Uranus"

  return (
    <>
      <Selector location={location} radius={radius} />
    
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
                borderColor: (
                  location.colorSecondary
                    ? location.colorSecondary
                    : color
                ),
              }}
            >
              <div className="inner-circle-atmo" style={{
                  height: isDetailLevel ? radius + 86 : radius + 6,
                  width: isDetailLevel ? radius + 86 : radius + 6,
                  backgroundColor: color,
                }}></div>
              <div
                className="inner-circle"
                style={{
                  height: isDetailLevel ? radius + 25 : radius - 5,
                  width: isDetailLevel ? radius + 25 : radius - 5,
                  background: location.colorSecondary ? `linear-gradient(to bottom, ${location.colorSecondary} 40%, ${color} 60%)` : color,
                  transform: isUranus ? "translate(-50%, -50%) rotate(90deg)" : undefined
                }}
              >
              </div>
              
              {location.ringWidth &&
                <div className="ring" style={{
                  backgroundColor: location.colorSecondary,
                  width: isDetailLevel ? `${location.ringWidth * 3.2}px` : `${location.ringWidth * 2}px`,
                }}></div>
              }
              
            </div>

            {/* PLANET TEXT */}
            <ElementOffset location={location} radius={radius}>
              <>
                {/* NAME */}
                <ElementHeading location={location} radius={radius} />

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
                    {isDetailLevel2 &&
                      <p className="flavor-text">
                        {location.flavorText}
                      </p>
                    }
                  </>
                )}
              </>
            </ElementOffset>
          </>
        )}
      </div>
    </>
  )
}

export default LocationWorld
