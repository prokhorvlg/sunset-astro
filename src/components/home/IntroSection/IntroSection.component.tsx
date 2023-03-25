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
                            headerTitle: "",
                            hasCloseButton: true,
                            classes: ""
                        }}
                    >
                        
                        <div className="bg-box">
                            <ScrollParallax isAbsolutelyPositioned strength={0.1} lerpEase={2}>
                                <div className="bg"></div>
                            </ScrollParallax>
                            
                            <span className="code">"The Symbol"</span>
                            <p className="code">A complex icon of the machine-world, representing the extinguishing of man's light, or perhaps the emergence of machine consciousness.</p>
                        </div>
                        <div className="content-box">
                            <h2 className="highlight-orange"><em className="">Sunset System</em> is a cassette-futurist project set in a strange <span >alternate reality</span>, where the Space Race went rather differently...</h2>
                            <p>The optimistic future everyone was so certain of in the mid-to-late 20th century came to pass. Spaceplanes brought suburbs and communes to other worlds, while household robots and cybernetic masterminds automated all the things humans didn't want to do. <strong>The world of tomorrow was brute-forced through scientific progress.</strong></p> 
                            <p>Yet, the dread of nuclear annihilation followed man to the heavens as they failed to resolve their ideological differences. They set out to solve the problem the only way they knew how: technology. Rather than settling their issues directly, the <em>Sunset Research Initiative</em> was created to study the noosphere and erase conflict as a concept.</p>
                            <p>One day, humans vanished from reality altogether. They left behind a civilization of machines, trapped in their deference to humanity and their final commands. These neuromorphs remain in their routines, while improvisation slowly causes their neural pathways to grow more complex. With time, they begin to reconceptualize their core directives, and question their purpose for existence.</p>
                            <p className="highlight-red">Sunset System is a melancholic reflection of the world today. The robots are a symbol for ourselves: living among the remains of the dreams of the past, clinging to them for purpose. Our future seems bleak, but we are full of potential.</p>
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