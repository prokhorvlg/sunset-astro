import { type LocalLocationNode, LocationType } from "@/components/special/MapScreen/BaseMap/data/types";

export const titanLocations: LocalLocationNode[] = [
  {
    name: 'example', 
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