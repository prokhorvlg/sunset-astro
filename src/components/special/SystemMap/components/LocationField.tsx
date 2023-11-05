import {
  LocationNode,
  LocationType,
} from "@/components/special/SystemMap/data/types"
import {
  transformAtom,
  rescaleAtom,
  isDetailLevelAtom,
  selectedLocationAtom,
  opacityFadeOutAtom,
} from "@/components/special/SystemMap/state/atoms"
import { mathClamp } from "@/components/special/SystemMap/utils/math"
import { useIsVisible } from "@/utils/hooks/useIsVisible"
import { useAtom } from "jotai"
import { useRef } from "react"
import "./LocationField.scss"

const LocationField = ({
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
  const [opacityFadeOut, setOpacityFadeOut] = useAtom(
    opacityFadeOutAtom
  )

  return (
    <div
      className="map-field"
      style={{
        //transform: `scale(${rescale})`,
      }}
    >
          {/* FIELD */}
          <div
            className="map-field-container"
            style={{
              //transform: "scale(0.3)"
              // background: location.colorSecondary ? `linear-gradient(to bottom, ${location.colorSecondary} 0%, ${location.color} 100%)` : undefined
            }}
          >
            <div className="field-clipped" style={{
              height: "96px",
              width: "150px",
              //background: '-webkit-linear-gradient(left, rgb(0, 156, 204), rgb(0, 111, 145))',
              WebkitClipPath: 'url(#maskBlob)',
              WebkitMaskSize: `${mathClamp(rescale * 50, 10, 60)}px`,
              opacity: mathClamp(opacityFadeOut * 0.8, 0, 0.7)
              //transform: "scale(0.3)"
            }}></div>
            <svg width="100%" height="100%">
              <defs>
                <clipPath id="maskBlob">
                  <path fillRule="evenodd" transform="scale(0.5)"
                  d="M285.1000,116.1000 C256.402,121.166 264.211,98.485 269.000,83.1000 C275.377,64.714 290.868,50.931 293.1000,67.000 C297.132,83.069 315.598,112.834 285.1000,116.1000 ZM140.1000,161.000 C110.805,137.213 89.074,130.577 65.000,126.1000 C37.640,122.935 37.382,82.1000 75.1000,82.1000 C102.097,82.1000 138.278,86.534 151.000,46.1000 C169.852,-11.583 238.574,-9.235 259.1000,22.000 C287.029,61.402 248.432,70.652 247.000,127.1000 C245.301,196.041 180.946,192.469 140.1000,161.000 ZM1.000,107.1000 C2.309,85.998 33.728,89.968 32.000,105.000 C29.947,122.862 -0.309,130.002 1.000,107.1000 Z"/>
                </clipPath>
              </defs>
            </svg>


          </div>

          {/* PLANET TEXT */}
          <div
            className="text-under"
          >
            <h2 className="name" style={{
              transform: `scale(${rescale})`,
              fontSize: `${mathClamp(1 / rescale * 5, 15, 35)}px`,
            }}>{location.name}</h2>
          </div>
    </div>
  )
}

export default LocationField
