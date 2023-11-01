import * as d3 from "d3";
import './SystemMap.scss'
import { useState } from "react";
import { locationsData } from "@/components/special/SystemMap/data/locationsData";
import { generateWorlds } from "@/components/special/SystemMap/WorldGeneration";
import { MAP_PAN_MULTIPLIER, MAP_DISTANCE_FACTOR, MAP_ZOOM_DETAIL_LEVEL_2 } from "@/components/special/SystemMap/data/constants";


//bugs
//1) pan limit broken when shrunk
//2) size messed uop when refreshed small



/*const generateAsteroidBelt = (worldGroup, worldData, coordsX = 0, coordsY = 0, parentX = 0, parentY = 0) => {
    const worldOrbitGroup = worldGroup.append("g"); // Positioned at center (orbit line)

    // Generate ORBIT PATH of BELT
    worldOrbitGroup.append("circle")
        .attr("cx", parentX)
        .attr("cy", parentY)
        .attr("r", worldData.distance * DISTANCE_FACTOR)
        //.attr("stroke-linecap", "round")
        //.attr("stroke-dasharray", "0,4")
        .attr("stroke-width", "58")
        .attr("class", "orbit-asteroid-belt");
}*/

// Maybe seclare element type


const SystemMap = () => {
    const [zoom, setZoom] = useState(null)

    const handleMap = (element: any) => {
        // const w = window.innerWidth - 500;
        // const h = window.innerHeight - 100;
    
        // Generate SVG element
        const svgEl = d3.select(element);
        
        const w = svgEl.node().getBoundingClientRect().width; 
        const h = svgEl.node().getBoundingClientRect().height; 
    
        //svgEl.selectAll("*").remove();
        const svg = svgEl
            //.attr("width", w)
            //.attr("height", h);
    
        // GENERATE COSMIC OBJECTS
        // Generate container for all cosmic objects
        const container = svgEl.append("g")
            .attr("id", "orbit_container");
        
        const { itemGroups, objectInfo } = generateWorlds(container, locationsData);
    
        // Enable zoom component
        const panLimitX = MAP_PAN_MULTIPLIER * MAP_DISTANCE_FACTOR;
        const panLimitY = panLimitX * 0.65;
        // TODO: scale extent lower bound 0.5 on small screens, and start more outzoomed
        const zoom = d3.zoom()
            .extent([[0, 0], [w, h]])
            .scaleExtent([0.9, 10])
            .translateExtent([[-panLimitX, -panLimitY], [panLimitX, panLimitY]])
            .on("zoom", (e) => handleZoom(e, container, itemGroups, objectInfo, svgEl))
        svg.call(zoom);
    
        // Initial zoom and scale
        const initialTransform = d3.zoomIdentity
            .translate(w/2, h/2)
            .scale(1);
        svg.call(zoom.transform, initialTransform);
    }

    const handleZoom = (event, container, itemGroups, objectInfo, svgEl) => {
        //console.log("event", event)
        const transform = event.transform
        const currentZoomScale = transform.k
        container.attr("transform", transform);

        const zoom = 1 + (transform.k * 0.3)
        const itemScale = ( 1 / zoom ) * 1.3

        itemGroups.forEach(itemGroup => {
            const name = itemGroup?.attr("data-name")
            const storeEntry = objectInfo[name]
            itemGroup.attr("transform", "translate(" + ( storeEntry?.x || 0) + ", " + (storeEntry?.y || 0) + ") scale(" + itemScale + ")")
            
            if (currentZoomScale > MAP_ZOOM_DETAIL_LEVEL_2) {
                svgEl.attr("data-zoom-level", 2)
            } else {
                svgEl.attr("data-zoom-level", 1)
            }
        });

        // Reduce line width of orbit paths on higher zoom scale
    }

    return <div className='sunset-map-container'>
        <button onClick={() => {
            console.log(zoom)
        }}>zoom level 2</button>
        <div className='sunset-map-div'>
            <svg xmlns="http://www.w3.org/2000/svg" ref={handleMap} className='sunset-map-svg'>
                <defs>
                    <radialGradient id="huge-sun-overlay-gradient">
                        <stop offset="5%" stop-color="rgba(255,173,67,0.9)" />
                        <stop offset="35%" stop-color="rgba(245,128,50,0.5)" />
                        <stop offset="65%" stop-color="rgba(133,25,11,0.4)" />
                        <stop offset="100%" stop-color="rgba(0,0,0,0)" />
                    </radialGradient>
                    <radialGradient id="sun-heat-gradient">
                        <stop offset="10%" stop-color="#ffc445" />
                        <stop offset="85%" stop-color="rgba(255,196,69,0)" />
                    </radialGradient>
                    <filter id="huge-sun-overlay-filter"
                        filterUnits="objectBoundingBox" 
                        primitiveUnits="userSpaceOnUse" 
                        color-interpolation-filters="sRGB"
                    >
                        <feComposite in="flood" in2="SourceAlpha" operator="atop" result="maskedflood"/>
                        <feBlend mode="overlay"in="SourceGraphic" in2="blur" result="blend"></feBlend>
                    </filter>
                    <filter id="sun-heat-filter"
                        filterUnits="objectBoundingBox" 
                        primitiveUnits="userSpaceOnUse" 
                        color-interpolation-filters="sRGB"
                    >
                        <feComposite in="flood" in2="SourceAlpha" operator="atop" result="maskedflood"/>
                        <feBlend mode="screen" in="SourceGraphic" in2="maskedflood" result="blend"></feBlend>
                    </filter>
                </defs>



            </svg>
        </div>
    </div>
};
 
export default SystemMap;
