import { LocationNode, LocationType } from "@/components/special/SystemMap/types";

// Data for generation of objects
export const locationsData: LocationNode = {
    name: "Sol",
    type: LocationType.Sun,
    distance: 0,
    radius: 35,
    speed: 0,
    startingAngle: 0,
    color: "#ffc919",
    children: [
        {
            name: "Interbeacon",
            type: LocationType.Site,
            distance: 95,
            startingAngle: 270,
        },
        {
            name: "Mercury",
            type: LocationType.Planet,
            color: "#f47f00",
            distance: 125,
            radius: 8,
            speed: -1.60,
            startingAngle: 35,
            children: [
                {
                    name: "Inner Eye Orbital",
                    description: "Where it all began.",
                    type: LocationType.Site,
                    distance: 22,
                    startingAngle: 25,
                }
            ]
        },
        {
            name: "Venus",
            type: LocationType.Planet,
            color: "#b8ff30",
            distance: 165,
            radius: 15,
            speed: -1.17,
            startingAngle: 195,
            children: [
                {
                    name: "Klios",
                    type: LocationType.Moon,
                    color: "#717fff",
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
            type: LocationType.Planet,
            color: "#0dcfff",
            distance: 205,
            radius: 14,
            speed: -1.17,
            startingAngle: 280,
            children: [
                {
                    name: "Luna",
                    type: LocationType.Moon,
                    distance: 66,
                    radius: 5,
                    speed: -3.2,
                    startingAngle: 169,
                    children: []
                }
            ]
        },
        {
            name: "Mars",
            type: LocationType.Planet,
            color: "#ff4817",
            distance: 245,
            radius: 11,
            speed: -1.17,
            startingAngle: 64,
            children: []
        },
        {
            name: "Asteroid Belt",
            type: LocationType.AsteroidBelt,
            distance: 295,
            radius: 11,
            speed: -1.17,
            startingAngle: 44,
            children: [],
            classes: "asteroid-belt"
        },
        {
            name: "Jupiter",
            type: LocationType.Planet,
            color: "#ffe4b6",
            distance: 355,
            radius: 29,
            speed: -1.17,
            startingAngle: 145,
            children: [
                {
                    name: "Io",
                    type: LocationType.Moon,
                    color: "#ff8b19",
                    distance: 86,
                    radius: 4,
                    speed: -3.2,
                    startingAngle: 10,
                    children: []
                },
                {
                    name: "Europa",
                    type: LocationType.Moon,
                    color: "#1cffd7",
                    distance: 115,
                    radius: 5,
                    speed: -3.2,
                    startingAngle: 259,
                    children: []
                },
                {
                    name: "Ganymede",
                    type: LocationType.Moon,
                    distance: 145,
                    radius: 6,
                    speed: -3.2,
                    startingAngle: 155,
                    children: []
                },
                {
                    name: "Callisto",
                    type: LocationType.Moon,
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
            type: LocationType.Planet,
            color: "#ffc698",
            distance: 435,
            radius: 26,
            speed: -1.17,
            startingAngle: 310,
            children: [
                {
                    name: "Titan",
                    type: LocationType.Moon,
                    color: "#1a9efa",
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
            type: LocationType.Planet,
            color: "#38f3ff",
            distance: 545,
            radius: 19,
            speed: -1.17,
            startingAngle: 340,
            children: []
        },
        {
            name: "Neptune",
            type: LocationType.Planet,
            color: "#087bdd",
            distance: 655,
            radius: 18,
            speed: -1.17,
            startingAngle: 224,
            children: []
        },
        {
            name: "Pluto",
            type: LocationType.Planet,
            distance: 725,
            radius: 5,
            speed: -1.17,
            startingAngle: 11,
            children: [
                {
                    name: "Charon",
                    type: LocationType.Moon,
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
            type: LocationType.AsteroidBelt,
            distance: 955,
            radius: 5,
            speed: -1.17,
            startingAngle: 0,
            children: []
        },
        {
            name: "Nibiru",
            type: LocationType.Planet,
            color: "#ff1bc1",
            distance: 1205,
            radius: 36,
            speed: -1.17,
            startingAngle: 32,
            children: [
                {
                    name: "Marduk",
                    type: LocationType.Moon,
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

// 