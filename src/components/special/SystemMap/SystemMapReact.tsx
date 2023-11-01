import { MAP_DISTANCE_FACTOR, MAP_SCALE_FACTOR } from '@/components/special/SystemMap/data/constants';
import { locationsData } from '@/components/special/SystemMap/data/locationsData';
import { LocationNode } from '@/components/special/SystemMap/types';
import { findNewPoint } from '@/components/special/SystemMap/WorldGenerationHelpers';
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

const SystemMapOrbit = ({
    location
}: {
    location: LocationNode
}) => {
    return (
        <></>
    )
}

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
    const radius = location.radius ? location.radius * MAP_SCALE_FACTOR * 1.4 : 5

    return (
        <>
            {parentCoordinates &&
                <div className="map-orbit-ring" style={{
                    left: parentCoordinates.x,
                    top: parentCoordinates.y,
                    height: location.distance * MAP_DISTANCE_FACTOR,
                    width: location.distance * MAP_DISTANCE_FACTOR,
                    borderColor: location.color
                }}></div>
            }
            <div className="map-location" style={{
                left: objectPoint.x,
                top: objectPoint.y,
                height: radius,
                width: radius,
                backgroundColor: location.color
            }}>
                
                
            </div>
            {location.children?.map((child) => {
                    return (
                        <SystemMapLocation 
                            location={child} 
                            parent={parent}
                            parentCoordinates={objectPoint}
                        />
                    )
                })}
        </>
    )
}
 
export default SystemMapReact;
