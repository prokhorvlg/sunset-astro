import {
  LocationNode,
  LocationType,
  SiteSubtype,
  WorldAffiliation,
} from "@/components/special/LocalMap/data/types"

export const middleLocation: LocationNode = {
  name: 'middle', 
  type: LocationType.Middle, 
  x: 0, 
  y: 0
}

// eventually remove and replace with prop on LocalMap
export const locationsData: LocationNode[] = [
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