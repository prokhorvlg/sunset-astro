import Button, { ButtonType } from "@/components/common/Button/Button.component"
import TagCloud from "@/components/common/TagCloud/TagCloud.component"
import DialogContainer, { DialogHeaderStyle } from "@/components/containers/DialogContainer/DialogContainer.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { getDateString } from "@/utils/date"
import { faArrowLeft, faBackward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostHeading = ({
    post
}) => {
    return (
        <FullWidthWrapper classes="heading-area post" width={WrapperMax.MaxWidth} verticalSpacing={0}>
            <div className="date-row">
                <Button classes="back-all-posts" type={ButtonType.Link} linkURL="/posts">
                    <>
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon><span>All Posts</span>
                    </>
                </Button>
                <DialogContainer wrapStyle={{
                    headerTitle: post.data.title,
                    hasCloseButton: true,
                    classes: "date-dialog"
                }}>
                    <div className="date-area">
                        <div className="inner">
                            <p><span className="date">{getDateString(post.data.pubDate)}</span><span className="slashes"> //</span><span className="name highlight-aqua"> {post.data.title}</span></p>
                        </div>
                    </div>
                </DialogContainer>
            </div>
            <div className="main-area">
                <div className="heading-content">
                    <TagCloud tags={post.data.tags} />
                    <h1 className="title">{post.data.mainText}</h1>
                    <p className="description">// {post.data.subText}</p>
                </div>
            </div>
        </FullWidthWrapper>
    )
}
//by prokhorVLG
export default PostHeading