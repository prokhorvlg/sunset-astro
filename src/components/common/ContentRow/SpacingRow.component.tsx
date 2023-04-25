import ContentRow from "@/components/common/ContentRow/ContentRow.component"

interface PropTypes {
    extraSpacing?: number | string,
    divide?: boolean,
    classes?: string
}

const SpacingRow = ({
    extraSpacing = 0,
    classes,
    divide,
}: PropTypes) => {
    return (
        <ContentRow classes={`spacing-content-row ${classes}`}>
            <div style={{
                marginTop: extraSpacing,
                marginBottom: extraSpacing,
                //maxHeight: 50
            }}>
                {divide && <div className="divide"></div>}
            </div>
        </ContentRow>
    )
}

export default SpacingRow