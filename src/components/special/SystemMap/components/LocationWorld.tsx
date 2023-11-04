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
import { useAtom } from "jotai"
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
  const [transform, setTransform] = useAtom(transformAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [isDetailLevel, setIsDetailLevel] = useAtom(
    isDetailLevelAtom
  )
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  const isSun = location.type === LocationType.Sun

  return (
    <div
      className="map-world"
      style={{
        transform: `scale(${rescale})`,
      }}
    >
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
          //border: location.isImportant ? "2px solid" : "none",
          borderColor: location.colorSecondary
            ? location.colorSecondary
            : color,
          //borderImage: location.colorSecondary ? `linear-gradient(to bottom, ${location.colorSecondary} 0%, ${location.color} 100%)` : undefined
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
    </div>
  )
}

export default LocationWorld
