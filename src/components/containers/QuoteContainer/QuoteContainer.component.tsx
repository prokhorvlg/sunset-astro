import SimpleContainer from "@/components/containers/SimpleContainer/SimpleContainer.component"
import BlinkingGrid from "@/components/layout/Header/components/BlinkingGrid.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { QuoteAuthor } from "@/data/Authors"

interface Props {
    children: JSX.Element
    author: QuoteAuthor
    spacing: number
}
  
const QuoteContainer = ({
    children,
    author,
    spacing
}: Props) => {
    const isAuthorYou = author.id === "you"
    return (
        <FullWidthWrapper
            width={WrapperMax.BlogWidth}
            verticalSpacing={spacing}
            classes="quote-wrapper"
        >
            <div className="quote-container">
                <div className="author-box">
                    {isAuthorYou ? 
                        <BlinkingGrid />:
                        <div className="image" style={{backgroundImage: "url(" + author.image + ")"}}></div>
                    }
                    <span className="name">{author.name}</span>
                    <span className="description"><em>{author.description}</em></span>
                </div>
                <SimpleContainer classes="code-block quote-box">
                    {children}
                </SimpleContainer>
            </div>
        </FullWidthWrapper>
    )
}

export default QuoteContainer