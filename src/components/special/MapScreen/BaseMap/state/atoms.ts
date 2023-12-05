
import { MAP_INITIAL_SCALE, MAP_MAX_SCALE } from "@/components/special/MapScreen/BaseMap/data/constants"
import { ActiveMap, ActiveMapType, type ActiveMapMeta } from "@/components/special/MapScreen/BaseMap/data/mapTypes"
import { mapActiveMapToMeta } from "@/components/special/MapScreen/BaseMap/data/maps"
import type { LocationNode } from "@/components/special/MapScreen/BaseMap/data/types"
import { atom } from "jotai"
import type { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch"

// Contains current real scale of map.
export const scaleAtom = atom(MAP_INITIAL_SCALE)
// Contains the adjusted scale of map (to shrink elements).
export const adjustedScaleAtom = atom((get) => {
  return get(scaleAtom) * 2
})

export const transformAtom = atom<ReactZoomPanPinchContentRef | null>(null)
export const boundingBlockAtom = atom<HTMLDivElement | null>(null)

export const rescaleAtom = atom((get) => {
  return 0.8 / get(scaleAtom)
})

// Reveals details at different scale levels
export const isDetailLevelAtom = atom((get) => {
  const activeMapMeta = get(activeMapMetaAtom)
  return get(scaleAtom) >= activeMapMeta.detailLevelScale
})
export const isDetailLevel2Atom = atom((get) => {
  const activeMapMeta = get(activeMapMetaAtom)
  return get(scaleAtom) >= activeMapMeta.detailLevel2Scale
})

export const opacityFadeOutAtom = atom((get) => {
  const scale = get(scaleAtom)
  return 1 / scale
})

// Contains current coordinate state of map.
export const usePosXAtom = atom(0)
export const usePosYAtom = atom(0)

// Contains current selected location of map.
export const selectedLocationAtom = atom<LocationNode | null>(null)
export const hoveredLocationAtom = atom<LocationNode | null>(null)

export const activeMapAtom = atom<ActiveMap>(ActiveMap.System)
export const activeMapMetaAtom = atom<ActiveMapMeta>((get) => {
  const activeMap = get(activeMapAtom)
  return mapActiveMapToMeta[activeMap]
})

export const isSelectedModalOpenAtom = atom<boolean>(false)

export const isIntroOpenAtom = atom<boolean>(true)