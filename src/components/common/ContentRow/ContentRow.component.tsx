import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"

interface PropTypes {
    children: any,
    classes?: string,
    verticalSpacing?: number
}

const ContentRow = ({
    children,
    classes = "",
}: PropTypes) => {
    return (
        <FullWidthWrapper
            width={WrapperMax.BlogWidth}
            classes={"content-row " + classes} 
        >
            {children}
        </FullWidthWrapper>
    )
}

export default ContentRow