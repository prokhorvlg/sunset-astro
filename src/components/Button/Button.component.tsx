import './Button.scss'

interface PropTypes {
    children: JSX.Element
    style?: ButtonStyle
}

export enum ButtonStyle {
    Plain = "plain",
    BorderSnap = "border-snap"
}

const Button = ({
    children,
    style = ButtonStyle.Plain
}: PropTypes) => {
    return (
        <button className={`sunset-button ${style}`}>
            <div className="background"></div>
            <div className="main-border"></div>
            <span>{children}</span>
        </button>
    )
}

export default Button;