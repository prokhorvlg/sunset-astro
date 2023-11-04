
export const enum LocationType {
    Sun,
    Planet,
    Moon,
    AsteroidBelt,
    Site,            // Specific location eg. Space Station
}

export const enum RelativePosition {
  Local,    // Object remains constant in relation to parent
  Deep      // Object remains in static position on map (default)
}

export interface LocationNode {
    name: string,         // eg. Sol
    typeText?: string     // eg. Main Sequence Star
    description?: string  // eg. The sun is a ...
    flavorText?: string   // eg Don't step on it.
    
    color?: string, 
    colorSecondary?: string

    isImportant?: boolean // Has special indicator on map

    type: LocationType,
    relativePosition?: RelativePosition

    distance: number, 
    radius?: number, 
    speed?: number, 
    startingAngle: number, 
    
    crafts?: LocationNode[], // unused
    children?: LocationNode[], 
    parent?: string,
    classes?: string
    zoomLevel?: number // unused
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