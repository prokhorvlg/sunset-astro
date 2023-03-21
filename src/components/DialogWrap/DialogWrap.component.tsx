
import DiagonalLinesBar from "./components/DiagonalLinesBar.component"
import './DialogWrap.scss'

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
    hasHover?: boolean
    theme?: DialogTheme
    classes?: string
}

interface PropTypes {
    children: any,
    wrapStyle: DialogWrapStyle
}

// Template component for content to be wrapped in a dialog-style border.
// TODO support a gradient border?? ehh....
const DialogWrap = ({
    children,
    wrapStyle
}: PropTypes) => {
    return (
        <div className={`dialog-wrap
            ${wrapStyle.hasHover ? 'hover' : ''} 
            ${wrapStyle.theme ? wrapStyle.theme : ''}
            ${wrapStyle.classes}
        `}>
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
            <div className="border bottom"></div>
        </div>
    )
}

const MacintoshStraightHeader = ({
    wrapStyle
}) => {
    const titleHasLength = wrapStyle.headerTitle !== ""
    return (
        <div className="macintosh-header">
            <div className="macintosh-header-lines left">
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
            </div></>}
            <div className="macintosh-header-close"></div>
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

export default DialogWrap