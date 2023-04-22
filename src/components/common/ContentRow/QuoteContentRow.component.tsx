import ContentRow from "@/components/common/ContentRow/ContentRow.component"
import QuoteContainer from "@/components/containers/QuoteContainer/QuoteContainer.component"
import { AuthorTerminal, QuoteAuthor } from "@/data/Authors"

interface PropTypes {
    author: QuoteAuthor
    children: JSX.Element
    shrink?: boolean
}

const QuoteContentRow = ({
    author,
    children,
    shrink
}: PropTypes) => {
    return (
        <ContentRow classes="quote-content-row">
            <QuoteContainer author={author} shrink={shrink}>
                <pre>{children}</pre>
            </QuoteContainer>
        </ContentRow>
    )
}

export default QuoteContentRow