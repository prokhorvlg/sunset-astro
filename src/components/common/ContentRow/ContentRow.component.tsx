import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"

const ContentRow = ({
    children,
    classes = ""
}) => {
    return (
        <FullWidthWrapper
            width={WrapperMax.BlogWidth}
            verticalSpacing={50}
            classes={"content-row " + classes} 
        >
            {children}
        </FullWidthWrapper>
    )
}

export default ContentRow