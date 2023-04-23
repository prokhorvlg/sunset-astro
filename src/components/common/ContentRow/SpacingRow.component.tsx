import ContentRow from "@/components/common/ContentRow/ContentRow.component"

interface PropTypes {
    extraSpacing?: number | string,
    divide?: boolean,
}

const SpacingRow = ({
    extraSpacing = 0,
    divide,
}: PropTypes) => {
    return (
        <ContentRow classes="spacing-content-row">
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