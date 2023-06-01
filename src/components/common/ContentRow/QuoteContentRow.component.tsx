import ContentRow from "@/components/common/ContentRow/ContentRow.component"
import SimpleContainer from "@/components/containers/SimpleContainer/SimpleContainer.component"
import BlinkingGrid from "@/components/layout/Header/components/BlinkingGrid.component"
import { QuoteAuthor } from "@/data/Authors"
import { ImageDetails } from "@/utils/sharedImages"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

interface Props {
    children: JSX.Element
    author: QuoteAuthor
    shrink?: boolean
    none?: boolean
    transcription?: boolean
    left?: boolean
    imageObject?: ImageDetails
    imageItem?: astroHTML.JSX.ImgHTMLAttributes
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
    transcription,
    imageItem,
    imageObject,
    left
}: Props) => {
    const isAuthorYou = author.id === "you"
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [isOpen, setIsOpen] = useState(transcription ? false : true)

    const hasImage = author.image
    const isAuthorUnknown = author.id === "unknown"

    // For "internal memory", randomize two number strings
    useEffect(() => {
        if (!isAuthorYou) return
        const interval = setInterval(
          () => {
            setNumber(getRandomInt(10000,99999))
            setNumber2(getRandomInt(10000,99999))
          },
          250
        );
    
        // clean up interval on unmount
        return () => {
          clearInterval(interval);
        };
    }, []);

    const openQuote = () => {
        setIsOpen(true)
    }

    return (
        <ContentRow classes={`quote-content-row ${left ? 'left' : ''} ${hasImage || isAuthorYou || isAuthorUnknown ? 'has-image' : 'no-image'}`}>
            <div className={`quote-container ${author.theme ? author.theme : ''} 
            ${transcription ? 'transcription' : ''} 
            
            ${isOpen ? 'open' : ''}`}>
                {none || !isOpen || isAuthorUnknown ? 
                    null : 
                    <div className="author-box">
                        {shrink || (!hasImage && !isAuthorYou) ?
                            null : 
                            isAuthorYou ? 
                                <div className="blinkbox-container">
                                    <span className="floater tiny-code">{number}</span>
                                    <span className="floater-under tiny-code">{number2}</span>
                                    <BlinkingGrid />
                                </div>
                                :
                                <div className={`image ${imageObject!.quoteClasses ? imageObject!.quoteClasses : ''}`} style={{backgroundImage: "url(" + imageItem!.src + ")"}}></div>
                        }
                        
                        <div className="text">
                            <a className="name" target="_blank" href={author.originalPage ? author.originalPage : "/"}>{author.name}</a>
                            <span className="description">{author.description}</span>
                        </div>
                    </div>
                }
                <SimpleContainer classes="code-block quote-box">
                    {transcription && 
                        <button className="transcription-open" onClick={() => {openQuote()}}>Press to view transcription <FontAwesomeIcon icon={faArrowDown} className="blinking"/></button>
                    }
                    {children}
                </SimpleContainer>
            </div>
        </ContentRow>
    )
}

export default QuoteContentRow