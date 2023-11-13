
import { MAP_DISTANCE_FACTOR, MAP_DEFAULT_COLOR, MAP_BACKGROUND_COLOR, MAP_SCALE_FACTOR } from "@/components/special/MapScreen/BaseMap/data/constants";
import { LocationNode, LocationType } from "@/components/special/MapScreen/BaseMap/data/types";
import * as d3 from "d3";
import { convertTreeToArray, findNewPoint, hashCode, increaseBrightness } from "./WorldGenerationHelpers";

type D3Container = d3.Selection<SVGGElement, unknown, null, undefined>; 
interface ObjectInfo {
    x: number, 
    y: number, 
    firstMoon: string, 
    lastMoonDistance: number, 
    color: string,
    zoomLevel?: number
}

let itemGroups: D3Container[] = []
let objectInfo: Record<string, ObjectInfo> = {}

// Takes set of data. Generates an orbiting system, recursively.
export const generateWorlds = (container: D3Container, data: LocationNode) => {

    //let textContainer;

    // Convert data tree to array of Breadth First traversed locations (for correct rendering order).
    const worldsInOrder = convertTreeToArray(data);
    generateInfo(worldsInOrder);

    // ORBITS
    // Generate orbits and underlying shapes.
    const orbitsContainer = container.append("g").attr("class", "orbits-container");
    generateOrbitPaths(worldsInOrder, orbitsContainer);

    // Generate HUGE OVERLAY GRADIENT CIRCLE at center
    container.append("circle")
        .attr("r", 1200 * MAP_DISTANCE_FACTOR)
        .attr("fill", "url('#huge-sun-overlay-gradient')")
        .attr("filter", "url('#huge-sun-overlay-filter')")
        .attr("class", "huge-sun-overlay");

    // CONTENT
    // Generate the worlds, images, text.
    const worldsContainer = container.append("g").attr("class", "worlds-container");
    generateContent(worldsInOrder, worldsContainer);
    //generateCrafts(worldsInOrder, worldsContainer)

    // Generate SMALL HEAT GRADIENT CIRCLE around sun
    container.append("circle")
        .attr("r", 100 * MAP_DISTANCE_FACTOR)
        .attr("fill", "url('#sun-heat-gradient')")
        .attr("filter", "url('#sun-heat-filter')")
        .attr("class", "sun-heat-overlay");

    return { itemGroups, objectInfo }
}

const generateInfo = (objects: LocationNode[]) => {
    objects.forEach((object) => {
        // Get parent, if it exists.
        const parentName = object.parent || ''
        const parent = objectInfo[parentName]
        const parentX = parent?.x || 0
        const parentY = parent?.y || 0

        // Save some data.
        const objectColor = object.color ? increaseBrightness(object.color, 20) : MAP_DEFAULT_COLOR;
        const objectPoint = findNewPoint(parentX, parentY, object.startingAngle, object.distance * MAP_DISTANCE_FACTOR);

        // Save your point information.
        objectInfo[object.name] = {
            x: objectPoint.x || 0,
            y: objectPoint.y || 0,
            zoomLevel: object.zoomLevel ? object.zoomLevel : 0,
            firstMoon: object.children ? object.children[0]?.name : "",
            lastMoonDistance: object.children ? object.children[object.children.length - 1]?.distance : 0,
            color: objectColor
        }
    })
}

const generateOrbitPaths = (objects: LocationNode[], container: D3Container) => {
    

    objects.forEach((object) => {
        const parentName = object.parent || ''
        const parent = objectInfo[parentName]
        const parentX = parent?.x || 0
        const parentY = parent?.y || 0

        if (object.type === LocationType.AsteroidBelt) {
            // Generate DOTTED LINE for ASTEROIDS
            container.append("circle")
                .attr("r", object.distance * MAP_DISTANCE_FACTOR)
                .attr("stroke", MAP_DEFAULT_COLOR)
                .attr("stroke-width", "30px")
                .attr("stroke-dasharray", "3 3")
                .attr("fill", "transparent")
                .attr("class", "orbit asteroid-belt spin")
                .attr("data-name", object.name);
        } 
        else {
            // If this is the first moon, generate a blob.
            if (object.name === parent?.firstMoon) {
                const lastMoonDistance = parent.lastMoonDistance
                container.append("circle")
                    .attr("cx", parentX)
                    .attr("cy", parentY)
                    .attr("r", lastMoonDistance * MAP_DISTANCE_FACTOR)
                    .attr("fill", MAP_BACKGROUND_COLOR);
            }

            // Generate the orbit path for this object.
            container.append("circle")
                .attr("cx", parentX)
                .attr("cy", parentY)
                .attr("r", object.distance * MAP_DISTANCE_FACTOR)
                .attr("stroke", MAP_DEFAULT_COLOR)
                .attr("stroke-width", "2px")
                //.attr("stroke-dasharray", "4 5")
                .attr("stroke-linecap", "round")
                .attr("class", "orbit planet-path")
                .attr("data-name", object.name);
        }
    })

    
}

const generateContent = (objects: LocationNode[], container: D3Container) => {
    objects.forEach((object) => {
        const parentName = object.parent || ''
        const parent = objectInfo[parentName]
        const info = objectInfo[object.name]

        const worldItemGroup = container
            .append("g")
            .attr("class", `world-group ${object.zoomLevel === 2 ? "zoom-level-2" : ""}`)
            .attr("data-name", object.name); // Positioned at coordinates

        if (object.type === LocationType.AsteroidBelt) {
            const parentX = parent?.x || 0
            const parentY = parent?.y || 0

            // TODO: Generate text tag for asteroid belt above
        } 
        else {
            if (!object.radius) return;

            // Generate NAME
            worldItemGroup.append("text")
                .attr("x", 0)
                .attr("y", object.radius * MAP_SCALE_FACTOR + 15)
                .attr("dy", ".35em")
                .attr("text-anchor", "middle")
                .attr("class", "name planet-name")
                .attr("font-size", "14px")
                .attr("fill", info.color)
                .text(object.name);

            // Generate WORLD
            worldItemGroup.append("circle")
                .attr("r", object.radius * MAP_SCALE_FACTOR)
                .attr("stroke", info.color)
                .attr("stroke-width", "2")
                .attr("fill", info.color)
                .attr("class", `planet ${object.classes ? object.classes : ""}`);
        }        

        if (object.crafts && object.crafts.length) {
            object.crafts.forEach((craft) => {
                const craftPoint = findNewPoint(0, 0, craft.startingAngle, craft.distance * MAP_DISTANCE_FACTOR);
                const craftItemGroupMaxFar = worldItemGroup
                    .append("g")
                    .attr("class", `craft-group-far`)
                const craftItemGroupDetailed = worldItemGroup
                    .append("g")
                    .attr("class", `craft-group ${craft.zoomLevel === 2 ? "zoom-level-2" : ""}`)

                // Generate NAME
                craftItemGroupDetailed.append("text")
                    .attr("x", 0)
                    .attr("y", -1 * MAP_SCALE_FACTOR - 15)
                    .attr("dy", ".25em")
                    .attr("text-anchor", "middle")
                    .attr("class", "name craft-name")
                    .attr("font-size", "9px")
                    .attr("fill", "white")
                    .text(craft.name);

                /*
                RIGHT LEANING TEXT
                craftItemGroup.append("text")
                    .attr("x", 10)
                    .attr("y", -2)
                    .attr("dy", ".25em")
                    .attr("text-anchor", "left")
                    .attr("dominant-baseline", "middle")
                    .attr("class", "craft-name")
                    .attr("fill", "white")
                    .text(craft.name);*/

                // Generate TINY CIRCLE WHEN FAR AWAY
                craftItemGroupMaxFar.append("circle")
                    .attr("cx", 0)
                    .attr("cy", 0)
                    .attr("r", 1 * MAP_SCALE_FACTOR)
                    .attr("fill", "white")
                    .attr("class", "craft");

                const translate = "translate(" + (craftPoint.x || 0) + "," + (craftPoint.y || 0) + ")"
                craftItemGroupMaxFar.attr("transform", translate);
                craftItemGroupDetailed.attr("transform", translate);
            })
        }

        // Send item group to coordinates
        if (object.type === LocationType.AsteroidBelt) {
            worldItemGroup.attr("transform", "translate(0, 0)");
        } else {
            worldItemGroup.attr("transform", "translate(" + (info.x || 0) + "," + (info.y || 0) + ")");
        }
    
        itemGroups.push(worldItemGroup)
    })
}