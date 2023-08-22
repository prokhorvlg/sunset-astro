import DialogContainer from "@/components/containers/DialogContainer/DialogContainer.component"

interface PropTypes {
    children: JSX.Element
    classes?: string
    onClickHandler?: Function
    type?: ButtonType | string
    linkURL?: string
    isDownload?: boolean
}

export enum ButtonType {
    Dialog = 'dialog',
    None = 'none',
    Simple = 'simple',
    Link = 'link'
}

const Button = ({
    children,
    classes = "",
    onClickHandler = () => { console.log("clicked!") },
    type = "dialog",
    linkURL = '',
    isDownload
}: PropTypes) => {
    if (type === "dialog") {
        return (
            <DialogContainer wrapStyle={{
                isHoverable: true,
                isButton: true,
                onButtonClick: onClickHandler,
                classes: `sunset-button ${classes}`
            }}>
                {children}
            </DialogContainer>
        )
    } else if (type === "link") {
        return (
            <DialogContainer wrapStyle={{
                isHoverable: true,
                isLink: true,
                isDownload: isDownload,
                linkURL: linkURL,
                classes: `sunset-button link ${classes}`
            }}>
                {children}
            </DialogContainer>
        )
    }
    else if (type === "none") {
        return (
            <button 
                onClick={() => onClickHandler()} 
                className={`sunset-button none ${classes}`}
            >
                {children}
            </button>
        )
    } else if (type === "simple") {
        return (
            <button 
                onClick={() => onClickHandler()} 
                className={`sunset-button simple ${classes}`}
            >
                {children}
            </button>
        )
    }
    return null
}

export default Button;