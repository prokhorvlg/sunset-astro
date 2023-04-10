import { createRef, useEffect, useRef, useState } from "react";
import {
    faPatreon,
    faTwitter,
    faInstagram,
    faRedditAlien,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
    faHome,
    faImage,
    faList,
    faGamepad,
    faBars,
    faClose,
} from "@fortawesome/free-solid-svg-icons";
import HeaderLink, {
    HeaderLinkType,
} from "@/components/layout/Header/components/HeaderLink.component";
import DotGrid from "@/components/common/DotGrid.component";
import { CommonLinks, CommonText } from "@/data/Common";
import Button, {
    ButtonType,
} from "@/components/common/Button/Button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from "body-scroll-lock";

interface PropTypes {
    currentPage?: string;
}

const SunsetHeader = ({ currentPage = "" }: PropTypes) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const targetRef = useRef(null);

    useEffect(() => {
        if (isNavOpen) {
            disableBodyScroll(targetRef.current);
        } else {
            enableBodyScroll(targetRef.current);
        }
    }, [isNavOpen]);
    return (
        <div className="sunset-header-container">
            <div className="sunset-header">
                <div className="header-wrap main-segment-wrap filled">
                    <div className="main-segment">
                        <div className="main-segment-stipple left">{<DotGrid />}</div>
                        <div className="main-segment-title">
                            {/*<BlinkingGrid />*/}
                            <img
                                className="main-logo"
                                src="/images/main-logo-alone.png"
                                height="55"
                                width="55"
                                alt="Main Logo"
                            />
                            <div className="main-segment-title-text">
                                Sunset <span>System</span>
                            </div>
                        </div>
                        <div className="main-segment-stipple right">{<DotGrid />}</div>
                    </div>
                </div>
                <Button
                    classes={`menu ${isNavOpen ? "open" : ""}`}
                    type={ButtonType.Simple}
                    onClickHandler={() => setIsNavOpen(!isNavOpen)}
                >
                    <span className="inner-icons">
                        <FontAwesomeIcon
                            icon={faBars}
                            className={`${isNavOpen ? "" : "visible"}`}
                        />
                        <FontAwesomeIcon
                            icon={faClose}
                            className={`close ${isNavOpen ? "visible" : ""}`}
                        />
                    </span>
                </Button>
                <div
                    className={`header-wrap links-segment-wrap ${isNavOpen ? "open" : ""
                        }`}
                    ref={targetRef}
                >
                    <div className="mobile-heading code">
                        <div className="lines"></div>
                        <span>Navigation</span>
                        <div className="lines"></div>
                        <div className="bottom-curve"></div>
                    </div>
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
                    <div className="mobile-heading code">
                        <div className="lines"></div>
                        <span>External Links</span>
                        <div className="lines"></div>
                        <div className="bottom-curve"></div>
                    </div>
                </div>
                <div className={`mobile-background ${isNavOpen ? "open" : ""}`}></div>
            </div>
        </div>
    );
};

const MainMenu = () => {
    return null;
};

export default SunsetHeader;
