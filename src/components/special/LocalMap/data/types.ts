export enum LocationType {
  Site, // Specific location
  Field, // Area that is a location
  Label // Text to indicate location shown in artwork that is not an existing object
}

export enum RelativePosition {
  Local, // Object remains constant in relation to parent
  Deep, // Object remains in static position on map (default)
}

export interface LocationNode {
  // PRIMARY INFORMATION
  name: string // eg. Fishtown
  typeText?: string // eg. Center of trade
  description?: string // eg. The town is a ...
  flavorText?: string // eg Don't step on it.

  // CATEGORIES
  type: LocationType // Determines basic treatment of location
  subType?: SiteSubtype // Determines icon used (if site)
  worldAffiliation?: WorldAffiliation // Determines location color

  // POSITION
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
}

// Dictates the icon used
export enum SiteSubtype {
  Town = "", 
  Relic = ""
}