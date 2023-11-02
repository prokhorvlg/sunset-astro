import { MAP_DISTANCE_FACTOR, MAP_SCALE_FACTOR, MAP_DEFAULT_COLOR } from '@/components/special/SystemMap/data/constants';
import { locationsData } from '@/components/special/SystemMap/data/locationsData';
import { LocationNode, LocationType } from '@/components/special/SystemMap/types';
import { findNewPoint, increaseBrightness } from '@/components/special/SystemMap/WorldGenerationHelpers';
import { useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchContentRef, useTransformEffect, ReactZoomPanPinchState } from "react-zoom-pan-pinch";
import './SystemMap.scss'

const MAP_MIN_SCALE = 1
const MAP_MAX_SCALE = 8

const SystemMapReact = () => {
    const transformComponentRef = useRef(null);
    const [scale, setScale] = useState(1)

    // TODO: Unique bounds on mobile scale devices. Desktop should be more limited.

    const updateScale = (e) => {
        const targetScale = parseFloat(e.target.value);
        const factor = Math.log(targetScale / scale);
        const { zoomIn, zoomOut } = transformComponentRef.current;
    
        if (targetScale > scale) {
          zoomIn(factor, 0);
        } else {
          zoomOut(-factor, 0);
        }
    
        setScale(targetScale);
    };

    return (
        <TransformWrapper
            ref={transformComponentRef}
            initialScale={scale}
            initialPositionX={0}
            initialPositionY={0}
            minScale={MAP_MIN_SCALE}
            maxScale={MAP_MAX_SCALE}
            smooth={true}
            centerOnInit
            wheel={{
                //step: 1,
                //smoothStep:0.005
            }}
            onZoom={(e) => {
                setScale(e.state.scale);
            }}
            onZoomStop={(e) => {
                setScale(e.state.scale);
            }}
        >
            {(transform: ReactZoomPanPinchContentRef) => {
                return (
                    <>
                        <input 
                            type="range" 
                            value={scale} 
                            min={MAP_MIN_SCALE} 
                            max={MAP_MAX_SCALE} 
                            step="0.001"
                            style={{
                                position: "absolute",
                                zIndex: "900"
                            }}
                            onChange={updateScale} 
                        />
                        <SystemMapTransformContainer transform={transform}/>
                    </>
                    
                )
            }}
        </TransformWrapper>
    )
};

const SystemMapTransformContainer = ({
    transform
}: {
    transform: ReactZoomPanPinchContentRef
}) => {
    const [zoom, setZoom] = useState<number>(1)
    

    

    useTransformEffect(({ state, instance }) => {
        setZoom(state.scale)
    });
    const rescale = (0.9 / zoom)
    
    return (
        <>
            
            <button
                onClick={(e) => {
                    transform.zoomIn(0.8)
                }}
            >zoom in</button>
            <button
                onClick={(e) => {
                    transform.zoomOut(0.8)
                }}
            >zoom out</button>
            <TransformComponent wrapperClass="sunset-map-dynamic">
                <div className="sunset-map-bounding-block"></div>
                <div className="sunset-map-large-glowing-background excluded"></div>
                <div className="sunset-map-glowing-sun"></div>
                <div className="sunset-map-inner-container">
                    <SystemMapLocation location={locationsData} zoom={zoom} isRootElement rescale={rescale} />
                </div>
            </TransformComponent>
        </>
    )
}

// Generates each individual location.
const SystemMapLocation = ({
    location,
    parent,
    parentCoordinates,
    zIndex,
    isRootElement,
    zoom,
    rescale
}: {
    location: LocationNode
    parent?: LocationNode
    parentCoordinates?: {
        x: number,
        y: number
    },
    zIndex?: number
    isRootElement?: boolean
    zoom: number
    rescale: number
}) => {
    const objectPoint = findNewPoint(0, 0, location.startingAngle, location.distance * MAP_DISTANCE_FACTOR);
    const radius = location.radius ? location.radius * MAP_SCALE_FACTOR * 2.2 : 0
    const color = location.color ? increaseBrightness(location.color, 20) : MAP_DEFAULT_COLOR

    // for rings
    const zIndexCurrent = zIndex ? zIndex + 1 : 200

    const isWorld = location.type === LocationType.Planet || 
        location.type === LocationType.Moon ||
        location.type === LocationType.Sun
    const isSite = location.type === LocationType.Site

    return (
        <>
            {isWorld &&
                <div className="map-orbit-ring" style={{
                    height: location.distance * MAP_DISTANCE_FACTOR * 2,
                    width: location.distance * MAP_DISTANCE_FACTOR * 2,
                    zIndex: zIndexCurrent,
                    borderWidth: `${rescale * 0.5}px`
                }} />
            }
            {location.type === LocationType.AsteroidBelt &&
                <div className="map-asteroid-belt" style={{
                    height: location.distance * MAP_DISTANCE_FACTOR * 2 - 25,
                    width: location.distance * MAP_DISTANCE_FACTOR * 2 - 25,
                    zIndex: zIndexCurrent
                }} />
            }
            <div className="map-location-container" style={{
                left: isRootElement ?  "50%" : objectPoint.x,
                top: isRootElement ? "50%" : objectPoint.y,
            }}>
                {isWorld &&
                    <div className="map-world" style={{
                        transform: `scale(${rescale})`
                    }}>
                        <div className="map-world-circle" style={{
                            height: radius,
                            width: radius,
                            backgroundColor: color
                        }} />
                        <div className="text-under" style={{
                            top: `${radius * 0.5 + 5}px`,
                        }}>
                            <h2 className="name">{location.name}</h2>
                        </div>
                    </div>
                }
                {isSite && 
                    <div className="map-site" style={{
                        transform: `scale(${rescale})`
                    }}>
                        <div className="map-site-circle"></div>
                        <div className="text-under" style={{
                            bottom: `${radius * 0.5 + 5}px`,
                            opacity: zoom < 4 ? "0" : "1"
                        }}>
                            <h2 className="name">{location.name}</h2>
                            <p className="description">{location.description}</p>
                        </div>
                        
                    </div>
                }
                
                {location.children?.slice(0).reverse().map((child) => {
                    return (
                        <SystemMapLocation 
                            key={child.name}
                            location={child} 
                            parent={parent}
                            parentCoordinates={objectPoint}
                            zIndex={zIndexCurrent}
                            zoom={zoom}
                            rescale={rescale}
                        />
                    )
                })}
            </div>
            
        </>
    )
}
 
export default SystemMapReact;
