import { faDeviantart, faDiscord, faInstagram, faPatreon, faRedditAlien, faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { ScrollParallax } from 'react-just-parallax'
import { PostsIcon, GameIcon, PrintsIcon } from '@/data/sharedIcons'
import FullWidthWrapper from '@/components/wrappers/FullWidthWrapper.component'
import DialogContainer, { DialogHeaderStyle } from '@/components/containers/DialogContainer/DialogContainer.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faDownLong, faList, faPrint, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/common/Button/Button.component'
import { CommonLinks } from '@/data/Common'

const HomeHub = ({
    variant = "home"
}) => {
    const isConclusion = variant === "conclusion"
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
                            {isConclusion ? 
                                <>
                                    <h2>You made it through the entire introduction!</h2>
                                    <p>Here's a hub for the project.</p>
                                </> :
                                <>
                                    <h2>Congrats, you made it through the pitch!</h2>
                                    <p>There's more, but that’s all you need to have a basic understanding of the project.</p>
                                    <p>From here, there are a few ways to go.</p>
                                </>
                            }
                        </div>
                        <div className="hub-cols">
                            {isConclusion ? 
                                <HubCol
                                    style="aqua"
                                    title="Well done 😊"
                                    tinyText="you get a tie"
                                >
                                    <p>You've experienced the intro! Now, off to the rest of the project.</p>
                                </HubCol> :
                                <HubCol
                                    style="aqua"
                                    title="Just keep scrolling!"
                                    tinyText="uniserve bears gifts"
                                >
                                    <p>Experience the full introduction.</p>
                                    <p className="grow">Step into the role of a robot and get a tour of the universe, lead by Curator UNISERVE!</p>
                                    <div className="spacer"></div>

                                    <a href="#top-of-uniserve-intro" className="scroll-arrow">
                                        <FontAwesomeIcon icon={faArrowDown} />
                                    </a>
                                </HubCol>
                            }
                            <HubCol
                                title="Browse around 👀"
                                tinyText="the exhibit is open"
                            >
                                <p>Explore a gallery of all the released Sunset content.</p>
                                <HubLink url={CommonLinks.posts} text="Posts" />
                                <div className="spacer"></div>
                                <p>The crew is working on a 🕹️ metroidvania game set in this universe!</p>
                                {/*<HubLink url={CommonLinks.game} text="Game" />*/}
                            </HubCol>
                            <HubCol
                                title="Support the project ❤️"
                                tinyText="use your 'human_currency_tokens'"
                            >
                                <p>Access behind-the-scenes content and channels, see posts early!</p>
                                <HubLink url={CommonLinks.patreon} text="Patreon" icon={faPatreon} />
                                <div className="spacer"></div>
                                <p>Buy art prints and hang them onto your wall through INPRNT.</p>
                                <HubLink url={CommonLinks.prints} text="INPRNT" icon={faPrint} />
                            </HubCol>
                            <HubCol
                                title="Join the community 😀"
                                tinyText="the other machines await you..."
                            >
                                <p>A great place to talk retrofuturism and share your own work.</p>
                                <HubLink url={CommonLinks.discord} text="Discord" icon={faDiscord} />
                                <div className="spacer"></div>
                                <p>Check out your favorite socials:</p>
                                <HubSocials />
                            </HubCol>
                        </div>
                    </div>
                </div>
            </DialogContainer>
        </FullWidthWrapper>
    )
}

const HubCol = ({
    style = '',
    title = '',
    children,
    tinyText = ''
}) => {
    return (
        <div className={`hub-col ${style}`}>
            <div className="tiny-code">{tinyText}</div>
            <h3 className={`${style}`}>{title}</h3>
            {children}
        </div>
    )
}

interface HubLinkProps {
    url: string
    text: string
    icon?: IconDefinition
}
const HubLink = ({
    url = '',
    text = '',
    icon
}: HubLinkProps) => {
    return (
        <a href={url} target="_blank" className="hub-link">
            {icon ? <FontAwesomeIcon className="inner-icon" icon={icon} /> : null}
            <span>{text}</span>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </a>
    )
}

const HubSocials = () => {
    return (
        <ul className="hub-socials">
            <HubSocial url={CommonLinks.twitter} icon={faTwitter} />
            <HubSocial url={CommonLinks.instagram} icon={faInstagram} />
            <HubSocial url={CommonLinks.subreddit} icon={faRedditAlien} />
            <HubSocial url={CommonLinks.deviantart} icon={faDeviantart} />
            <HubSocial url={CommonLinks.tumblr} icon={faTumblr} />
        </ul>
    )
}
const HubSocial = ({
    url,
    icon
}) => {
    return (
        <li><a href={url} target="_blank" className="hub-link-icon"><FontAwesomeIcon icon={icon} /></a></li>
    )
}

export default HomeHub



// twitter, insta, subreddit, deviantart, tumblr