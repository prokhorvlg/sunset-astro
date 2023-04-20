import { faDiscord, faPatreon, faRedditAlien } from '@fortawesome/free-brands-svg-icons'
import { ScrollParallax } from 'react-just-parallax'
import DialogContainer, { DialogHeaderStyle } from '../../containers/DialogContainer/DialogContainer.component'
import NavLink from './components/NavLink.component'
import { PostsIcon, GameIcon, PrintsIcon } from '@/utils/sharedIcons'

const IntroSection = () => {
    return (
        <div className="sunset-main-intro">
            <div className="main-intro-area">
                
                <div className="main-area">
                    <DialogContainer
                        wrapStyle={{
                            headerStyle: DialogHeaderStyle.MacintoshStraight,
                            headerTitle: "links hub",
                            hasCloseButton: true,
                            classes: ""
                        }}
                    >
                        
                        {/*<div className="bg-box">
                            <ScrollParallax isAbsolutelyPositioned lerpEase={1} enableOnTouchDevice={false}>
                                <div className="bg"></div>
                            </ScrollParallax>
                            
                            <span className="code">"The Symbol"</span>
                            <p className="code">A complex icon of the machine-world, representing the extinguishing of man's light, or perhaps the emergence of machine consciousness.</p>
                    </div>*/}
                        <div className="content-box">
                            <p></p>
                        </div>
                        
                    </DialogContainer>
                </div>
                <div className="side-portal right">
                    <ul>
                        <NavLink 
                            icon={PostsIcon}
                            title="Posts"
                            description="View the art and lore for Sunset System"
                            style="melancholic"
                        />
                        <NavLink 
                            icon={GameIcon}
                            title="Game"
                            description="Learn about the metroidvania we're making"
                            style="melancholic"
                        />   
                        <NavLink 
                            icon={faPatreon}
                            title="Patreon"
                            description="Support my work and get early post access"
                            style=""
                        />
                        <NavLink 
                            icon={PrintsIcon}
                            title="INPRNT"
                            description="Buy posters of Sunset artwork"
                            style=""
                        />
                        <NavLink 
                            icon={faDiscord}
                            title="Discord"
                            description="Chat about retrofuturism, worldbuilding, etc"
                            style=""
                        />
                        <NavLink 
                            icon={faRedditAlien}
                            title="Subreddit"
                            description="Participate in the Sunset community"
                            style=""
                        />                     
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default IntroSection