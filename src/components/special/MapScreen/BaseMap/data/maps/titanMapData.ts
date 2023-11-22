import TitanMap from "@/assets/images/maps/map-titan-dollar-bank.jpg"
import { type ActiveMapMeta, ActiveMapType } from "@/components/special/MapScreen/BaseMap/data/mapTypes"
import { type LocalLocationNode, LocationType } from "@/components/special/MapScreen/BaseMap/data/types"

export const titanLocations: LocalLocationNode[] = [
  {
    name: 'Northern Nuclear',
    typeText: "Power Plant",
    type: LocationType.Site, 
    x: 150, 
    y: 200
  }, 
  {
    name: 'origin', 
    type: LocationType.Site, 
    x: 0, 
    y: 0
  }
]

export const titanMapMeta: ActiveMapMeta = {
  id: "titan",
  mapType: ActiveMapType.Local,
  image: TitanMap,
  dimensions: {
    x: 3000,
    y: 2000
  },
  minScale: 1,
  maxScale: 4,
  detailLevelScale: 2,
  detailLevel2Scale: 4,
  centerOffset: 0,
  distanceMultiplier: 1,
  locations: titanLocations
}