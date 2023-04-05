export enum WrapperMax {
    MaxWidth = "max-width",
    BlogWidth = "blog-width"
}

const FullWidthWrapper = ({
    children,
    classes = "",
    width = WrapperMax.MaxWidth,
    verticalSpacing = 0
}) => {
    return (
        <div className={`full-width-wrapper ${classes} ${width}`} style={{
            marginTop: verticalSpacing + "px",
            marginBottom: verticalSpacing + "px"
        }}>
            <div className="full-width-wrapper-inner">
                {children}
            </div>
        </div>
    )
}

export default FullWidthWrapper