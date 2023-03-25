import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { faPatreon, faTwitter, faInstagram, faRedditAlien, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faHome, faImage, faList, faGamepad } from '@fortawesome/free-solid-svg-icons'
import HeaderLink from "@/components/layout/Header/components/HeaderLink.component";
import DotGrid from "@/components/common/DotGrid.component";

const SunsetHeader = () => {
    return (
      <div className="sunset-header-container">
        <div className="sunset-header">
            <div className="header-wrap main-segment-wrap filled">
                <div className="main-segment">
                    <div className="main-segment-stipple left"><DotGrid /></div>
                    <div className="main-segment-title">
                        {/*<BlinkingGrid />*/}
                        <img className="main-logo" src="/images/main-logo-alone.png" />
                        <div className="main-segment-title-text">Sunset <span>System</span></div>
                    </div>
                    <div className="main-segment-stipple right"><DotGrid /></div>
                </div>
            </div>
            <div className="header-wrap links-segment-wrap">
                <div className="links-segment">
                    <ul>
                        <HeaderLink title="Home" active={true} icon={faHome}/>
                        <HeaderLink title="Posts" icon={faList}/>
                        <HeaderLink title="Game" icon={faGamepad} />
                    </ul>
                </div>
                <div className="socials-segment">
                    <ul>
                      <li><a><FontAwesomeIcon icon={faPatreon} /></a></li>
                      <li><a><FontAwesomeIcon icon={faImage} /></a></li>
                      <li><a><FontAwesomeIcon icon={faDiscord} /></a></li>
                      <li><a><FontAwesomeIcon icon={faRedditAlien} /></a></li>
                      <li><a><FontAwesomeIcon icon={faTwitter} /></a></li>
                      <li><a><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
}

const BlinkingGrid = () => {
    const [gridState, setGridState] = useState(randomizeGridState());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setGridState(randomizeGridState());
        }, 500);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
  
    return (
      <div className="main-segment-title-blinky">
        {gridState.map((squareState, index) => (
          <div
            key={index}
            className={`square ${squareState}`}
          ></div>
        ))}
      </div>
    );
  };
  

enum SquareState {
    UNLIT = 'unlit',
    YELLOW = 'yellow',
    RED = 'red',
  };
  
  const randomizeGridState = () => {
    const gridState: SquareState[] = [];
    for (let i = 0; i < 9; i++) {
      gridState.push(SquareState.UNLIT);
    }
  
    // set 4 red squares
    let redCount = 0;
    while (redCount < 4) {
      const index = Math.floor(Math.random() * 9);
      if (gridState[index] === SquareState.UNLIT) {
        gridState[index] = SquareState.RED;
        redCount++;
      }
    }
  
    // set 3 yellow squares
    let yellowCount = 0;
    while (yellowCount < 3) {
      const index = Math.floor(Math.random() * 9);
      if (gridState[index] === SquareState.UNLIT) {
        gridState[index] = SquareState.YELLOW;
        yellowCount++;
      }
    }
  
    // set 2 unlit squares
    let unlitCount = 0;
    while (unlitCount < 2) {
      const index = Math.floor(Math.random() * 9);
      if (gridState[index] === SquareState.UNLIT) {
        gridState[index] = SquareState.UNLIT;
        unlitCount++;
      }
    }
  
    return gridState;
  };
  

export default SunsetHeader;