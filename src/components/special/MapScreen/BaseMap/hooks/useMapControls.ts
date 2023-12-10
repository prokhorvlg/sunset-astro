import { MAP_MAX_SCALE } from "@/components/special/MapScreen/BaseMap/data/constants"
import {
  transformAtom,
  scaleAtom,
  rescaleAtom,
  selectedLocationAtom,
  activeMapAtom,
  activeMapMetaAtom,
} from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import { useEffect, useRef } from "react"
import type { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch"

export const useMapControls = () => {
  const transformComponentRef =
    useRef<ReactZoomPanPinchContentRef | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(
    null
  )

  // BASE MAP STATE
  const [transform, setTransform] = useAtom(transformAtom)
  const [scale, setScale] = useAtom(scaleAtom)
  const [rescale, setRescale] = useAtom(rescaleAtom)

  // SELECTION STATE
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  // CURRENT ACTIVE MAP STATE
  const [activeMap, setActiveMap] = useAtom(activeMapAtom)
  const [activeMapMeta, setActiveMapMeta] = useAtom(activeMapMetaAtom)
  
  // Whenever active map changes, update the transform ref
  useEffect(() => {
    if (!transformComponentRef.current) return
    setTransform(transformComponentRef.current)
  }, [transformComponentRef, activeMap])

  // METHODS
  // Update base map scale.
  const updateScaleFromExternalInput = (
    newScale: number
  ) => {
    if (!transformComponentRef.current) return
    const { zoomIn, zoomOut } =
      transformComponentRef.current

    const targetScale = newScale
    const factor =
      Math.log(targetScale / scale) / (1 / MAP_MAX_SCALE)
    if (targetScale > scale) {
      zoomIn(factor, 0)
    } else {
      zoomOut(-factor, 0)
    }
    setScale(targetScale)
  }

  // Reset view to selection.
  const resetToSelected = () => {
    if (!selectedLocation) return
    transformComponentRef.current?.zoomToElement(
      selectedLocation.id ?? selectedLocation.name,
      1,
      400
    )
  }

  // Reset view to center.
  const resetToCenter = () => {
    transformComponentRef.current?.zoomToElement(
      activeMapMeta.centerLocationId,
      1,
      400
    )
  }
  
  const reset = () => {
    if (selectedLocation) {
      resetToSelected()
    } else {
      resetToCenter()
    }

    setSelectedLocation(null)
  }

  return {
    transformComponentRef,
    mapContainerRef,
    reset,
    resetToSelected,
    resetToCenter
  }
}
