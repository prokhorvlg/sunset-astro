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
            typeText: "Telecommunications Statite",
            flavorText: "Glory to the Union, even in death.",
            description: "Interbeacon was an enormous statite built to syncronize the Aggregate, the Union's interplanetery datanet. Today, it hosts RADIUS, the final remnant of the Union's automated economic planning system. Their voice booms across the skies, visible from all points in the System.",
            type: LocationType.Site,
            distance: 20,
            startingAngle: 270,
        },
        {
            name: "Axiom",
            typeText: "Solar Array",
            flavorText: "Power to the System first, power to the universe next.",
            description: "",
            type: LocationType.Site,
            distance: 45,
            startingAngle: 190,
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
                    typeText: "Noetic Research Station",
                    flavorText: "The beginning, the end, and all that came in between.",
                    description: "The Inner Eye was the final orbital-class space station to be built by humans. The noetic altar built into its core, Project WHITE SERAPH, was activated on the same day the Unexpected Interrupt occured: May 5, 2095, the day mankind vanished from the System.",
                    type: LocationType.Site,
                    distance: 22,
                    startingAngle: 25,
                }
            ]
        },
        {
            name: "Venus",
            type: LocationType.Planet,
            typeText: "Hot Jungle World",
            flavorText: "Welcome, comrade! Here, our people work as hard as the machines to build our Communist future- ALERT. ALERT. Hive invasion detected. Seek shelter.",
            description: "",
            color: "#b8ff30",
            distance: 165,
            radius: 15,
            speed: -1.17,
            startingAngle: 195,
            children: [
                {
                    name: "Klios",
                    type: LocationType.Moon,
                    typeText: "Frozen Moonlet",
                    flavorText: "It was always here.",
                    description: "A tiny moon consisting primarily of frozen carbon dioxide. It was an ideal location for several data centers.",
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
                    name: "The Seventh Orbital",
                    typeText: "Stellar home of the Machine World",
                    flavorText: "The fractal labyrinth is the most efficient structure ever designed by conscious beings.",
                    description: "",
                    type: LocationType.Site,
                    distance: 35,
                    startingAngle: 150,
                },
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
            distance: 340,
            radius: 15,
            speed: -1.17,
            startingAngle: 44,
            children: [
                {
                    name: "Heavenbreaker Cache 80-IV",
                    typeText: "Bundle of nuclear missiles",
                    flavorText: "Sleeping nuclear missiles, waiting for the final order.",
                    description: "",
                    type: LocationType.Site,
                    distance: 35,
                    startingAngle: 150,
                },
            ],
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
            radius: 50,
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

// THERE IS NOTHING ON THE SUN.
// THE SURFACE IS TOO HOT FOR ANYTHING TO EXIST HERE.
// *STOP LOOKING AT THE SURFACE OF THE SUN.*