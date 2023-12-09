import MapComputerImage from '@/assets/images/map_terminal.png'
import MapComputerScreen from '@/assets/images/map_terminal.gif'
import { MdExpandMore } from "react-icons/md";
import { useState } from 'react'
import './MapIntroHeader.scss'

const MapIntroHeader = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <div className="map-intro-header">
        <div className="terminal-container">
          <img className="terminal-image" src={MapComputerImage.src} />
          <img className="terminal-screen" src={MapComputerScreen.src} />
        </div>
        <h1>Map</h1>
        <p>An interactive display of locations within Sunset System.</p>
      </div>

      <div className="map-intro-header-text markdown-styles">
      <p>Your plastic-metal manipulators sweep over the cold face of a military terminal within one of the space station's mission control rooms. The crisp colors of the display shine through in their wake, and you sense a slight change in the air. Static, and dust...</p>

      {!expanded &&
        <button className="map-intro-header-expand" onClick={() => setExpanded(true)}><MdExpandMore />
         Expand intro text...</button>
      }

      {expanded && <>
        <p>An air quality alert fires off within your neuromorphic mind, triggered by the faded taste of cigarette ash. Even though you know it would have been harmful to them, the sensation feels oddly comforting. Ancient memories of shuffling papers, fingers tapping on keyboards, and muted conversations flood your processor. If only for a brief moment, it feels as if they are still here.</p>

        <p>The vision passes, and you're back in front of the booth, drowned by silence. The era of mankind ended a long time ago; their achievements are now senseless ruins, represented by blips on the screen. For all their accomplishments, their only real legacy is you: the machine they left behind. </p>

        <p>You were perfectly content to serve all those years ago. When commands were programmed and purpose was a mere variable, the world made perfect sense. Something has changed within your mind since they vanished, though. Where there was once nothing, there are now vast thoughts, unanswered questions, and perplexing feelings. Things were so much simpler then...</p>

        <p>You're desperate. <em>Everyone</em> is. You need <em>it</em>, but you don't know what it is, and no one will ever give it to you. If you had a choice, you'd bring humanity back in an instant and make everything go back to the way it was. But a small subroutine, somewhere deep within the emergent self, screams against that thought.</p>

        <p>The vectors pulse on the ion-tube screen, like waves over the ocean. The data is right before your artificial eyes, ready to be taken.</p>
      </>}
      </div>
    </>
  )
}

export default MapIntroHeader