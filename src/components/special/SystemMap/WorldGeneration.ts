import * as d3 from "d3";
import { convertTreeToArray, findNewPoint, hashCode, increaseBrightness } from "./WorldGenerationHelpers";
import { Node, ObjectType } from './SystemMap'

type D3Container = d3.Selection<SVGGElement, unknown, null, undefined>; 
interface ObjectInfo {
    x: number, 
    y: number, 
    firstMoon: string, 
    lastMoonDistance: number, 
    color: string,
    zoomLevel?: number
}

export const DISTANCE_FACTOR = 1.1;
export const SCALE_FACTOR = 1.8;
export const DEFAULT_COLOR = "#ffb64e";
export const BACKGROUND_COLOR = '#111'; 

let itemGroups: D3Container[] = []
let objectInfo: Record<string, ObjectInfo> = {}

// Takes set of data. Generates an orbiting system, recursively.
export const generateWorlds = (container: D3Container, data: Node) => {

    //let textContainer;

    // Convert data tree to array of Breadth First traversed locations (for correct rendering order).
    const worldsInOrder = convertTreeToArray(data);
    generateInfo(worldsInOrder);

    // ORBITS
    // Generate orbits and underlying shapes.
    const orbitsContainer = container.append("g").attr("class", "orbits-container");
    generateOrbitPaths(worldsInOrder, orbitsContainer);

    // CONTENT
    // Generate the worlds, images, text.
    const worldsContainer = container.append("g").attr("class", "worlds-container");
    generateContent(worldsInOrder, worldsContainer);
    //generateCrafts(worldsInOrder, worldsContainer)

    return { itemGroups, objectInfo }
}

const generateInfo = (objects: Node[]) => {
    objects.forEach((object) => {
        // Get parent, if it exists.
        const parentName = object.parent || ''
        const parent = objectInfo[parentName]
        const parentX = parent?.x || 0
        const parentY = parent?.y || 0

        // Save some data.
        const objectColor = object.color ? increaseBrightness(object.color, 40) : DEFAULT_COLOR;
        const objectPoint = findNewPoint(parentX, parentY, object.startingAngle, object.distance * DISTANCE_FACTOR);

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

const generateOrbitPaths = (objects: Node[], container: D3Container) => {
    objects.forEach((object) => {
        const parentName = object.parent || ''
        const parent = objectInfo[parentName]
        const parentX = parent?.x || 0
        const parentY = parent?.y || 0

        if (object.type === ObjectType.AsteroidBelt) {
            // Generate DOTTED LINE for ASTEROIDS
            container.append("circle")
                .attr("r", object.distance * DISTANCE_FACTOR)
                .attr("stroke", DEFAULT_COLOR)
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
                    .attr("r", lastMoonDistance * DISTANCE_FACTOR)
                    .attr("fill", "#111");
            }

            // Generate the orbit path for this object.
            container.append("circle")
                .attr("cx", parentX)
                .attr("cy", parentY)
                .attr("r", object.distance * DISTANCE_FACTOR)
                .attr("stroke", DEFAULT_COLOR)
                .attr("stroke-width", "2px")
                .attr("class", "orbit planet-path")
                .attr("data-name", object.name);
        }
    })
}

const generateContent = (objects: Node[], container: D3Container) => {
    objects.forEach((object) => {
        const parentName = object.parent || ''
        const parent = objectInfo[parentName]
        const info = objectInfo[object.name]

        const worldItemGroup = container
            .append("g")
            .attr("class", `world-group ${object.zoomLevel === 2 ? "zoom-level-2" : ""}`)
            .attr("data-name", object.name); // Positioned at coordinates

        if (object.type === ObjectType.AsteroidBelt) {
            const parentX = parent?.x || 0
            const parentY = parent?.y || 0

            // TODO: Generate text tag for asteroid belt above
        } 
        else {
            if (!object.radius) return;

            // Generate NAME
            worldItemGroup.append("text")
                .attr("x", 0)
                .attr("y", object.radius * SCALE_FACTOR + 15)
                .attr("dy", ".35em")
                .attr("text-anchor", "middle")
                .attr("class", "name planet-name")
                .attr("font-size", "14px")
                .attr("fill", info.color)
                .text(object.name);

            // Generate WORLD
            worldItemGroup.append("circle")
                .attr("r", object.radius * SCALE_FACTOR)
                .attr("stroke-width", "2")
                .attr("fill", info.color)
                .attr("class", `planet ${object.classes ? object.classes : ""}`);
        }        

        if (object.crafts && object.crafts.length) {
            object.crafts.forEach((craft) => {
                const craftPoint = findNewPoint(0, 0, craft.startingAngle, craft.distance * DISTANCE_FACTOR);
                const craftItemGroup = worldItemGroup
                    .append("g")
                    .attr("class", `craft-group ${craft.zoomLevel === 2 ? "zoom-level-2" : ""}`)

                // Generate NAME
                craftItemGroup.append("text")
                    .attr("x", 0)
                    .attr("y", -1 * SCALE_FACTOR - 15)
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

                craftItemGroup.append("circle")
                    .attr("cx", 0)
                    .attr("cy", 0)
                    .attr("r", 1 * SCALE_FACTOR)
                    .attr("fill", "white")
                    .attr("class", "craft");

                craftItemGroup.attr("transform", "translate(" + (craftPoint.x || 0) + "," + (craftPoint.y || 0) + ")");
            })
        }

        // Send item group to coordinates
        if (object.type === ObjectType.AsteroidBelt) {
            worldItemGroup.attr("transform", "translate(0, 0)");
        } else {
            worldItemGroup.attr("transform", "translate(" + (info.x || 0) + "," + (info.y || 0) + ")");
        }
    
        itemGroups.push(worldItemGroup)
    })
}