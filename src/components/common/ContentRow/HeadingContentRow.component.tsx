import ContentRow from "@/components/common/ContentRow/ContentRow.component"

const HeadingContentRow = ({
    children,
    classes = '',
    type = '',
    verticalSpacing
}) => {
    if (type === 'blips') {
        return (
            <ContentRow classes={`heading-content-row blips ${classes}`} verticalSpacing={verticalSpacing}>
                <div className="heading-content-wrap">
                    <div className="left-box"></div>
                    <div className="heading-box">
                        {children}
                    </div>
                </div>
            </ContentRow>
        )
    }
    return (
        <ContentRow classes={`heading-content-row ${classes}`} verticalSpacing={verticalSpacing}>
            <div className="heading-content-wrap">
                <div className="left-box"></div>
                <div className="heading-box">
                    {children}
                </div>
            </div>
        </ContentRow>
    )
}

export default HeadingContentRow