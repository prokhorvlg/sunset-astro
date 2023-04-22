import SimpleContainer from "@/components/containers/SimpleContainer/SimpleContainer.component"
import BlinkingGrid from "@/components/layout/Header/components/BlinkingGrid.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { QuoteAuthor } from "@/data/Authors"
import { useEffect, useState } from "react"

interface Props {
    children: JSX.Element
    author: QuoteAuthor
    shrink?: boolean
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  
const QuoteContainer = ({
    children,
    author,
    shrink
}: Props) => {
    const isAuthorYou = author.id === "you"
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    useEffect(() => {
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
        <div className="quote-container">
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