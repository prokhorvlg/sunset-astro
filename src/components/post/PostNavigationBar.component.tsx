import Button, { ButtonType } from "@/components/common/Button/Button.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostNavigationBar = ({
}) => {
    return (
        <FullWidthWrapper width={WrapperMax.BlogWidth} classes="post-navigation-bar">
            <div className="post-navigation-inner">
                <span className="floater tiny-code">post navigation</span>
                <Button type={ButtonType.Link} linkURL="/posts" classes="padded left">
                    <>
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        <span className="label">Newer Post</span>
                    </>
                </Button>
                <div className="line"></div>
                <Button type={ButtonType.Link} linkURL="/posts" classes="padded right">
                    <>
                        <span className="label">Older Post</span>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </>
                </Button>
            </div>
        </FullWidthWrapper>
    )
}

export default PostNavigationBar