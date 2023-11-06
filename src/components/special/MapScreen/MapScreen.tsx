import { selectedLocationAtom } from "@/components/special/SystemMap/state/atoms"
import SystemMap from "@/components/special/SystemMap/SystemMap"
import { useAtom } from "jotai"
import './MapScreen.scss'

const MapScreen = () => {
  const [selectedLocation, setSelectedLocation] = useAtom(
    selectedLocationAtom
  )

  return (
    <div className="map-screen">

      <div className="map-header">
        <h1>Map {">"}{">"} Solar System</h1>
      </div>

      <div className="map-body">
        <SystemMap />
      </div>

      <div className="map-selected">
        more data
        {selectedLocation?.name}
      </div>

    </div>
  )
}

export default MapScreen

      {/* 
      modal stuff
      Location
      MAP IN WESTON

      At the center of Weston Mission Control, you dust off an old, unused defense terminal. It is simply labeled VIEWER, and appears to be linked.

      Dynatek VIEWER

You've found at the Observatory, a representation of local reality in the post-mankind age. The system is directly linked to Goldspire Complex's advanced sensors, so dig deep and log your findings.

(If you're confused, an introduction can be found on the home page.)

Major worlds also link to regional maps. Explore them too - terrestrial locations are just as critical.

Mobile controls

Pinch to zoom.
Swipe to pan.
Tap to select.
Double tap to reset selection, then center your view.

Desktop controls

Scroll to zoom.
Grab to pan.
Click to select.
Right click to reset selection, then center your view.

Enter map | Continue introduction */}