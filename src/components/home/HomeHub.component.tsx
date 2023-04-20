import { faDiscord, faPatreon, faRedditAlien } from '@fortawesome/free-brands-svg-icons'
import { ScrollParallax } from 'react-just-parallax'
import { PostsIcon, GameIcon, PrintsIcon } from '@/utils/sharedIcons'
import FullWidthWrapper from '@/components/wrappers/FullWidthWrapper.component'
import DialogContainer, { DialogHeaderStyle } from '@/components/containers/DialogContainer/DialogContainer.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/common/Button/Button.component'

const HomeHub = () => {
    return (
        <FullWidthWrapper classes='home-hub'>
            <DialogContainer
                wrapStyle={{
                    headerStyle: DialogHeaderStyle.MacintoshStraight,
                    headerTitle: "project hub",
                    hasCloseButton: true,
                    classes: "hub-dialog"
                }}
            >
                <div className="hub-container">
                    <div className="hub-main-heading">
                        <div className="hub-border">
                            <h2>Congrats, you made it through the pitch!</h2>
                            <p>There's more, but that’s all you need to have a basic understanding of the project.</p>
                            <p className="highlight-red">From here, there are a few ways to go.</p>
                        </div>
                        <div className="hub-cols">
                            <div className="hub-col aqua">
                                <h3 className="aqua">Just keep scrolling!</h3>
                                <p>Experience the full introduction. Step into the role of a robot and get a tour, lead by the curator UNISERVE!</p>
                                <FontAwesomeIcon icon={faDownLong} />
                            </div>
                        <div className="hub-col">
                            <h3 className="standard">Browse the website</h3>
                            <p>Go directly to the Posts page and explore all the content I’ve shared.</p>
                            <Button><>Posts</></Button>
                            <p>The crew is working on a 🕹️ metroidvania set in this universe!</p>
                        </div>
                        <div className="hub-col">
                            <h3 className="standard">Support the project ❤️</h3>
                            <p>Subscribe to the Patreon to get early access to posts, and a cool Discord role!</p>
                            <p>Buy art prints and hang them onto your wall through INPRNT.</p>
                        </div>
                        <div className="hub-col">
                            <h3 className="standard">Join the community 😀</h3>
                            <p>The Discord server is a great place to talk Sunset, share your own work, and pin retrofuturistic inspo.</p>
                            <p>Follow me on my socials...</p>
                        </div>
                    </div>
                    </div>

                    
                </div>
            </DialogContainer>

            
        </FullWidthWrapper>
    )
}

export default HomeHub