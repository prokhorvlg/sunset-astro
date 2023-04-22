export enum WrapperMax {
    MaxWidth = "max-width",
    BlogWidth = "blog-width"
}

interface PropTypes {
    children: any,
    classes?: string,
    width?: WrapperMax,
}

const FullWidthWrapper = ({
    children,
    classes = "",
    width = WrapperMax.MaxWidth,
}: PropTypes) => {
    return (
        <div className={`full-width-wrapper ${classes} ${width}`}>
            <div className="full-width-wrapper-inner">
                {children}
            </div>
        </div>
    )
}

export default FullWidthWrapper