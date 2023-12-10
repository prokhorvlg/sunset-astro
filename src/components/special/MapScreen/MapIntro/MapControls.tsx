import { MdPinch, MdSwipeVertical, MdTouchApp, MdMouse, MdOutlineRefresh, MdAdsClick, MdExpandLess, MdSmartphone, MdPanTool, MdOutlineZoomIn, MdLocationPin } from "react-icons/md";
import './MapControls.scss'

const MapControls = () => {

  return (
    <div className="map-controls">

      <div className="controls-set">
        <div className="controls-container">
          <p className="controls-eyebrow">Controls</p>
          <h2><MdSmartphone /> Touchscreen</h2>
          <MapControlsMobile />
        </div>
        <div className="controls-container mouse">
          <p className="controls-eyebrow">Controls</p>
          <h2><MdMouse /> Mouse</h2>
          <MapControlsDesktop />
        </div>
      </div>
      <div className="extra expand"><MdLocationPin /> If a location is selected, open details using button at the bottom of the screen.</div>

    </div>
  )
}

const MapControlsMobile = () => {
  return (
    <ul>
      <li><MdSwipeVertical /> Swipe to pan.</li>
      <li><MdPinch /> Pinch to zoom.</li>
      <li><MdTouchApp /> Tap to select.</li>
      <li><MdOutlineRefresh /> Double tap to unselect;</li>
      <li>Then double tap to reset view.</li>
    </ul>
  )
}

const MapControlsDesktop = () => {
  return (
    <ul>
      <li><MdPanTool /> Drag to pan.</li>
      <li><MdOutlineZoomIn /> Scroll to zoom.</li>
      <li><MdAdsClick /> Click to select.</li>
      <li><MdOutlineRefresh /> Right click to unselect;</li>
      <li>Then right click to reset view.</li>
    </ul>
  )
}



//      <MdAdsClick />


export default MapControls