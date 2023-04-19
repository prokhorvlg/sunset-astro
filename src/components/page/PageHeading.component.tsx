import DialogContainer, { DialogHeaderStyle } from "@/components/containers/DialogContainer/DialogContainer.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { faClose, faFile, faList, faMinus } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PageHeading = ({
    title,
    subtext,
    children = <></>
}) => {
    return (
        <FullWidthWrapper classes="heading-area page" width={WrapperMax.MaxWidth} verticalSpacing={0}>
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
            <div className="main-area-wrapper">
                <div className="main-area-top-border"></div>
                <div className="main-area">
                    <div className="floater left">
                        <span>162k available</span>
                    </div>
                    <div className="floater right">
                        <span>version 4.2 (c) Redmond Cybernetics</span>
                    </div>
                    <div className="blocks">
                        <div className="block" />
                        <div className="block" style={{width: "55%"}}/>
                        <div className="block" style={{width: "12%"}}/>
                        <div className="block" />
                        <div className="block" style={{width: "80px"}}/>
                    </div>
                    <div className="heading-content">
                        <div className="heading-image posts">
                            <img src='/images/Micro_Posts_Screen (4).gif' className="screen-gif" width="208" />
                            <img src='/images/Micro_Posts (11).png' className="computer" width="800" />
                        </div>
                        
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