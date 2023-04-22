import DialogContainer, { DialogHeaderStyle } from "@/components/containers/DialogContainer/DialogContainer.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { faClose, faFile, faList, faMinus } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TransitionGradient from "@/components/home/TransitionGradient.component"

interface PropTypes {
    title?: string
    subtext?: string
    children: any,
    image?: string
    pullDown?: boolean // artificially heighten and reduce margin?
    showHeaderBar?: boolean
}

const PageHeading = ({
    title,
    subtext,
    children = <></>,
    image,
    pullDown,
    showHeaderBar = true
}: PropTypes) => {
    return (
        <FullWidthWrapper classes={`heading-area page ${pullDown ? 'hidden-header' : null}`} width={WrapperMax.MaxWidth}>
            {showHeaderBar ? 
                <div className="heading-crown-wrapper">
                    <div className="heading-crown">
                        <div className="section">
                        <FontAwesomeIcon icon={faList} className="main-icon"/>
                            <div className="lines">
                                <div className="line" />
                                <div className="line" />
                                <div className="line" />
                                <div className="line" />
                                <div className="line" />
                            </div>
                        </div>
                        <span className="crown-title code">system content directory</span>
                        <div className="section">
                            <div className="lines">
                                <div className="line" />
                                <div className="line" />
                                <div className="line" />
                                <div className="line" />
                                <div className="line" />
                            </div>
                            <div className="crown-button">
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                            <div className="crown-button close">
                                <FontAwesomeIcon icon={faClose} />
                            </div>
                        </div>
                    </div>
                </div>
            : null}
            <TransitionGradient 
                direction="to-top" 
            />
            <div className="main-area-wrapper">
                <div className={`main-area`}>
                    <div className="heading-content">
                        {(image === 'computer-blinking') ?
                            <div className="heading-image posts">
                                <img src='/images/Micro_Posts_Screen (4).gif' className="screen-gif" width="208" />
                                <img src='/images/Micro_Posts (11).png' className="computer" width="800" />
                            </div>
                            : null
                        }
                        <h1 className="title">{title}</h1>
                        <p className="description">{subtext}</p>
                        {children}
                    </div>
                </div>
            </div>
        </FullWidthWrapper>
    )
}

export default PageHeading