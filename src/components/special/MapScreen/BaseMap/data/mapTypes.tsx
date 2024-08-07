import type { SystemLocationNode, LocalLocationNode } from "@/components/special/MapScreen/BaseMap/data/types"

// ADD NEW MAPS TO THESE CONSTS
export enum ActiveMap {
  System = "system",
  Titan = "titan"
}

export interface ActiveMapMeta {
  id: string
  name: string
  mapType: ActiveMapType
  image?: ImageMetadata
  dimensions: {
    x: number
    y: number
  }
  centerLocationId: string
  minScale: number
  maxScale: number
  detailLevelScale: number // type gets revealed
  detailLevel2Scale: number // flavor text gets revealed
  diagPatternScale: string // size of diagonal pattern
  centerOffset: number
  distanceMultiplier: number
  locations: SystemLocationNode | LocalLocationNode[]
}

export enum ActiveMapType {
  System,
  Local
}