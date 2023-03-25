const FullWidthWrapper = ({
    children,
    classes = ""
}) => {
    return (
        <div className={`full-width-wrapper ${classes}`}>
            <div className="full-width-wrapper-inner">
                {children}
            </div>
        </div>
    )
}

export default FullWidthWrapper