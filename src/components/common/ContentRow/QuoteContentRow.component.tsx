import ContentRow from "@/components/common/ContentRow/ContentRow.component"
import QuoteContainer from "@/components/containers/QuoteContainer/QuoteContainer.component"
import { AuthorTerminal, QuoteAuthor } from "@/data/Authors"

interface PropTypes {
    author: QuoteAuthor
    children: JSX.Element
}

const QuoteContentRow = ({
    author,
    children
}: PropTypes) => {
    return (
        <ContentRow classes="quote-content-row">
            <QuoteContainer author={author} spacing={50}>
                <pre>{children}</pre>
            </QuoteContainer>
        </ContentRow>
    )
}

export default QuoteContentRow