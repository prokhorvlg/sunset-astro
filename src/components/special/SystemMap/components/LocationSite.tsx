import { LocationNode } from "@/components/special/SystemMap/data/types"
import {
  transformAtom,
  rescaleAtom,
  selectedLocationAtom,
  isDetailLevelAtom,
} from "@/components/special/SystemMap/state/atoms"
import { useIsVisible } from "@/utils/hooks/useIsVisible"
import { useAtom } from "jotai"
import { useRef } from "react"
import "./LocationSite.scss"

const LocationSite = ({
  location,
  radius,
}: {
  location: LocationNode
  radius: number
}) => {
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
  const isInView = useIsVisible(visibleRef)

  return (
    <div
      ref={visibleRef}
      className="map-site"
      style={{
        transform: `scale(${rescale})`,
        //display: isDetailLevel ? "block" : "none",
      }}
    >
      {isInView && (
        <>

          {/* NAME */}
          <h2
            className="name"
            style={{
              bottom: `${radius * 0.5 + 10}px`,
              opacity: isDetailLevel ? "1" : "0",
            }}
          >
            {location.name}
          </h2>

          {/* ICON */}
          <div
            className="map-site-circle map-singular-location"
            onClick={() => {
              if (!transform) return
              setSelectedLocation(location)
              transform.zoomToElement(location.name)
            }}
          ></div>

          {/* TYPE, FLAVOR TEXT */}
          <div
            className="text-under"
            style={{
              top: `${radius * 0.5 + 10}px`,
              opacity: isDetailLevel ? "1" : "0",
            }}
          >
            <p className="type-text">{location.typeText}</p>
            <p className="flavor-text">
              {location.flavorText}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default LocationSite
