import DialogContainer from "@/components/containers/DialogContainer/DialogContainer.component"

interface PropTypes {
    children: JSX.Element
    classes?: string
    onClickHandler?: Function
}

const Button = ({
    children,
    classes = "",
    onClickHandler = () => { console.log("clicked!") }
}: PropTypes) => {
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
}

export default Button;