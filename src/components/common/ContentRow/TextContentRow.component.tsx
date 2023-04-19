import ContentRow from "@/components/common/ContentRow/ContentRow.component"

const TextContentRow = ({
    children,
    classes = ''
}) => {
    return (
        <ContentRow classes={`text-content-row ${classes}`}>
            {children}
        </ContentRow>
    )
}

export default TextContentRow