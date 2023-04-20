import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"

const ContentRow = ({
    children,
    classes = "",
    verticalSpacing = 50
}) => {
    return (
        <FullWidthWrapper
            width={WrapperMax.BlogWidth}
            verticalSpacing={verticalSpacing}
            classes={"content-row " + classes} 
        >
            {children}
        </FullWidthWrapper>
    )
}

export default ContentRow