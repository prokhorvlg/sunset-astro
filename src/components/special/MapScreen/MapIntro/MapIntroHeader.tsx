import MapComputerImage from '@/assets/images/map_terminal (9).png'
import './MapIntroHeader.scss'

const MapIntroHeader = () => {
  return (
    <div className="map-intro-header">
      <img src={MapComputerImage.src} width={400}/>
      <h1>Map</h1>
      <p>A map of Sunset System's locations.</p>
    </div>
    
  )
}

export default MapIntroHeader