import {
  MAP_DISTANCE_FACTOR,
  MAP_SCALE_FACTOR,
  MAP_DEFAULT_COLOR,
} from "@/components/special/SystemMap/data/constants";
import { locationsData } from "@/components/special/SystemMap/data/locationsData";
import {
  LocationNode,
  LocationType,
} from "@/components/special/SystemMap/types";
import {
  findNewPoint,
  increaseBrightness,
} from "@/components/special/SystemMap/WorldGenerationHelpers";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchContentRef,
  useTransformEffect,
  ReactZoomPanPinchState,
} from "react-zoom-pan-pinch";
import "./SystemMap.scss";

const MAP_MIN_SCALE = 0.7;
const MAP_MAX_SCALE = 12;
const MAP_SCALE_STEP = 0.5;

const SystemMapReact = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchContentRef | null>(
    null
  );
  const [scale, setScale] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<LocationNode | null>(
    null
  );

  // TODO: Unique bounds on mobile scale devices. Desktop should be more limited.

  const updateScaleFromExternalInput = (newScale: number) => {
    if (!transformComponentRef.current) return;
    const { zoomIn, zoomOut } = transformComponentRef.current;

    const targetScale = newScale;
    const factor = Math.log(targetScale / scale) / (1/(MAP_MAX_SCALE));
    if (targetScale > scale) {
      zoomIn(factor, 0);
    } else {
      zoomOut(-factor, 0);
    }
    setScale(targetScale);
  };

  const updateScale = (e) => {
    updateScaleFromExternalInput(parseFloat(e.target.value));
  };
  const reset = () => {
    if (selectedLocation) {
      transformComponentRef.current?.zoomToElement(selectedLocation.name, 1, 500);
    } else {
      transformComponentRef.current?.zoomToElement("Sol", 1, 500);
    }
    
    setSelectedLocation(null)
  }

  return (
    <TransformWrapper
      ref={transformComponentRef}
      initialScale={scale}
      initialPositionX={0}
      initialPositionY={0}
      minScale={MAP_MIN_SCALE}
      maxScale={MAP_MAX_SCALE}
      smooth={false}
      centerOnInit
      wheel={{
        //step: MAP_SCALE_STEP,
        //smoothStep:0.005,
        
      }}
      onZoom={(e) => {
        setScale(e.state.scale);
      }}
      onZoomStop={(e) => {
        setScale(e.state.scale);
      }}
      onTransformed={(e) => {
        setScale(e.state.scale);
      }}
    >
      {(transform: ReactZoomPanPinchContentRef) => {
        return (
          <>
            <div className="controls-test">
              <input
                type="range"
                value={scale}
                min={MAP_MIN_SCALE}
                max={MAP_MAX_SCALE}
                step={MAP_SCALE_STEP}
                style={{
                  position: "absolute",
                  zIndex: "900",
                }}
                onChange={updateScale}
              />
              <button
                onClick={(e) => {
                  updateScaleFromExternalInput(1);
                }}
              >
                level 1
              </button>
              <button
                onClick={(e) => {
                  updateScaleFromExternalInput(5);
                }}
              >
                level 2
              </button>
              <button
                onClick={(e) => {
                  reset()
                }}
              >
                reset
              </button>
              <p>{selectedLocation?.name}</p>
              <p>{selectedLocation?.flavorText}</p>
              <p>{selectedLocation?.description}</p>
            </div>
            <div onContextMenu={(e) => { 
              e.preventDefault();

              //updateScaleFromExternalInput(1)
              reset()
              //console.log("context menu!") 
            }}>
              <SystemMapTransformContainer
                transform={transform}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}

              />
            </div>
          </>
        );
      }}
    </TransformWrapper>
  );
};

const SystemMapTransformContainer = ({
  transform,
  selectedLocation,
  setSelectedLocation,
}: {
  transform: ReactZoomPanPinchContentRef;
  selectedLocation: LocationNode | null;
  setSelectedLocation: Dispatch<SetStateAction<LocationNode | null>>;
}) => {
  const [zoom, setZoom] = useState<number>(1)
  const [posX, setPosX] = useState<number>(0)
  const [posY, setPosY] = useState<number>(0)

  useTransformEffect(({ state, instance }) => {
    setZoom(state.scale)
    setPosX(state.positionX)
    setPosY(state.positionY)
  });

  const zoomExponential = zoom * zoom;
  const zoomMultiplier = zoomExponential * 0.005;

  const rescale = 0.8 / zoom; // remains consistent across all zoom levels
  const growingRescale = rescale + zoomMultiplier; // grows as you zoom in

  const opacityStepOne = MAP_MAX_SCALE - 4 - zoom
  const opacityStepTwo = opacityStepOne <= 1 ? 1 : (1 / opacityStepOne)
  const fadedOpacity = 1 - opacityStepTwo
  const increasingOpacity = opacityStepTwo

  return (
    <TransformComponent wrapperClass="sunset-map-dynamic" contentClass="sunset-map-dynamic-content">
      <div className="sunset-map-bounding-block"></div>
      <div className="sunset-map-large-glowing-background"></div>
      <div className="sunset-map-large-outer-fade-background"></div>
      <div className="sunset-map-glowing-sun"></div>

      <SystemGrid posX={posX} posY={posY} rescale={rescale} fadedOpacity={increasingOpacity} />

      <div className="sunset-map-inner-container" >
        <SystemMapLocation
          location={locationsData}
          zoom={zoom}
          isRootElement
          rescale={rescale}
          growingRescale={growingRescale}
          setSelectedLocation={setSelectedLocation}
          fadedOpacity={fadedOpacity}
          transform={transform}
        />
      </div>
    </TransformComponent>
  );
};

const SystemGrid = ({ posX, posY, rescale, fadedOpacity }) => {
  return (
    <div className="sunset-map-grid-container" style={{
      //marginLeft: -(posX * rescale / 5),
      //marginTop: -(posY * rescale / 5)
      opacity: fadedOpacity
    }}>
      <div className="sunset-map-grid"></div>
    </div>
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
  rescale,
  growingRescale,
  setSelectedLocation,
  fadedOpacity,
  transform
}: {
  location: LocationNode
  parent?: LocationNode
  parentCoordinates?: {
    x: number
    y: number
  }
  zIndex?: number
  isRootElement?: boolean
  zoom: number
  rescale: number
  growingRescale: number
  setSelectedLocation: Dispatch<SetStateAction<LocationNode | null>>
  fadedOpacity: number
  transform: ReactZoomPanPinchContentRef;
}) => {
  const someRef = useRef(null);
  const isVisible = useIsVisible(someRef);

  const objectPoint = findNewPoint(
    0,
    0,
    location.startingAngle,
    location.distance * MAP_DISTANCE_FACTOR
  );
  const radius = location.radius ? location.radius * MAP_SCALE_FACTOR * 2.2 : 0;
  const color = location.color
    ? increaseBrightness(location.color, 20)
    : MAP_DEFAULT_COLOR;

  const isZoomLevel2 = zoom > 4;

  // for rings
  const zIndexCurrent = zIndex ? zIndex + 1 : 200;

  const isWorld =
    location.type === LocationType.Planet ||
    location.type === LocationType.Moon ||
    location.type === LocationType.Sun;
  const isSun = location.type === LocationType.Sun;
  const isSite = location.type === LocationType.Site;
  const isBelt = location.type === LocationType.AsteroidBelt;

  return (
    <>
      {isWorld && (
        <div
          className="map-orbit-ring"
          style={{
            height: location.distance * MAP_DISTANCE_FACTOR * 2,
            width: location.distance * MAP_DISTANCE_FACTOR * 2,
            zIndex: zIndexCurrent,
            borderWidth: `${rescale * 0.5}px`,
            //opacity: fadedOpacity
          }}
        />
      )}
      {location.type === LocationType.AsteroidBelt && (
        <div
          className="map-asteroid-belt-container"
          style={{
            height: location.distance * MAP_DISTANCE_FACTOR * 2 - 25,
            width: location.distance * MAP_DISTANCE_FACTOR * 2 - 25,
            zIndex: zIndexCurrent
          }}
        >
          <div
            className="map-asteroid-belt"
            style={{
              borderWidth: `${radius}px`,
              backgroundSize: `${growingRescale * 100}px`
            }}
          >
            <div
              className="map-asteroid-belt-cover"
              style={{
                top: `${radius}px`,
                left: `${radius}px`,
                right: `${radius}px`,
                bottom: `${radius}px`,
              }}
            ></div>
          </div>
          {isBelt && (
          <div
            className="map-asteroid-belt-name"
            id={location.name}
            style={{
              transform: `scale(${rescale})`,
              left: `calc(100% + ${rescale * 90 - 80}px)`
            }}
          >
            <h2 className="name">{location.name}</h2>
          </div>
        )}
        </div>
      )}
      <div
        className="map-location-container"
        ref={someRef}
        style={{
          left: isRootElement ? "50%" : objectPoint.x,
          top: isRootElement ? "50%" : objectPoint.y,
        }}
      >
        <div className="zoom-to-marker" id={location.name}></div>
        { isVisible && (<>
          
          <div style={{
              transform: `scale(${rescale})`
            }}
            className="selection-button-container">
            <button 
              className="selection-button"
              style={{
                height: radius + 22,
                width: radius + 22,
              }}
              onClick={() => {
                setSelectedLocation(location)
                transform.zoomToElement(location.name);
              }}></button>
          </div>
          
          {isWorld && (
            <div
              className="map-world"
              style={{
                transform: `scale(${rescale})`,
              }}
            >
              <div
                className="map-world-circle map-singular-location"
                onClick={() => {
                  setSelectedLocation(location)
                  transform.zoomToElement(location.name);
                }}
                style={{
                  height: radius,
                  width: radius,
                  //border: location.isImportant ? "2px solid" : "none",
                  borderColor: location.colorSecondary ? location.colorSecondary : color,
                  //borderImage: location.colorSecondary ? `linear-gradient(to bottom, ${location.colorSecondary} 0%, ${location.color} 100%)` : undefined
                }}
              >
                {isSun &&
                  <div className="inner-sun-border" style={{
                    height: radius + 6,
                    width: radius + 6,
                    borderColor: color,
                    display: "none"
                  }}></div>
                }
                <div className="inner-circle"
                  style={{
                    height: radius - 5,
                    width: radius - 5,
                    backgroundColor: color,
                  }}
                >
                  
                </div>
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
                {isZoomLevel2 && (
                  <>
                    <p className="type-text" style={{
                      color: color
                    }}>{location.typeText}</p>
                    <p className="flavor-text">{location.flavorText}</p>
                  </>
                )}
              </div>
            </div>
          )}
          {isSite && (
            <div
              className="map-site"
              
              style={{
                transform: `scale(${rescale})`,
                display: isZoomLevel2 ? "block" : "none",
              }}
            >
              <h2 className="name"
                style={{
                  bottom: `${radius * 0.5 + 10}px`,
                }}
              >{location.name}</h2>
              <div
                className="map-site-circle map-singular-location"
                onClick={() => {
                  setSelectedLocation(location)
                  transform.zoomToElement(location.name);
                }}
              ></div>
              <div
                className="text-under"
                style={{
                  top: `${radius * 0.5 + 10}px`,
                  //opacity: isZoomLevel2 ? "1" : "0",
                }}
              >
                <p className="type-text">{location.typeText}</p>
                <p className="flavor-text">{location.flavorText}</p>
              </div>
            </div>
          )}

        </>)}

        {location.children
          ?.slice(0)
          .reverse()
          .map((child) => {
            return (
              <SystemMapLocation
                key={child.name}
                location={child}
                parent={parent}
                parentCoordinates={objectPoint}
                zIndex={zIndexCurrent}
                zoom={zoom}
                rescale={rescale}
                growingRescale={growingRescale}
                setSelectedLocation={setSelectedLocation}
                fadedOpacity={fadedOpacity}
                transform={transform}
              />
            );
          })}
      </div>
    </>
  );
};



export default SystemMapReact;
