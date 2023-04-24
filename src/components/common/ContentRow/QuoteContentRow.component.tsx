import ContentRow from "@/components/common/ContentRow/ContentRow.component"
import SimpleContainer from "@/components/containers/SimpleContainer/SimpleContainer.component"
import BlinkingGrid from "@/components/layout/Header/components/BlinkingGrid.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { QuoteAuthor } from "@/data/Authors"
import { getImageById } from "@/utils/sharedImages"
import { useEffect, useState } from "react"

interface Props {
    children: JSX.Element
    author: QuoteAuthor
    shrink?: boolean
    none?: boolean
    imageItem: astroHTML.JSX.ImgHTMLAttributes
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
const QuoteContentRow = ({
    children,
    author,
    shrink,
    none,
    imageItem
}: Props) => {
    const isAuthorYou = author.id === "you"
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    // For "internal memory", randomize two number strings
    useEffect(() => {
        if (!isAuthorYou) return
        const interval = setInterval(
          () => {
            setNumber(getRandomInt(10000,99999))
            setNumber2(getRandomInt(10000,99999))
          },
          500
        );
    
        // clean up interval on unmount
        return () => {
          clearInterval(interval);
        };
    }, []);

    return (
        <ContentRow classes="quote-content-row">
            <div className={`quote-container ${author.theme ? author.theme : ''}`}>
                {none ? 
                    null : 
                    <div className="author-box">
                        {shrink ?
                            null : 
                            isAuthorYou ? 
                                <div className="blinkbox-container">
                                    <span className="floater tiny-code">{number}</span>
                                    <span className="floater-under tiny-code">{number2}</span>
                                    <BlinkingGrid />
                                </div>
                                :
                                <div className="image" style={{backgroundImage: "url(" + imageItem.src + ")"}}></div>
                        }
                        
                        <div className="text">
                            <span className="name">{author.name}</span>
                            <span className="description">{author.description}</span>
                        </div>
                    </div>
                }
                <SimpleContainer classes="code-block quote-box">
                    {children}
                </SimpleContainer>
            </div>
        </ContentRow>
    )
}

export default QuoteContentRow