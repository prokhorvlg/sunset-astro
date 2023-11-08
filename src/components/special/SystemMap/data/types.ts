export enum LocationType {
  Sun,
  Planet,
  Moon,
  AsteroidBelt,
  Site, // Specific location eg. Space Station
  Field,
}

export enum RelativePosition {
  Local, // Object remains constant in relation to parent
  Deep, // Object remains in static position on map (default)
}

export interface LocationNode {
  // PRIMARY INFORMATION
  name: string // eg. Sol
  typeText?: string // eg. Main Sequence Star
  description?: string // eg. The sun is a ...
  flavorText?: string // eg Don't step on it.

  // CATEGORIES
  type: LocationType // Determines basic treatment of location
  subType?: SiteSubtype // Determines icon used (if site)
  worldAffiliation?: WorldAffiliation // Determines location color

  // COLORS
  color?: string
  colorSecondary?: string

  isImportant?: boolean // Has special indicator on map

  // POSITION
  distance: number
  radius?: number
  speed?: number
  startingAngle: number
  ringWidth?: number  // If planet has rings, filling this out gives it one

  // FIELD-SPECIFIC
  fieldShape?: FieldShape // If field, defines the SVG used for the shape
  fieldLabelOffset?: {x: number, y: number} // offset label from origin
  fieldClass?: string // css class to define colors and such

  // DOM
  parent?: string
  classes?: string

  // CHILDREN
  children?: LocationNode[]

  // OLD UNUSED
  crafts?: LocationNode[] // unused
  zoomLevel?: number // unused
}

// Which faction occupied this location prior to the Interrupt
export enum HumanEraAffiliation {
  None,
  GreaterUnion,
  EnduringCoalition,
  RisingPact,
  SunsetResearchInitiative,
}

export enum MachineWorldAffiliation {
  Voice,
  RADIUS,
}

export enum WorldAffiliation {
  Anomaly = "anomaly",
  HumanEra = "human-era",
  MachineEra = "machine-era",
  MachinesOfGlass = "machines-of-glass",
  CenturyOfProgress = "century-of-progress",
}

// Dictates the icon used
export enum SiteSubtype {
  Orbital = "orbital",  // Gargantuan space stations built as cities
  Outpost = "outpost",  // Small space stations for various purposes
  Beacon = "beacon",   // Outposts designed to emit or capture signals
  Weapon = "weapon",    // Outposts designed as some sort of weapon
  Vessel = "vessel",    // Moving spacecraft
  MachineMade = "machine",  // A machine world structure, fractal and multifaceted
  PointOfInterest = "poi",  
  Danger = "danger",
  Asteroid = "asteroid",
  Wreck = "wreck",
  Ruin = "ruin",

  DataTrove = "data-trove",
}

export enum FieldShape {
  Earth = "Earth",
  DistantBottomLeft = "DistantBottomLeft",
  SunWeather = "SunWeather"
}

// human population pre-interrupt
// machine population current day
// world affiliation: human-era, machine-era, machines of glass, century of progress
// human faction affiliation: union, coalition, pact, none
