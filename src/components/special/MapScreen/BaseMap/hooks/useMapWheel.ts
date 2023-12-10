import { MAP_MAX_SCALE, MAP_MIN_SCALE } from "@/components/special/MapScreen/BaseMap/data/constants"
import { boundingBlockAtom, scaleAtom, transformAtom } from "@/components/special/MapScreen/BaseMap/state/atoms"
import { useAtom } from "jotai"
import { useEffect, useRef, useState } from "react"

export const useMapWheel = () => {
  const [scale, setScale] = useAtom(scaleAtom)
  const [transform, setTransform] = useAtom(transformAtom)
  const [boundingBlock, setBoundingBlock] = useAtom(boundingBlockAtom)

  const [newWheelScale, setNewWheelScale] = useState<{
    scale: number,
    event: React.WheelEvent<HTMLDivElement>
  } | null>(null)
  

  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    // Zooming in is negative, zooming out is positive
  const isZoomingIn = event.deltaY < 0

  let newScale = isZoomingIn ? scale + 1 : scale - 1
  
  if (newScale >= MAP_MAX_SCALE) newScale = MAP_MAX_SCALE;
  else if (newScale <= MAP_MIN_SCALE) newScale = MAP_MIN_SCALE;
  
    setNewWheelScale({
      scale: newScale,
      event: event
    })
  }
  
  useEffect(() => {
    if (!newWheelScale || !transform || !boundingBlock) return
    const scaleDifference = newWheelScale.scale - scale

    const mousePosition = getMousePosition(newWheelScale.event as any, boundingBlock as HTMLDivElement, scale)
    const { positionX, positionY } = transform.instance.transformState;

    const calculatedPositionX = positionX - mousePosition.x * scaleDifference;
    const calculatedPositionY = positionY - mousePosition.y * scaleDifference;

    // Set new state, then ensure it's in bound with a zoom in call
    transform.instance.setTransformState(newWheelScale.scale, calculatedPositionX, calculatedPositionY);
    transform.zoomIn(0)

    setNewWheelScale(null)
  }, [newWheelScale])

  return {
    onWheel
  }
}

// Stolen straight from the react zoom pan library lol
export function getMousePosition(
  event: WheelEvent | MouseEvent | TouchEvent,
  contentComponent: HTMLDivElement,
  scale: number,
) {
  const contentRect = contentComponent.getBoundingClientRect();

  let mouseX = 0;
  let mouseY = 0;

  if ("clientX" in event) {
    // mouse position x, y over wrapper component
    mouseX = (event.clientX - contentRect.left) / scale;
    mouseY = (event.clientY - contentRect.top) / scale;
  } else {
    const touch = event.touches[0];
    mouseX = (touch.clientX - contentRect.left) / scale;
    mouseY = (touch.clientY - contentRect.top) / scale;
  }

  if (Number.isNaN(mouseX) || Number.isNaN(mouseY))
    console.error("No mouse or touch offset found");

  return {
    x: mouseX,
    y: mouseY,
  };
}