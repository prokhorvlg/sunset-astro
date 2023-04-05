import ContentRow from "@/components/common/ContentRow/ContentRow.component"
import QuoteContainer from "@/components/containers/QuoteContainer/QuoteContainer.component"
import { AuthorTerminal } from "@/data/Authors"

const QuoteContentRow = ({
    children
}) => {
    return (
        <ContentRow>
            <QuoteContainer author={AuthorTerminal} spacing={50}>
                <pre>{children}</pre>
            </QuoteContainer>
        </ContentRow>
    )
}

export default QuoteContentRow