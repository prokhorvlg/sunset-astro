
export const enum LocationType {
    Sun,
    Planet,
    Moon,
    AsteroidBelt,
    Site // specific locations
}

export interface LocationNode {
    name: string,
    typeText?: string
    description?: string
    flavorText?: string

    type: LocationType, 
    distance: number, 
    radius?: number, 
    speed?: number, 
    startingAngle: number, 
    color?: string, 
    crafts?: LocationNode[], 
    children?: LocationNode[], 
    parent?: string,
    classes?: string
    zoomLevel?: number
}

// human population pre-interrupt
// machine population current day
// world affiliation: human-era, machine-era, machines of glass, century of progress
// human faction affiliation: union, coalition, pact, none

/*
export const enum LocationTypeOnMap {
    Sun,
    Planet,
    Moon,
    AsteroidBelt,
    Satellite
}
export interface Location {
    name: string,
    type: LocationType,
    color: string
    children: (LocationOnMap | Location)[]
}

export interface LocationOnMap extends Location {
    typeOnMap: LocationTypeOnMap,
    distance: number,
    radius: number
    speed: number
    startingAngle: number
    alignment: string // text alignment
    zoomLevel?: number // 1 always visible, 2 reveals on level 2
    crafts: (LocationOnMap)[]
}*/