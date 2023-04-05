import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"

const ContentRow = ({
    children
}) => {
    return (
        <FullWidthWrapper
            width={WrapperMax.BlogWidth}
            verticalSpacing={50}
            classes="content-row"
        >
                {children}
        </FullWidthWrapper>
    )
}

export default ContentRow