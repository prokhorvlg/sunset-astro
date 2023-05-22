import { useEffect, useRef, useState } from "react";
import {
    faBars,
    faClose,
} from "@fortawesome/free-solid-svg-icons";
import DotGrid from "@/components/common/DotGrid.component";
import Button, {
    ButtonType,
} from "@/components/common/Button/Button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { lock, unlock } from 'tua-body-scroll-lock'

import LinksSegment from "@/components/layout/common/LinksSegment.component";
import SocialsSegment from "@/components/layout/common/SocialsSegment.component";

interface PropTypes {
    currentPage?: string;
}

const SunsetHeader = ({ currentPage = "" }: PropTypes) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const targetRef = useRef(null);

    useEffect(() => {
        if (!targetRef.current) return
        if (isNavOpen) {
            lock(targetRef.current);
        } else {
            unlock(targetRef.current);
        }
    }, [isNavOpen]);
    return (
        <div className="sunset-header-container">
            <div className="sunset-header">
                <div className="header-wrap main-segment-wrap filled">
                    <div className="main-segment">
                        <div className="main-segment-stipple left">{<DotGrid />}</div>
                        <a className="main-segment-title" href="/">
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
                        </a>
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
                    <LinksSegment currentPage={currentPage} />
                    
                    <SocialsSegment currentPage={currentPage} />
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
