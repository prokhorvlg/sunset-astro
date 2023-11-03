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
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchContentRef,
  useTransformEffect,
} from "react-zoom-pan-pinch";
import "./SystemMap.scss";

const MAP_MIN_SCALE = 0.9;
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
    const factor = Math.log(targetScale / scale) * 5;
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
        step: MAP_SCALE_STEP,
        //smoothStep:0.005
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
              <p>{selectedLocation?.name}</p>
              <p>{selectedLocation?.flavorText}</p>
              <p>{selectedLocation?.description}</p>
            </div>
            <SystemMapTransformContainer
              transform={transform}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
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
  const [zoom, setZoom] = useState<number>(1);

  useEffect(() => {
    if (!selectedLocation) return;
    transform.zoomToElement(selectedLocation.name);
  }, [selectedLocation]);

  useTransformEffect(({ state, instance }) => {
    setZoom(state.scale);
  });

  const zoomExponential = zoom * zoom;
  const zoomMultiplier = zoomExponential * 0.005;

  const rescale = 0.8 / zoom; // remains consistent across all zoom levels
  const growingRescale = rescale + zoomMultiplier; // grows as you zoom in

  return (
    <TransformComponent wrapperClass="sunset-map-dynamic">
      <div className="sunset-map-bounding-block"></div>
      <div className="sunset-map-large-glowing-background excluded"></div>
      <div className="sunset-map-glowing-sun"></div>
      <div className="sunset-map-inner-container">
        <SystemMapLocation
          location={locationsData}
          zoom={zoom}
          isRootElement
          rescale={rescale}
          growingRescale={growingRescale}
          setSelectedLocation={setSelectedLocation}
        />
      </div>
    </TransformComponent>
  );
};

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
}: {
  location: LocationNode;
  parent?: LocationNode;
  parentCoordinates?: {
    x: number;
    y: number;
  };
  zIndex?: number;
  isRootElement?: boolean;
  zoom: number;
  rescale: number;
  growingRescale: number;
  setSelectedLocation: Dispatch<SetStateAction<LocationNode | null>>;
}) => {
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

  const isZoomLevel2 = zoom > 5;

  // for rings
  const zIndexCurrent = zIndex ? zIndex + 1 : 200;

  const isWorld =
    location.type === LocationType.Planet ||
    location.type === LocationType.Moon ||
    location.type === LocationType.Sun;
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
          }}
        />
      )}
      {location.type === LocationType.AsteroidBelt && (
        <div
          className="map-asteroid-belt-container"
          style={{
            height: location.distance * MAP_DISTANCE_FACTOR * 2 - 25,
            width: location.distance * MAP_DISTANCE_FACTOR * 2 - 25,
            zIndex: zIndexCurrent,
          }}
        >
          <div
            className="map-asteroid-belt"
            style={{
              borderWidth: `${radius}px`,
              backgroundSize: `${growingRescale * 100}px`,
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
        </div>
      )}
      <div
        className="map-location-container"
        style={{
          left: isRootElement ? "50%" : objectPoint.x,
          top: isRootElement ? "50%" : objectPoint.y,
        }}
      >
        {isWorld && (
          <div
            className="map-world"
            id={location.name}
            style={{
              transform: `scale(${rescale})`,
            }}
          >
            <div
              className="map-world-circle map-singular-location"
              onClick={() => setSelectedLocation(location)}
              style={{
                height: radius,
                width: radius,
                backgroundColor: color,
              }}
            />
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
                  <p className="type-text">{location.typeText}</p>
                  <p className="flavor-text">{location.flavorText}</p>
                </>
              )}
            </div>
          </div>
        )}
        {isBelt && (
          <div
            className="map-world"
            id={location.name}
            style={{
              transform: `scale(${rescale})`,
            }}
          >
            <h2 className="name">{location.name}</h2>
            <div
              className="map-world-circle map-singular-location"
              onClick={() => setSelectedLocation(location)}
              style={{
                height: radius,
                width: radius,
                backgroundColor: color,
              }}
            />
            <div
              className="text-under"
              style={{
                top: `${radius * 0.5 + 5}px`,
                color: color,
              }}
            >
              {isZoomLevel2 && (
                <>
                  <p className="type-text">{location.typeText}</p>
                  <p className="flavor-text">{location.flavorText}</p>
                </>
              )}
            </div>
          </div>
        )}
        {isSite && (
          <div
            className="map-site"
            id={location.name}
            style={{
              transform: `scale(${rescale})`,
            }}
          >
            <h2 className="name"
              style={{
                bottom: `${radius * 0.5 + 10}px`,
                opacity: isZoomLevel2 ? "1" : "0",
              }}
            >{location.name}</h2>
            <div
              className="map-site-circle map-singular-location"
              onClick={() => setSelectedLocation(location)}
            ></div>
            <div
              className="text-under"
              style={{
                top: `${radius * 0.5 + 10}px`,
                opacity: isZoomLevel2 ? "1" : "0",
              }}
            >
              <p className="type-text">{location.typeText}</p>
              <p className="flavor-text">{location.flavorText}</p>
            </div>
          </div>
        )}

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
              />
            );
          })}
      </div>
    </>
  );
};



export default SystemMapReact;
