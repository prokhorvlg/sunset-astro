import {
  FieldShape,
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
    <>
      {/* FIELD */}
      {mapShapeFromField(location.fieldShape || FieldShape.Earth, location)}

      {/* FIELD TEXT */}
      <div className={`map-field-text text-under ${location.fieldClass}`} style={{
        left: location.fieldLabelOffset?.x,
        top: location.fieldLabelOffset?.y
      }}>
        <h2 className="name" style={{
          transform: `scale(${rescale})`,
          fontSize: `${mathClamp(1 / rescale * 5, 15, 35)}px`,
        }}>{location.typeText} «{location.name}»</h2>
      </div>
    </>
  )
}

const FieldContainer = ({
  width,
  height,
  location,
  children
}: {
  width: number
  height: number
  location: LocationNode
  children
}) => {
  const [rescale, setRescale] = useAtom(rescaleAtom)
  const [isDetailLevel, setIsDetailLevel] = useAtom(
    isDetailLevelAtom
  )
  const [opacityFadeOut, setOpacityFadeOut] = useAtom(
    opacityFadeOutAtom
  )

  return (
    <div className={`map-field-container ${location.fieldClass}`}>
      <div className="field-clipped magnetic-storm" style={{
        height: `${height}px`,
        width: `${width}px`,
        //height: "1000px",
        //width: "1000px",
        WebkitClipPath: `url(#${location.name.replace(/ /g, '')}_clipPath)`,
        WebkitMaskSize: `${mathClamp(rescale * 50, 20, 60)}px`,
        WebkitMaskImage: isDetailLevel ? "none" : undefined,
        opacity: mathClamp(opacityFadeOut * 0.8, 0.2, 0.7)
      }}>
      </div>
      <svg width="100%" height="100%">
        <defs>
          <clipPath id={`${location.name.replace(/ /g, '')}_clipPath`}>
            {children}
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

interface FieldProps {
  location: LocationNode
  classes?: string
}

const FieldEarth = (props: FieldProps) => {
  return (
    <FieldContainer {...props} width={150} height={96} >
      <path fillRule="evenodd" transform="scale(0.5)"
        d="M285.1000,116.1000 C256.402,121.166 264.211,98.485 269.000,83.1000 C275.377,64.714 290.868,50.931 293.1000,67.000 C297.132,83.069 315.598,112.834 285.1000,116.1000 ZM140.1000,161.000 C110.805,137.213 89.074,130.577 65.000,126.1000 C37.640,122.935 37.382,82.1000 75.1000,82.1000 C102.097,82.1000 138.278,86.534 151.000,46.1000 C169.852,-11.583 238.574,-9.235 259.1000,22.000 C287.029,61.402 248.432,70.652 247.000,127.1000 C245.301,196.041 180.946,192.469 140.1000,161.000 ZM1.000,107.1000 C2.309,85.998 33.728,89.968 32.000,105.000 C29.947,122.862 -0.309,130.002 1.000,107.1000 Z"/>
    </FieldContainer>
  )
}

const FieldDistantBottomLeft = (props: FieldProps) => {
  return (
    <FieldContainer {...props} width={453} height={647}>
      <path fillRule="evenodd" transform="scale(0.7)"
        d="M415.808,627.932 C371.859,602.280 355.642,574.658 351.098,561.589 C346.554,548.520 323.507,514.768 318.078,502.456 C292.685,444.871 311.288,468.905 322.884,481.329 C345.337,505.384 372.202,529.978 383.234,542.839 C417.814,583.152 408.330,583.486 434.853,619.257 C461.376,655.029 459.757,653.584 415.808,627.932 ZM340.288,584.260 C291.616,554.091 248.330,535.222 130.356,491.992 C84.046,475.022 55.834,412.134 34.266,337.502 C13.693,266.312 31.415,253.218 21.929,205.936 C18.719,189.938 23.754,191.133 35.410,202.435 C47.066,213.736 65.454,232.301 111.451,268.433 C157.448,304.565 186.931,344.034 200.774,368.144 C214.617,392.255 242.049,434.384 255.026,448.778 C268.003,463.172 267.720,477.375 297.058,512.928 C326.396,548.482 362.195,597.839 340.288,584.260 ZM98.448,224.277 C65.199,202.022 53.243,194.346 21.384,168.953 C-10.475,143.561 3.187,16.131 3.187,16.131 C4.492,4.641 8.730,-3.464 16.936,2.984 C25.143,9.432 45.627,20.728 51.152,36.284 C56.676,51.840 57.825,96.304 74.431,144.334 C91.036,192.363 117.886,207.454 131.635,232.480 C144.375,255.669 131.698,246.532 98.448,224.277 Z"/>
    </FieldContainer>
  )
}

const FieldSunWeather = (props: FieldProps) => {
  const scale = 1.4
  return (
    <FieldContainer {...props} width={1362*scale} height={1002*scale}>
<path fillRule="evenodd"  fill="none" transform={`scale(${scale}) translate(0, 0)`}
 d="M1330.032,346.233 C1321.122,364.156 1305.188,387.675 1314.196,365.265 C1323.205,342.855 1329.990,282.113 1328.605,212.058 C1327.220,142.003 1297.634,87.983 1266.1000,49.000 C1232.591,5.212 1226.403,3.353 1238.1000,1.000 C1273.193,-5.387 1342.877,70.477 1357.395,144.116 C1371.913,217.755 1338.943,328.310 1330.032,346.233 ZM1262.1000,63.000 C1295.503,109.066 1362.234,273.955 1205.1000,317.000 C1049.766,360.045 940.840,197.541 833.1000,219.000 C727.160,240.459 690.161,303.981 668.000,394.000 C660.818,423.173 669.625,358.912 684.1000,312.000 C704.624,252.123 772.458,155.821 899.1000,170.000 C1027.542,184.179 1123.554,273.711 1211.000,201.1000 C1298.446,130.289 1242.644,45.741 1234.1000,34.000 C1227.356,22.259 1239.990,30.388 1262.1000,63.000 ZM521.1000,489.000 C411.433,488.513 434.995,400.032 329.000,376.1000 C214.675,352.158 170.058,548.281 165.000,551.1000 C159.209,556.257 153.031,483.600 186.1000,394.000 C303.433,151.094 420.960,286.128 478.000,401.000 C535.040,515.872 626.000,444.000 626.000,444.000 C627.449,446.232 582.075,489.265 521.1000,489.000 ZM60.000,461.1000 C-19.535,442.043 -5.081,309.733 20.000,232.000 C45.081,154.267 77.577,98.424 62.1000,135.1000 C48.423,173.576 44.056,186.522 37.000,214.000 C26.128,256.338 37.023,350.847 91.000,353.000 C144.977,355.153 231.516,265.218 271.000,193.000 C310.262,121.188 315.287,117.885 280.1000,203.000 C255.766,265.640 139.535,481.957 60.000,461.1000 ZM679.000,467.000 C679.000,467.000 724.882,560.734 808.1000,557.000 C914.383,552.322 1066.509,493.918 1127.1000,637.1000 C1184.463,770.302 1103.429,821.506 1002.000,821.000 C891.797,820.451 803.396,878.697 775.1000,905.1000 C747.157,934.746 699.434,991.689 763.1000,905.1000 C869.382,766.144 1063.213,808.092 1014.1000,681.1000 C962.838,545.582 816.360,644.214 745.1000,578.000 C689.503,524.832 667.173,448.276 679.000,467.000 ZM735.1000,916.1000 C745.707,916.469 740.726,930.020 726.1000,947.1000 C721.275,955.499 705.518,976.984 696.1000,990.1000 C688.482,1005.016 683.932,1008.971 698.000,971.1000 C712.068,935.029 726.293,917.531 735.1000,916.1000 Z"/>
    </FieldContainer>
  )
}

const mapShapeFromField = (fieldShape: FieldShape, location: LocationNode) => {
  const props = {
    location: location
  }
  const mapShapeFromField = {
    [FieldShape.Earth]: <FieldEarth {...props} />,
    [FieldShape.DistantBottomLeft]: <FieldDistantBottomLeft {...props} />,
    [FieldShape.SunWeather]: <FieldSunWeather {...props} />
  }
  return mapShapeFromField[fieldShape]
}

export default LocationField