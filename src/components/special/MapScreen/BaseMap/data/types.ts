import type { ActiveMap } from "@/components/special/MapScreen/BaseMap/data/mapTypes"
import type { ReactNode } from "react"

export enum LocationType {
  Sun = "sun",
  Planet = "planet",
  Moon = "moon",
  AsteroidBelt = "belt",
  Site = "site", // Specific location eg. Space Station
  Field = "field",
  Label = "label"
}

export enum RelativePosition {
  Local, // Object remains constant in relation to parent
  Deep, // Object remains in static position on map (default)
}

export interface LocationNode {
  id?: string

  // PRIMARY INFORMATION
  name: string // eg. Sol
  typeText?: string // eg. Main Sequence Star
  description?: string // eg. The sun is a ...
  flavorText?: string // eg Don't step on it.
  icon?: ReactNode

  // CATEGORIES
  type: LocationType // Determines basic treatment of location
  subType?: SiteSubtype // Determines icon used (if site)
  worldAffiliation?: WorldAffiliation // Determines location color
  humanEraAffiliation?: HumanEraAffiliation

  // COLORS
  color?: string
  colorSecondary?: string

  isImportant?: boolean // Has special indicator on map
  hideLabel?: boolean
  isHighDetail?: boolean

  // FIELD-SPECIFIC
  fieldShape?: FieldShape // If field, defines the SVG used for the shape
  fieldLabelOffset?: {x: number, y: number} // offset label from origin
  fieldClass?: string // css class to define colors and such

  // DOM
  parent?: string
  classes?: string

  // CHILDREN
  children?: LocationNode[]

  // LOCAL MAP
  localMap?: ActiveMap

  // OLD UNUSED
  crafts?: LocationNode[] // unused
  zoomLevel?: number // unused
}

export interface SystemLocationNode extends LocationNode {
  // POSITION (on radial map)
  distance: number
  radius?: number // sites do not have radius
  startingAngle: number

  ringWidth?: number  // If planet has rings, filling this out gives it one
  children?: SystemLocationNode[]
}

// Extension for local map nodes
export interface LocalLocationNode extends LocationNode {
  x: number
  y: number
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
  Natural = "natural"
}

// Dictates the icon used
export enum SiteSubtype {
  Orbital = "orbital",  // Gargantuan space stations built as cities
  Outpost = "outpost",  // Small space stations for various purposes
  Beacon = "beacon",   // Outposts designed to emit or capture signals
  Weapon = "weapon",    // Outposts designed as some sort of weapon
  Vessel = "vessel",    // Moving spacecraft
  MachineMade = "construct",  // A machine world structure, fractal and multifaceted
  PointOfInterest = "poi",  
  Danger = "threat",
  Asteroid = "asteroid",
  Wreck = "wreck",
  Ruin = "ruin",
  Factory = "factory",
  DataTrove = "data-trove",
}

export enum FieldShape {
  Earth = "Earth",
  DistantBottomLeft = "DistantBottomLeft",
  SunWeather = "SunWeather",
  Mercury = "Mercury",
  Jupiter = "Jupiter",
  SRICircle = "SriCircle"
}

// human population pre-interrupt
// machine population current day
// world affiliation: human-era, machine-era, machines of glass, century of progress
// human faction affiliation: union, coalition, pact, none

export const mapTypeToText = {
  [LocationType.Sun]: "Sun",
  [LocationType.Planet]: "Planet",
  [LocationType.Moon]: "Moon",
  [LocationType.AsteroidBelt]: "Asteroid Belt",
  [LocationType.Site]: "Site",
  [LocationType.Field]: "Field",
  [LocationType.Label]: "Label",
}

export const mapSiteSubTypeToText = {
  [SiteSubtype.Orbital]: "Orbital Station",
  [SiteSubtype.Outpost]: "Outpost",
  [SiteSubtype.MachineMade]: "Construct",
  [SiteSubtype.PointOfInterest]: "Point of Interest",
  [SiteSubtype.Asteroid]: "Celestial Body",

}

export const mapWorldAffiliationToText = {
  [WorldAffiliation.Anomaly]: "Anomalous",
  [WorldAffiliation.HumanEra]: "Human-Designed",
  [WorldAffiliation.MachineEra]: "Machine-Designed",
  [WorldAffiliation.MachinesOfGlass]: "Machines of Glass",
  [WorldAffiliation.CenturyOfProgress]: "Century of Progress",
  [WorldAffiliation.Natural]: "Natural"
}

export const mapHumanEraAffiliationToText = {
  [HumanEraAffiliation.GreaterUnion]: "Greater Union",
  [HumanEraAffiliation.EnduringCoalition]: "Enduring Coalition",
  [HumanEraAffiliation.RisingPact]: "Rising Pact",
  [HumanEraAffiliation.None]: "None",
  [HumanEraAffiliation.SunsetResearchInitiative]: "Sunset Research Initiative",
}