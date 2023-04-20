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
        <div className="quote-container">
            <div className="author-box">
                {isAuthorYou ? 
                    <BlinkingGrid />:
                    <div className="image" style={{backgroundImage: "url(" + author.image + ")"}}></div>
                }
                <div className="text">
                    <span className="name">{author.name}</span>
                    <span className="description">{author.description}</span>
                </div>
            </div>
            <SimpleContainer classes="code-block quote-box">
                {children}
            </SimpleContainer>
        </div>
    )
}

export default QuoteContainer