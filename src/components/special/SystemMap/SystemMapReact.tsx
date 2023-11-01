import { MAP_DISTANCE_FACTOR, MAP_SCALE_FACTOR, MAP_DEFAULT_COLOR } from '@/components/special/SystemMap/data/constants';
import { locationsData } from '@/components/special/SystemMap/data/locationsData';
import { LocationNode, LocationType } from '@/components/special/SystemMap/types';
import { findNewPoint, increaseBrightness } from '@/components/special/SystemMap/WorldGenerationHelpers';
import { useEffect, useState } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchContentRef, useTransformEffect } from "react-zoom-pan-pinch";
import './SystemMap.scss'

const SystemMapReact = () => {
    const [zoom, setZoom] = useState()

    // TODO: Unique bounds on mobile scale devices. Desktop should be more limited.

    return (
        <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
            minScale={1}
            maxScale={8}
            smooth={true}
            centerOnInit
            wheel={{
                step: 1,
                smoothStep:0.005
            }}
        >
            {(transform: ReactZoomPanPinchContentRef) => {
                return (
                    <SystemMapTransformContainer transform={transform}/>
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
    
    return (
        <>
            {/* tools go here */}
            <TransformComponent wrapperClass="sunset-map-dynamic">
                <div className="sunset-map-bounding-block"></div>
                <div className="sunset-map-large-glowing-background excluded"></div>
                <div className="sunset-map-glowing-sun"></div>
                <div className="sunset-map-inner-container">
                    <SystemMapLocation location={locationsData} zoom={zoom} isRootElement />
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
    zoom
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
                    borderWidth: `${2 / zoom}px`
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
                        transform: `scale(${1 / zoom})`
                    }}>
                        <div className="map-world-circle" style={{
                            height: radius,
                            width: radius,
                            backgroundColor: color
                        }} />
                        <h2 className="name" style={{
                            top: `${radius * 0.5 + 5}px`,
                            color: color
                        }}>{location.name}</h2>
                    </div>
                }
                {isSite && 
                    <div className="map-site" style={{
                        transform: `scale(${1 / zoom})`
                    }}>
                        <div className="map-site-circle"></div>
                        <h2 className="name" style={{
                            bottom: `${radius * 0.5 + 5}px`,
                            opacity: zoom < 4 ? "0" : "1"
                        }}>{location.name}</h2>
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
                        />
                    )
                })}
            </div>
            
        </>
    )
}
 
export default SystemMapReact;
