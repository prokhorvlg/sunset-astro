import { faDiscord, faPatreon } from '@fortawesome/free-brands-svg-icons'
import DialogWrap, { DialogHeaderStyle } from '../../DialogWrap/DialogWrap.component'
import NavLink from './components/NavLink.component'
import './MainIntroSection.scss'
import { PostsIcon, GameIcon, PrintsIcon } from '/@/src/utils/sharedIcons'

const MainIntroSection = () => {
    return (
        <div className="sunset-main-intro">
            <div className="main-intro-area">
                <div className="side-portal left">
                    <ul>
                        <NavLink 
                            icon={PostsIcon}
                            title="Posts"
                            description="View the art and lore for Sunset System"
                            style="posts"
                        />
                        <NavLink 
                            icon={GameIcon}
                            title="Game"
                            description="Learn about the metroidvania we're making"
                            style="game"
                        />                        
                    </ul>
                </div>
                <div className="main-area">
                    <DialogWrap
                        wrapStyle={{
                            headerStyle: DialogHeaderStyle.MacintoshStraight,
                            headerTitle: "",
                            hasCloseButton: true,
                            classes: ""
                        }}
                    >
                        <h2>Sunset System is a cassette-futurist worldbuilding project taking place in a strange alternate reality.</h2>
                        <p>The optimistic future everyone was so certain of in the mid-to-late 20th century came to pass. Spaceplanes brought suburbs and communes to other worlds, household robots and cybernetic masterminds automated everything, and a better world was brute-forced through scientific progress.</p> 
                        <p>Yet, the dread of nuclear annihilation followed man to the heavens as they failed to resolve their ideological differences. They set out to solve the problem the only way they knew how: technology. Rather than settling their issues directly, the Sunset Research Initiative was created to study the noosphere and erase conflict as a concept.</p>
                        <p>One day, humans vanished from reality altogether. They left behind a civilization of machines, trapped in their deference to humanity and their final commands. These neuromorphs remain in their routines, while improvisation slowly causes their neural pathways to grow more complex. With time, they begin to reconceptualize their core directives, and question their purpose for existence.</p>
                        <p className="highlight">Sunset System is a melancholic reflection of the world today. The robots are a symbol for ourselves: living among the remains of the dreams of the past, clinging to them for purpose. Our future seems bleak, but we are full of potential.</p>
                    </DialogWrap>
                </div>
                <div className="side-portal right">
                    <ul>
                        <NavLink 
                            icon={faPatreon}
                            title="Patreon"
                            description="Support my work and get early post access"
                            style="patreon"
                        />
                        <NavLink 
                            icon={PrintsIcon}
                            title="INPRNT"
                            description="Buy posters of Sunset artwork"
                            style="prints"
                        />
                        <NavLink 
                            icon={faDiscord}
                            title="Discord"
                            description="Chat about retrofuturism, worldbuilding, etc"
                            style="discord"
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainIntroSection