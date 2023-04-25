import ContentRow from "@/components/common/ContentRow/ContentRow.component"

const HeadingContentRow = ({
    children,
    classes = '',
    type = '',
    verticalSpacing
}) => {
    // Style reserved for home page blippy?
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
    // Normal left leaning bar
    if (type === 'grandiose') {
        return (
            <ContentRow classes={`heading-content-row grandiose top-tall ${classes}`} verticalSpacing={verticalSpacing}>
                <div className="heading-content-wrap">
                    <div className="left-box"></div>
                    <div className="heading-box">
                        {children}
                    </div>
                </div>
            </ContentRow>
        )
    }
    // 
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