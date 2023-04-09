import { useEffect, useState } from "react";
import { faPatreon, faTwitter, faInstagram, faRedditAlien, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faHome, faImage, faList, faGamepad } from '@fortawesome/free-solid-svg-icons'
import HeaderLink, { HeaderLinkType } from "@/components/layout/Header/components/HeaderLink.component";
import DotGrid from "@/components/common/DotGrid.component";
import { CommonLinks, CommonText } from "@/data/Common";
import Button from "@/components/common/Button/Button.component";

interface PropTypes {
  currentPage?: string
}

const SunsetHeader = ({
  currentPage = ""
}: PropTypes) => {
  return (
    <div className="sunset-header-container">
      <div className="sunset-header">
          <div className="header-wrap main-segment-wrap filled">
              <div className="main-segment">
                  <div className="main-segment-stipple left">{<DotGrid />}</div>
                  <div className="main-segment-title">
                      {/*<BlinkingGrid />*/}
                      <img className="main-logo" src="/images/main-logo-alone.png" height="55" width="55" alt="Main Logo"/>
                      <div className="main-segment-title-text">Sunset <span>System</span></div>
                  </div>
                  <div className="main-segment-stipple right">{<DotGrid />}</div>
              </div>
          </div>
          <Button classes="menu">
            <span>Menu</span>
          </Button>
          <div className="header-wrap links-segment-wrap">
              <div className="links-segment">
                  <ul>
                      <HeaderLink 
                        title="Home" 
                        active={currentPage === "/"} 
                        icon={faHome} 
                        target={CommonLinks.home}
                        dropText={CommonText.home}
                      />
                      <HeaderLink 
                        title="Posts"
                        active={currentPage === "/posts"} 
                        icon={faList}
                        target={CommonLinks.posts}
                        dropText={CommonText.posts}
                      />
                      <HeaderLink
                        title="Game" 
                        active={currentPage === "/game"} 
                        icon={faGamepad}
                        target={CommonLinks.game}
                        dropText={CommonText.game}
                      />
                      <HeaderLink 
                        title="Patrons" 
                        active={currentPage === "/"} 
                        icon={faHome} 
                        target={CommonLinks.home}
                        dropText={CommonText.home}
                      />
                  </ul>
              </div>
              <div className="socials-segment">
                  <ul>
                    <HeaderLink
                      title="Patreon" 
                      icon={faPatreon}
                      target={CommonLinks.patreon}
                      dropText={CommonText.patreon}
                      type={HeaderLinkType.Icon}
                      external={true}
                    />
                    <HeaderLink
                      title="Prints" 
                      icon={faImage}
                      target={CommonLinks.prints}
                      dropText={CommonText.prints}
                      type={HeaderLinkType.Icon}
                      external={true}
                    />
                    <HeaderLink
                      title="Discord" 
                      icon={faDiscord}
                      target={CommonLinks.discord}
                      dropText={CommonText.discord}
                      type={HeaderLinkType.Icon}
                      external={true}
                    />
                    <HeaderLink
                      title="Subreddit" 
                      icon={faRedditAlien}
                      target={CommonLinks.subreddit}
                      dropText={CommonText.subreddit}
                      type={HeaderLinkType.Icon}
                      external={true}
                    />
                    <HeaderLink
                      title="Twitter" 
                      icon={faTwitter}
                      target={CommonLinks.twitter}
                      dropText={CommonText.twitter}
                      type={HeaderLinkType.Icon}
                      external={true}
                    />
                    <HeaderLink
                      title="Instagram" 
                      icon={faInstagram}
                      target={CommonLinks.instagram}
                      dropText={CommonText.instagram}
                      type={HeaderLinkType.Icon}
                      external={true}
                    />
                  </ul>
              </div>
          </div>
      </div>
    </div>
  )
}

const MainMenu = () => {
  return (
    null
  )
}

export default SunsetHeader;