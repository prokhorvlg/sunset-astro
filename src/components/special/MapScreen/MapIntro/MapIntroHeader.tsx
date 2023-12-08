import MapComputerImage from '@/assets/images/map_terminal (13).png'
import './MapIntroHeader.scss'

const MapIntroHeader = () => {
  return (
    <div className="map-intro-header">
      <div className="terminal-container">
        <img className="terminal-image" src={MapComputerImage.src} />
      </div>
      <h1>Map</h1>
      <p>An interactive display of locations within Sunset System.</p>
    </div>
    
  )
}

export default MapIntroHeader