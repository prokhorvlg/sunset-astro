import { faAnglesDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SimpleContainer from "../../containers/SimpleContainer/SimpleContainer.component"
import FullWidthWrapper from "../../wrappers/FullWidthWrapper.component"

const ScrollSuggestion = () => {
    return (
        <FullWidthWrapper classes="scroll-suggestion">
            <SimpleContainer classes="scroll-suggestion-simple-container">
                <div className="scroll-down">
                    <FontAwesomeIcon icon={faAnglesDown} />
                </div>
                <div className="text">
                    <span className="highlight-orange">There is much to explore // </span><span className="highlight-aqua">Scroll for introduction<span className="blinking">_</span></span>
                </div>
                <div className="scroll-down">
                    <FontAwesomeIcon icon={faAnglesDown} />
                </div>
            </SimpleContainer>
        </FullWidthWrapper>
    )
}

export default ScrollSuggestion