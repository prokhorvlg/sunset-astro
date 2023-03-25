const SimpleContainer = ({
    children,
    classes = ""
}) => {
    return (
        <div className={`simple-container ${classes}`}>
            <div className="simple-container-inner">
                {children}
            </div>
        </div>
    )
}

export default SimpleContainer