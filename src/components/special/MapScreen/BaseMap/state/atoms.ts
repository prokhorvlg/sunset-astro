
import { MAP_INITIAL_SCALE, MAP_MAX_SCALE } from "@/components/special/MapScreen/BaseMap/data/constants"
import { LocationNode } from "@/components/special/MapScreen/BaseMap/data/types"
import { atom } from "jotai"
import { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch"

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
export const isDetailLevelAtom = atom((get) => get(scaleAtom) > 4)
export const isDetailLevel2Atom = atom((get) => get(scaleAtom) > 8)

export const opacityFadeInAtom = atom((get) => {
  const opacityFadeAwayCutoff = MAP_MAX_SCALE - 6
  const currentLevel = opacityFadeAwayCutoff - get(scaleAtom)
  const opacityFadeIn = currentLevel <= 1 ? 1 : (1 / currentLevel)
  return opacityFadeIn
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

export const isSelectedModalOpenAtom = atom<boolean>(false)