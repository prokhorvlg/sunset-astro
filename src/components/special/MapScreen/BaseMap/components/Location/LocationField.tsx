import { transformAtom, rescaleAtom, isDetailLevelAtom, opacityFadeOutAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import ElementHeading from "@/components/special/MapScreen/BaseMap/components/Element/ElementHeading"
import ElementOffset from "@/components/special/MapScreen/BaseMap/components/Element/DetailsContainer"
import Selector from "@/components/special/MapScreen/BaseMap/components/Element/MapSelector"
import { mathClamp } from "@/components/special/MapScreen/BaseMap/utils/math"
import { useIsVisible } from "@/utils/hooks/useIsVisible"
import { useAtom } from "jotai"
import { useEffect, useRef } from "react"
import "./LocationField.scss"
import { type SystemLocationNode, FieldShape, type LocationNode } from "@/components/special/MapScreen/BaseMap/data/types"

// TRUE = clip path method, using inline SVGs
// FALSe = uses css background method, faster but more difficult to implement
const FIELD_RENDER_METHOD_CLIPPATH = false

const LocationField = ({
  location,
  radius,
  color,
}: {
  location: SystemLocationNode
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
      {!location.hideLabel && 
        <Selector location={location}>
          <ElementHeading location={location} radius={radius} />
          {isDetailLevel &&
            <p className="flavor-text">{location.flavorText}</p>
          }
        </Selector>
      }

      {/* FIELD */}
      {mapShapeFromField(location.fieldShape || FieldShape.Earth, location)}
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

  // VISIBILITY CULLING
  const visibleRef = useRef(null)
  const isInView = useIsVisible(visibleRef)

  const fieldName = location.name.replace(/ /g, '')

  return (
    <>
      <div className={`map-field ${location.fieldClass ? location.fieldClass : ""}`}>

        {/* CULLING BLOCK */}
        <div className="culling-radius" ref={visibleRef}
          style={{
            height: height,
            width: width
          }}
        ></div>

        {/* FIELD */}
        {isInView && 
          <>
            {FIELD_RENDER_METHOD_CLIPPATH &&
              <>
                <div className="field-clipped" style={{
                  height: `${height}px`,
                  width: `${width}px`,
                  WebkitClipPath: `url(#${fieldName}_clipPath)`,
                  WebkitMaskSize: `${mathClamp(rescale * 50, 20, 60)}px`,
                  WebkitMaskImage: isDetailLevel ? "none" : undefined,
                  opacity: isDetailLevel ? 0.2 : 0.5
                }}></div>

                <svg width="100%" height="100%">
                  <defs>
                    <clipPath id={`${fieldName}_clipPath`}>
                      {children}
                    </clipPath>
                  </defs>
                </svg>
              </>
            }

            {!FIELD_RENDER_METHOD_CLIPPATH &&
              <>
                {/* STRIPED */}
                {!isDetailLevel && 
                  <div className="field-container" style={{
                    height: `${height}px`,
                    width: `${width}px`,
                    background: `url(/images/patterns/map-fields/system/field-${location.fieldShape?.toLowerCase()}.svg)`,
                    opacity: 0.8,
                    display: isDetailLevel ? "none" : "block"
                  }}></div>
                }

                {/* FILLED */}
                {isDetailLevel && 
                  <div className="field-container-filled" style={{
                    height: `${height}px`,
                    width: `${width}px`,
                    background: `url(/images/patterns/map-fields/system/field-${location.fieldShape?.toLowerCase()}-filled.svg)`,
                    opacity: isDetailLevel ? 0.8 : 0.1
                  }}></div>
                }
              </>
            }
          </>
        }
      </div>
    </>
  )
}

interface FieldProps {
  location: LocationNode
  classes?: string
}

const FieldEarth = (props: FieldProps) => {
  return (
    <FieldContainer {...props} width={150} height={96} >
      <path fillRule="evenodd" transform="scale(0.5)" fill={FIELD_RENDER_METHOD_CLIPPATH ? undefined : "url(#bg)"} 
        d="M285.1000,116.1000 C256.402,121.166 264.211,98.485 269.000,83.1000 C275.377,64.714 290.868,50.931 293.1000,67.000 C297.132,83.069 315.598,112.834 285.1000,116.1000 ZM140.1000,161.000 C110.805,137.213 89.074,130.577 65.000,126.1000 C37.640,122.935 37.382,82.1000 75.1000,82.1000 C102.097,82.1000 138.278,86.534 151.000,46.1000 C169.852,-11.583 238.574,-9.235 259.1000,22.000 C287.029,61.402 248.432,70.652 247.000,127.1000 C245.301,196.041 180.946,192.469 140.1000,161.000 ZM1.000,107.1000 C2.309,85.998 33.728,89.968 32.000,105.000 C29.947,122.862 -0.309,130.002 1.000,107.1000 Z"/>
    </FieldContainer>
  )
}

const FieldDistantBottomLeft = (props: FieldProps) => {
  return (
    <FieldContainer {...props} width={453} height={647}>
      <path fillRule="evenodd" transform="scale(0.7)" fill={FIELD_RENDER_METHOD_CLIPPATH ? undefined : "url(#bg)"} 
        d="M415.808,627.932 C371.859,602.280 355.642,574.658 351.098,561.589 C346.554,548.520 323.507,514.768 318.078,502.456 C292.685,444.871 311.288,468.905 322.884,481.329 C345.337,505.384 372.202,529.978 383.234,542.839 C417.814,583.152 408.330,583.486 434.853,619.257 C461.376,655.029 459.757,653.584 415.808,627.932 ZM340.288,584.260 C291.616,554.091 248.330,535.222 130.356,491.992 C84.046,475.022 55.834,412.134 34.266,337.502 C13.693,266.312 31.415,253.218 21.929,205.936 C18.719,189.938 23.754,191.133 35.410,202.435 C47.066,213.736 65.454,232.301 111.451,268.433 C157.448,304.565 186.931,344.034 200.774,368.144 C214.617,392.255 242.049,434.384 255.026,448.778 C268.003,463.172 267.720,477.375 297.058,512.928 C326.396,548.482 362.195,597.839 340.288,584.260 ZM98.448,224.277 C65.199,202.022 53.243,194.346 21.384,168.953 C-10.475,143.561 3.187,16.131 3.187,16.131 C4.492,4.641 8.730,-3.464 16.936,2.984 C25.143,9.432 45.627,20.728 51.152,36.284 C56.676,51.840 57.825,96.304 74.431,144.334 C91.036,192.363 117.886,207.454 131.635,232.480 C144.375,255.669 131.698,246.532 98.448,224.277 Z"/>
    </FieldContainer>
  )
}

const FieldMercury = (props: FieldProps) => {
  const scale = 0.6
  return (
    <FieldContainer {...props} width={136*scale} height={72*scale}>
<path fillRule="evenodd" transform={`scale(${scale}) translate(0, 0)`} fill={FIELD_RENDER_METHOD_CLIPPATH ? undefined : "url(#bg)"} 
 d="M133.287,71.312 C125.355,70.605 114.677,70.899 111.671,69.475 C110.287,68.818 108.892,68.115 107.524,67.391 C105.997,67.404 101.317,64.255 96.287,64.312 C51.177,64.827 53.080,50.915 39.287,42.312 C25.493,33.710 22.039,21.518 3.287,6.312 C-2.768,1.403 3.400,-0.264 6.287,0.312 C9.173,0.888 41.386,9.498 51.539,12.882 C58.829,15.312 57.541,21.593 64.259,26.096 C69.950,29.910 94.224,41.324 101.183,45.780 C108.143,50.236 122.660,62.204 128.069,65.455 C133.477,68.706 138.055,71.737 133.287,71.312 ZM86.953,34.054 C73.522,27.376 72.248,23.520 61.510,12.535 C53.027,3.856 72.812,-1.011 78.371,6.898 C83.930,14.807 91.684,22.787 105.861,36.525 C120.038,50.262 100.384,40.733 86.953,34.054 Z"/>
    </FieldContainer>
  )
}

const FieldJupiter = (props: FieldProps) => {
  const scale = 1
  return (
    <FieldContainer {...props} width={200*scale} height={177*scale}>
<path fillRule="evenodd" transform={`scale(${scale}) translate(0, 0)`} fill={FIELD_RENDER_METHOD_CLIPPATH ? undefined : "url(#bg)"} 
 d="M189.771,104.538 C204.537,125.218 204.731,208.386 173.566,148.653 C156.402,115.757 100.042,68.842 102.441,141.451 C102.831,166.678 99.767,195.970 72.730,157.656 C52.339,128.760 24.687,157.779 41.1000,117.000 C64.158,64.809 -38.074,58.365 16.911,11.805 C54.054,-19.647 58.828,23.378 113.244,26.210 C146.610,27.947 154.202,54.721 189.771,104.538 Z"/>
    </FieldContainer>
  )
}

const FieldSunWeather = (props: FieldProps) => {
  const scale = 1.4
  return (
    <FieldContainer {...props} width={1362*scale} height={1002*scale}>
<path fillRule="evenodd"  transform={`scale(${scale}) translate(0, 0)`} fill={FIELD_RENDER_METHOD_CLIPPATH ? undefined : "url(#bg)"} 
 d="M1330.032,346.233 C1321.122,364.156 1305.188,387.675 1314.196,365.265 C1323.205,342.855 1329.990,282.113 1328.605,212.058 C1327.220,142.003 1297.634,87.983 1266.1000,49.000 C1232.591,5.212 1226.403,3.353 1238.1000,1.000 C1273.193,-5.387 1342.877,70.477 1357.395,144.116 C1371.913,217.755 1338.943,328.310 1330.032,346.233 ZM1262.1000,63.000 C1295.503,109.066 1362.234,273.955 1205.1000,317.000 C1049.766,360.045 940.840,197.541 833.1000,219.000 C727.160,240.459 690.161,303.981 668.000,394.000 C660.818,423.173 669.625,358.912 684.1000,312.000 C704.624,252.123 772.458,155.821 899.1000,170.000 C1027.542,184.179 1123.554,273.711 1211.000,201.1000 C1298.446,130.289 1242.644,45.741 1234.1000,34.000 C1227.356,22.259 1239.990,30.388 1262.1000,63.000 ZM521.1000,489.000 C411.433,488.513 434.995,400.032 329.000,376.1000 C214.675,352.158 170.058,548.281 165.000,551.1000 C159.209,556.257 153.031,483.600 186.1000,394.000 C303.433,151.094 420.960,286.128 478.000,401.000 C535.040,515.872 626.000,444.000 626.000,444.000 C627.449,446.232 582.075,489.265 521.1000,489.000 ZM60.000,461.1000 C-19.535,442.043 -5.081,309.733 20.000,232.000 C45.081,154.267 77.577,98.424 62.1000,135.1000 C48.423,173.576 44.056,186.522 37.000,214.000 C26.128,256.338 37.023,350.847 91.000,353.000 C144.977,355.153 231.516,265.218 271.000,193.000 C310.262,121.188 315.287,117.885 280.1000,203.000 C255.766,265.640 139.535,481.957 60.000,461.1000 ZM679.000,467.000 C679.000,467.000 724.882,560.734 808.1000,557.000 C914.383,552.322 1066.509,493.918 1127.1000,637.1000 C1184.463,770.302 1103.429,821.506 1002.000,821.000 C891.797,820.451 803.396,878.697 775.1000,905.1000 C747.157,934.746 699.434,991.689 763.1000,905.1000 C869.382,766.144 1063.213,808.092 1014.1000,681.1000 C962.838,545.582 816.360,644.214 745.1000,578.000 C689.503,524.832 667.173,448.276 679.000,467.000 ZM735.1000,916.1000 C745.707,916.469 740.726,930.020 726.1000,947.1000 C721.275,955.499 705.518,976.984 696.1000,990.1000 C688.482,1005.016 683.932,1008.971 698.000,971.1000 C712.068,935.029 726.293,917.531 735.1000,916.1000 Z"/>
    </FieldContainer>
  )
}

const FieldSRICircle = (props: FieldProps) => {
  const scale = 1
  return (
    <FieldContainer {...props} width={100*scale} height={100*scale}>
<path fillRule="evenodd"  transform={`scale(${scale}) translate(0, 0)`} fill={FIELD_RENDER_METHOD_CLIPPATH ? undefined : "url(#bg)"} 
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
    [FieldShape.SunWeather]: <FieldSunWeather {...props} />,
    [FieldShape.Mercury]: <FieldMercury {...props} />,
    [FieldShape.Jupiter]: <FieldJupiter {...props} />,
    [FieldShape.SRICircle]: <FieldSRICircle {...props} />,
  }
  return mapShapeFromField[fieldShape]
}

export default LocationField