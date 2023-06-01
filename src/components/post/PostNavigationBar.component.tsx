import Button, { ButtonType } from "@/components/common/Button/Button.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { getFilenameWithoutExtension } from "@/utils/posts"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostNavigationBar = ({
    previousPost,
    nextPost
}) => {
    const hasNextPost = nextPost !== null
    const hasPreviousPost = previousPost !== null

    let nextSlug, nextPostURL
    if (nextPost) {
        nextSlug = nextPost.post.slug
        nextPostURL = nextPost ? `/posts/${nextSlug}` : ''
    }

    let previousSlug, previousPostURL
    if (previousPost) {
        previousSlug = previousPost.post.slug
        previousPostURL = previousPost ? `/posts/${previousSlug}` : ''
    }

    return (
        <FullWidthWrapper width={WrapperMax.BlogWidth} classes="post-navigation-bar">
            <div className="post-navigation-inner">
                <span className="floater tiny-code">post navigation</span>
                <Button 
                    type={ButtonType.Link} 
                    linkURL={nextPostURL} 
                    classes={`padded left ${!hasNextPost && "unavailable"}`}
                >
                    <>
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        <span className="label">Newer Post</span>
                    </>
                </Button>
                <div className="line"></div>
                <Button 
                    type={ButtonType.Link} 
                    linkURL={previousPostURL} 
                    classes={`padded right ${!hasPreviousPost && "unavailable"}`}
                >
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