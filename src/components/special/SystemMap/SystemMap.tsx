import * as d3 from "d3";
import { DISTANCE_FACTOR, generateWorlds } from "./WorldGeneration";
import './SystemMap.scss'

const PAN_MULTIPLIER = 1300; 

const enum ObjectType {
    Sun,
    Planet,
    Moon,
    AsteroidBelt
}

export interface Node {
    name: string, 
    type: ObjectType, 
    distance: number, 
    radius: number, 
    speed?: number, 
    startingAngle: number, 
    color?: string, 
    crafts?: {
        name: string, 
        distance: number, 
        startingAngle: number, 
        alignment: string
    }[], 
    children: Node[], 
    parent?: string
}

const enum LocationType {

}

const enum LocationTypeOnMap {
    Sun,
    Planet,
    Moon,
    AsteroidBelt,
    Satellite
}
interface Location {
    name: string,
    type: LocationType,
    color: string
    children: (LocationOnMap | Location)[]
}

interface LocationOnMap extends Location {
    typeOnMap: LocationTypeOnMap,
    distance: number,
    radius: number
    speed: number
    startingAngle: number
    alignment: string // text alignment
    crafts: (LocationOnMap)[]
}

// Data for generation of objects
const data: Node = {
    name: "Sol",
    type: ObjectType.Sun,
    distance: 0,
    radius: 35,
    speed: 0,
    startingAngle: 0,
    color: "#ffca2a",
    crafts: [
        {
            name: "Interbeacon statite",
            distance: 75,
            startingAngle: 270,
            alignment: "right"
        }
    ],
    children: [
        {
            name: "Mercury",
            type: ObjectType.Planet,
            color: "#f47f00",
            distance: 125,
            radius: 8,
            speed: -1.60,
            startingAngle: 35,
            crafts: [
                {
                    name: "Odyssey United Orbital",
                    distance: 22,
                    startingAngle: 25,
                    alignment: "right"
                }
            ],
            children: []
        },
        {
            name: "Venus",
            type: ObjectType.Planet,
            color: "#b8ff30",
            distance: 165,
            radius: 15,
            speed: -1.17,
            startingAngle: 195,
            children: [
                {
                    name: "Klios",
                    type: ObjectType.Moon,
                    color: "#152bf7",
                    distance: 66,
                    radius: 5,
                    speed: -3.2,
                    startingAngle: 320,
                    children: []
                }
            ]
        },
        {
            name: "Earth",
            type: ObjectType.Planet,
            color: "#0dcfff",
            distance: 205,
            radius: 14,
            speed: -1.17,
            startingAngle: 280,
            children: [
                {
                    name: "Luna",
                    type: ObjectType.Moon,
                    distance: 66,
                    radius: 5,
                    speed: -3.2,
                    startingAngle: 119,
                    children: []
                }
            ]
        },
        {
            name: "Mars",
            type: ObjectType.Planet,
            color: "#ff4817",
            distance: 245,
            radius: 11,
            speed: -1.17,
            startingAngle: 64,
            children: []
        },
        {
            name: "Asteroid Belt",
            type: ObjectType.AsteroidBelt,
            distance: 295,
            radius: 11,
            speed: -1.17,
            startingAngle: 44,
            children: []
        },
        {
            name: "Jupiter",
            type: ObjectType.Planet,
            color: "#ffe4b6",
            distance: 355,
            radius: 29,
            speed: -1.17,
            startingAngle: 145,
            children: [
                {
                    name: "Io",
                    type: ObjectType.Moon,
                    color: "#ff8b19",
                    distance: 86,
                    radius: 4,
                    speed: -3.2,
                    startingAngle: 22,
                    children: []
                },
                {
                    name: "Europa",
                    type: ObjectType.Moon,
                    color: "#1cffd7",
                    distance: 115,
                    radius: 5,
                    speed: -3.2,
                    startingAngle: 259,
                    children: []
                },
                {
                    name: "Ganymede",
                    type: ObjectType.Moon,
                    distance: 145,
                    radius: 6,
                    speed: -3.2,
                    startingAngle: 155,
                    children: []
                },
                {
                    name: "Callisto",
                    type: ObjectType.Moon,
                    distance: 175,
                    radius: 5,
                    speed: -3.2,
                    startingAngle: 43,
                    children: []
                }
            ]
        },
        {
            name: "Saturn",
            type: ObjectType.Planet,
            color: "#ffc698",
            distance: 435,
            radius: 26,
            speed: -1.17,
            startingAngle: 310,
            children: [
                {
                    name: "Titan",
                    type: ObjectType.Moon,
                    color: "#f78a15",
                    distance: 105,
                    radius: 5,
                    speed: -3.2,
                    startingAngle: 73,
                    children: []
                }
            ]
        },
        {
            name: "Uranus",
            type: ObjectType.Planet,
            color: "#38f3ff",
            distance: 545,
            radius: 19,
            speed: -1.17,
            startingAngle: 340,
            children: []
        },
        {
            name: "Neptune",
            type: ObjectType.Planet,
            color: "#087bdd",
            distance: 655,
            radius: 18,
            speed: -1.17,
            startingAngle: 224,
            children: []
        },
        {
            name: "Pluto",
            type: ObjectType.Planet,
            distance: 725,
            radius: 5,
            speed: -1.17,
            startingAngle: 11,
            children: [
                {
                    name: "Charon",
                    type: ObjectType.Moon,
                    distance: 65,
                    radius: 3,
                    speed: -3.2,
                    startingAngle: 165,
                    children: []
                }
            ]
        },
        {
            name: "Kuiper Belt",
            type: ObjectType.AsteroidBelt,
            distance: 955,
            radius: 5,
            speed: -1.17,
            startingAngle: 0,
            children: []
        },
        {
            name: "Nibiru",
            type: ObjectType.Planet,
            color: "#ff1bc1",
            distance: 1205,
            radius: 36,
            speed: -1.17,
            startingAngle: 32,
            children: [
                {
                    name: "Marduk",
                    type: ObjectType.Moon,
                    color: "#b003c5",
                    distance: 135,
                    radius: 4,
                    speed: -3.2,
                    startingAngle: 73,
                    children: []
                }
            ]
        },
    ]
}

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
const handleMap = (element: any) => {
    // const w = window.innerWidth - 500;
    // const h = window.innerHeight - 100;

    // Generate SVG element
    const svgEl = d3.select(element);
    
    const w = svgEl.node().getBoundingClientRect().width; 
    const h = svgEl.node().getBoundingClientRect().height; 

    svgEl.selectAll("*").remove();
    const svg = svgEl
        .attr("width", w)
        .attr("height", h);

    // GENERATE COSMIC OBJECTS
    // Generate container for all cosmic objects
    const container = svgEl.append("g")
        .attr("id", "orbit_container");
    
    const { itemGroups, objectInfo } = generateWorlds(container, data);

    // Rotation about orbit
    /*setInterval(function() {
    //setTimeout(function() {
        var delta = (Date.now() - t0);
        svg.selectAll(".planet_cluster, .moon_cluster").attr("transform", function(d) {
            return "rotate(" + (d.startingAngle + (delta * (d.speed/100))) + ")";
        });
    }, 40);*/

    // Enable zoom component
    const panLimitX = PAN_MULTIPLIER * DISTANCE_FACTOR;
    const panLimitY = panLimitX * 0.65;
    const zoom = d3.zoom()
        .extent([[0, 0], [w, h]])
        .scaleExtent([1, 10])
        .translateExtent([[-panLimitX, -panLimitY], [panLimitX, panLimitY]])
        .on("zoom", zoomed)
    svg.call(zoom);

    // Initial zoom and scale
    const initialTransform = d3.zoomIdentity
        .translate(w/2, h/2)
        .scale(1);
    svg.call(zoom.transform, initialTransform);
    
    function zoomed(event) {
        const transform = event.transform
        container.attr("transform", transform);
        // const zoom = 1 + (transform.k * 0.3)
        // const itemScale = ( 1 / zoom ) * 1.3
        // itemGroups.forEach(itemGroup => {
        //     const name = itemGroup?.attr("data-name")
        //     const storeEntry = objectInfo[name]
        //     itemGroup.attr("transform", "translate(" + ( storeEntry?.x || 0) + ", " + (storeEntry?.y || 0) + ") scale(" + itemScale + ")")
 
        // });
            
    }
}

const SystemMap = () => {
    return <div className='sunset-map-container'>
        <div className='sunset-map-div'>
            <svg xmlns="http://www.w3.org/2000/svg" ref={handleMap} className='sunset-map-svg'></svg>
        </div>
    </div>
};
 
export default SystemMap;
