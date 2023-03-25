import { useEffect, useState } from "react";
import { faPatreon, faTwitter, faInstagram, faRedditAlien, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faHome, faImage, faList, faGamepad } from '@fortawesome/free-solid-svg-icons'
import HeaderLink, { HeaderLinkType } from "@/components/layout/Header/components/HeaderLink.component";
import DotGrid from "@/components/common/DotGrid.component";
import { CommonText } from "@/data/CommonText";

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
                        <HeaderLink 
                          title="Home" 
                          active={true} 
                          icon={faHome} 
                          target="/"
                          dropText={CommonText.home}
                        />
                        <HeaderLink 
                          title="Posts" 
                          icon={faList}
                          target="/posts"
                          dropText={CommonText.posts}
                        />
                        <HeaderLink
                          title="Game" 
                          icon={faGamepad}
                          target="/game"
                          dropText={CommonText.game}
                        />
                    </ul>
                </div>
                <div className="socials-segment">
                    <ul>
                      <HeaderLink
                        title="Patreon" 
                        icon={faPatreon}
                        target="/game"
                        dropText={CommonText.patreon}
                        type={HeaderLinkType.Icon}
                      />
                      <HeaderLink
                        title="Prints" 
                        icon={faImage}
                        target="/game"
                        dropText={CommonText.prints}
                        type={HeaderLinkType.Icon}
                      />
                      <HeaderLink
                        title="Discord" 
                        icon={faDiscord}
                        target="/game"
                        dropText={CommonText.discord}
                        type={HeaderLinkType.Icon}
                      />
                      <HeaderLink
                        title="Subreddit" 
                        icon={faRedditAlien}
                        target="/game"
                        dropText={CommonText.subreddit}
                        type={HeaderLinkType.Icon}
                      />
                      <HeaderLink
                        title="Twitter" 
                        icon={faTwitter}
                        target="/game"
                        dropText={CommonText.twitter}
                        type={HeaderLinkType.Icon}
                      />
                      <HeaderLink
                        title="Instagram" 
                        icon={faInstagram}
                        target="/game"
                        dropText={CommonText.instagram}
                        type={HeaderLinkType.Icon}
                      />
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