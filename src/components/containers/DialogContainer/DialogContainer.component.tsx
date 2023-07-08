
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DiagonalLinesBar from "./components/DiagonalLinesBar.component"
import "./DialogContainer.scss"

export enum DialogHeaderStyle {
    none,
    MacintoshStraight,
    CautionDiagonal
}

export enum DialogTheme {
    LightDarkOrange = "light-dark-orange"
}

export interface DialogWrapStyle {
    headerStyle?: DialogHeaderStyle
    headerTitle?: string
    hasCloseButton?: boolean

    theme?: DialogTheme
    classes?: string

    isHoverable?: boolean

    isLink?: boolean
    linkURL?: string
    isExternal?: boolean

    isButton?: boolean
    onButtonClick?: Function
}

interface PropTypes {
    children: any,
    wrapStyle: DialogWrapStyle
}

// Template component for content to be wrapped in a dialog-style border.
const DialogContainer = ({
    children,
    wrapStyle
}: PropTypes) => {
    if (wrapStyle.isLink) {
        return (
            <a className={`dialog-wrap hover
                    ${wrapStyle.theme ? wrapStyle.theme : ''}
                    ${wrapStyle.classes}
                `}
                href={wrapStyle.linkURL}
                target={wrapStyle.isExternal ? "_blank" : "_self"}
            >
                <DialogInner wrapStyle={wrapStyle} children={children}/>
            </a>
        )
    } else if (wrapStyle.isButton) {
        const onButtonClick = wrapStyle.onButtonClick || (() => {})
        return (
            <button className={`dialog-wrap hover
                    ${wrapStyle.theme ? wrapStyle.theme : ''}
                    ${wrapStyle.classes}
                `}
                onClick={() => onButtonClick()}
            >
                <DialogInner wrapStyle={wrapStyle} children={children}/>
            </button>
        )
    }
    return (
        <div className={`dialog-wrap
            ${wrapStyle.isHoverable ? 'hover' : ''} 
            ${wrapStyle.theme ? wrapStyle.theme : ''}
            ${wrapStyle.classes}
        `}>
            <DialogInner wrapStyle={wrapStyle} children={children}/>
        </div>
    )
}

const DialogInner = ({
    wrapStyle,
    children
}) => {
    return (
        <>
            <div className="dialog-wrap-slot">
                {(wrapStyle.headerStyle === DialogHeaderStyle.MacintoshStraight) ?
                    <MacintoshStraightHeader wrapStyle={wrapStyle} />
                    : ""}
                {(wrapStyle.headerStyle === DialogHeaderStyle.CautionDiagonal) ?
                    <CautionDiagonalHeader wrapStyle={wrapStyle} />
                    : ""}

                <div className="dialog-content">
                    {children}
                </div>
            </div>
            <div className="border right"></div>
        </>
    )
}

const MacintoshStraightHeader = ({
    wrapStyle
}) => {
    const titleHasLength = wrapStyle.headerTitle !== ""
    return (
        <div className="macintosh-header filled">
            <div className="macintosh-header-lines left">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            {titleHasLength && <><div className="macintosh-header-title">
                <span>{wrapStyle.headerTitle}</span>
            </div>
            <div className="macintosh-header-lines right">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div></>}
            <button className={`crown-button close macintosh-header-close`}>
                <FontAwesomeIcon icon={faClose} />
            </button>
        </div>
    )
}

const CautionDiagonalHeader = ({
    wrapStyle
}) => {
    const diagonalLength = 50
    return (
        <div className="caution-diagonal-header diagonal-lines-container">
            <DiagonalLinesBar length={diagonalLength} />
            <div className="header-title">
                <span>{wrapStyle.headerTitle}</span>
            </div>
            <DiagonalLinesBar length={diagonalLength} />
        </div>
    )
}

export default DialogContainer