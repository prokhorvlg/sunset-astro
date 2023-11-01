import { MAP_DISTANCE_FACTOR, MAP_SCALE_FACTOR, MAP_DEFAULT_COLOR } from '@/components/special/SystemMap/data/constants';
import { locationsData } from '@/components/special/SystemMap/data/locationsData';
import { LocationNode } from '@/components/special/SystemMap/types';
import { findNewPoint, increaseBrightness } from '@/components/special/SystemMap/WorldGenerationHelpers';
import { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './SystemMap.scss'

const SystemMapReact = () => {
    const [zoom, setZoom] = useState()

    return (
        <TransformWrapper
            //initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
            minScale={0.5}
            maxScale={8}
            limitToBounds={false}
            smooth={false}
            centerOnInit
            wheel={{
                smoothStep: 0.003
            }}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
                {/* tools go here */}
                <TransformComponent wrapperClass="sunset-map-dynamic">
                    <div className="sunset-map-inner-container">
                        <SystemMapOrbit location={locationsData} />
                        <SystemMapLocation location={locationsData} />
                    </div>
                </TransformComponent>
            </>
        )}
        </TransformWrapper>
    )
};

// Generates the orbit paths for each major object.
const SystemMapOrbit = ({
    location,
    parent,
    parentCoordinates,
    zIndex
}: {
    location: LocationNode
    parent?: LocationNode
    parentCoordinates?: {
        x: number,
        y: number
    },
    zIndex?: number
}) => {
    const objectPoint = findNewPoint(0, 0, location.startingAngle, location.distance * MAP_DISTANCE_FACTOR);
    const zIndexCurrent = zIndex ? zIndex + 1 : 200

    return (
        <div className="map-orbit-ring-container" style={{
            left: parentCoordinates?.x || 0,
            top: parentCoordinates?.y || 0,
        }}>
            <div className="map-orbit-ring" style={{
                height: location.distance * MAP_DISTANCE_FACTOR * 2,
                width: location.distance * MAP_DISTANCE_FACTOR * 2,
                //borderColor: location.color,
                zIndex: zIndexCurrent
            }} />
            {location.children?.slice(0).reverse().map((child) => {
                return (
                    <SystemMapOrbit 
                        location={child} 
                        parent={parent}
                        parentCoordinates={objectPoint}
                        zIndex={zIndexCurrent}
                    />
                )
            })}
        </div>
    )
}

// Generates each individual location.
const SystemMapLocation = ({
    location,
    parent,
    parentCoordinates
}: {
    location: LocationNode
    parent?: LocationNode
    parentCoordinates?: {
        x: number,
        y: number
    }
}) => {
    const objectPoint = findNewPoint(0, 0, location.startingAngle, location.distance * MAP_DISTANCE_FACTOR);
    const radius = location.radius ? location.radius * MAP_SCALE_FACTOR * 2.2 : 5
    const color = location.color ? increaseBrightness(location.color, 20) : MAP_DEFAULT_COLOR

    return (
        <>
            <div className="map-location-container" style={{
                left: objectPoint.x,
                top: objectPoint.y,
            }}>
                <div className="map-location" style={{
                    height: radius,
                    width: radius,
                    backgroundColor: color
                }} />
                {location.children?.map((child) => {
                    return (
                        <SystemMapLocation 
                            location={child} 
                            parent={parent}
                            parentCoordinates={objectPoint}
                        />
                    )
                })}
            </div>
            
        </>
    )
}
 
export default SystemMapReact;
