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
            //limitToBounds={false}
            smooth={false}
            centerOnInit
            wheel={{
                smoothStep: 0.003
            }}
            // alignmentAnimation={{
            //     sizeX: 10000,
            //     sizeY: 10000
            // }}
            // minPositionX={90000}
            // maxPositionX={90000}
            // minPositionY={90000}
            // maxPositionY={90000}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
                {/* tools go here */}
                <TransformComponent wrapperClass="sunset-map-dynamic">
                    <div className="sunset-map-bounding-block"></div>
                    <div className="sunset-map-inner-container">
                        <SystemMapLocation location={locationsData} isRootElement />
                    </div>
                </TransformComponent>
            </>
        )}
        </TransformWrapper>
    )
};

// Generates each individual location.
const SystemMapLocation = ({
    location,
    parent,
    parentCoordinates,
    zIndex,
    isRootElement
}: {
    location: LocationNode
    parent?: LocationNode
    parentCoordinates?: {
        x: number,
        y: number
    },
    zIndex?: number
    isRootElement?: boolean
}) => {
    const objectPoint = findNewPoint(0, 0, location.startingAngle, location.distance * MAP_DISTANCE_FACTOR);
    const radius = location.radius ? location.radius * MAP_SCALE_FACTOR * 2.2 : 5
    const color = location.color ? increaseBrightness(location.color, 20) : MAP_DEFAULT_COLOR

    // for rings
    const zIndexCurrent = zIndex ? zIndex + 1 : 200

    return (
        <>
            <div className="map-orbit-ring" style={{
                height: location.distance * MAP_DISTANCE_FACTOR * 2,
                width: location.distance * MAP_DISTANCE_FACTOR * 2,
                zIndex: zIndexCurrent
            }} />
            <div className="map-location-container" style={{
                //position:  ? "relative" : "absolute",
                left: isRootElement ?  "50%" : objectPoint.x,
                top: isRootElement ? "50%" : objectPoint.y,
            }}>
                <div className="map-location" style={{
                    height: radius,
                    width: radius,
                    backgroundColor: color
                }} />
                
                {location.children?.slice(0).reverse().map((child) => {
                    return (
                        <SystemMapLocation 
                            location={child} 
                            parent={parent}
                            parentCoordinates={objectPoint}
                            zIndex={zIndexCurrent}
                        />
                    )
                })}
            </div>
            
        </>
    )
}
 
export default SystemMapReact;
