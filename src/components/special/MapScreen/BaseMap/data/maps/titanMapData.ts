import TitanMap from "@/assets/images/maps/map-titan-dollar-bank.jpg"
import {
  type ActiveMapMeta,
  ActiveMapType,
} from "@/components/special/MapScreen/BaseMap/data/mapTypes"
import {
  type LocalLocationNode,
  LocationType,
  SiteSubtype,
} from "@/components/special/MapScreen/BaseMap/data/types"

export const titanLocations: LocalLocationNode[] = [
  {
    id: "new-providence",
    name: "New Providence",
    typeText: "Hub City",
    type: LocationType.Site,
    subType: SiteSubtype.PointOfInterest,
    x: -100,
    y: -450,
  },
  {
    name: "Petoskey Springs",
    typeText: "Shipping Town",
    flavorText:
      "Quaint little town at the foot of the Highwinds.",
    type: LocationType.Site,
    subType: SiteSubtype.Outpost,
    x: -860,
    y: -700,
  },
  {
    name: "Monolith Supergun",
    typeText: "Orbital Shipping System",
    flavorText:
      "The Monolith railgun, large enough to fire truck-sized armatures, sits silent for a century. It waits for launch authorization from a human being that will never come.",
    type: LocationType.Site,
    subType: SiteSubtype.Outpost,
    x: -910,
    y: -720,
  },
  {
    name: "Quentoria",
    typeText: "Suburban Town",
    flavorText:
      "One of hundreds of cookie-cutter suburbs that dot the Dollar Bank.",
    type: LocationType.Site,
    subType: SiteSubtype.Outpost,
    x: -280,
    y: -500,
  },
  {
    name: "Gibson Lake",
    typeText: "Lake Town",
    type: LocationType.Site,
    subType: SiteSubtype.Outpost,
    x: -430,
    y: -240,
  },
  {
    name: "Gibson Dam",
    typeText: "Hydroelectric Dam",
    type: LocationType.Site,
    subType: SiteSubtype.Outpost,
    x: -385,
    y: -250,
  },
  {
    name: "Fort Hood",
    typeText: "Military Base",
    type: LocationType.Site,
    subType: SiteSubtype.Outpost,
    x: -140,
    y: -240,
  },
  {
    name: "Rhodes",
    typeText: "Mining Town",
    type: LocationType.Site,
    subType: SiteSubtype.Outpost,
    x: -385,
    y: 120,
  },
  {
    name: "Redmond Plant A2",
    typeText: "Robotics Factory",
    type: LocationType.Site,
    subType: SiteSubtype.Outpost,
    x: -425,
    y: 45,
  },
  {
    name: "Northern Nuclear",
    typeText: "Power Plant",
    type: LocationType.Site,
    subType: SiteSubtype.PointOfInterest,
    x: -640,
    y: -300,
  },
  {
    name: "Objective Titan Warship",
    typeText: "Planetary Defense Vessel",
    flavorText:
      "Some mistake it for an island... until it begins to move.",
    type: LocationType.Site,
    subType: SiteSubtype.PointOfInterest,
    x: 60,
    y: 250,
  },
  {
    name: "Clibber Creek Park",
    typeText: "Visitor Center",
    flavorText:
      "Welcome to Clibber Creek State Park, home of the man who designed the Grillmaster! Please make your visit to our park safe and enjoyable, and remain in the vicinity of the marked trails.",
    type: LocationType.Site,
    subType: SiteSubtype.PointOfInterest,
    x: -490,
    y: -350,
  },
  {
    name: "Albatross Campsite",
    typeText: "Remote Campsite",
    flavorText:
      "People once came here to watch the lights dance in the night sky.",
    type: LocationType.Site,
    subType: SiteSubtype.PointOfInterest,
    x: -890,
    y: -410,
  },
  {
    name: "Pine Valley Research",
    typeText: "Technology Complex",
    type: LocationType.Site,
    subType: SiteSubtype.PointOfInterest,
    x: -990,
    y: -450,
  },
  {
    name: "Drowning Monument",
    typeText: "???",
    flavorText:
      "Couple of unusually smooth, glowy stones peeking out over the waterline.",
    type: LocationType.Site,
    subType: SiteSubtype.PointOfInterest,
    x: -1150,
    y: 150,
  },
  {
    name: "Fort Haversat",
    typeText: "Research Base",
    type: LocationType.Site,
    subType: SiteSubtype.PointOfInterest,
    x: 990,
    y: 600,
  },
  {
    name: "Offshore #8",
    typeText: "Drilling Platform",
    type: LocationType.Site,
    subType: SiteSubtype.PointOfInterest,
    x: 890,
    y: -500,
  },
  {
    name: "Sea Dragon",
    typeText: "Old Launch Site",
    type: LocationType.Site,
    subType: SiteSubtype.PointOfInterest,
    x: 690,
    y: -600,
  },
]

export const titanMapMeta: ActiveMapMeta = {
  id: "titan",
  name: "Titan",
  mapType: ActiveMapType.Local,
  image: TitanMap,
  dimensions: {
    x: 3000,
    y: 2000,
  },
  centerLocationId: "new-providence",
  minScale: 0.7,
  maxScale: 5,
  detailLevelScale: 2,
  detailLevel2Scale: 4,
  diagPatternScale: "3px",
  centerOffset: 0,
  distanceMultiplier: 1,
  locations: titanLocations,
}

// ICE SHELF
//
/// STONE COLD WATERS
// The seas to the north are

// NUCLEAR LAUNCH SITE
// Don't be concerned. The people are upwind
