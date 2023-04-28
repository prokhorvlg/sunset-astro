import Button, { ButtonType } from "@/components/common/Button/Button.component"
import TagCloud from "@/components/common/TagCloud/TagCloud.component"
import DialogContainer, { DialogHeaderStyle } from "@/components/containers/DialogContainer/DialogContainer.component"
import TransitionGradient from "@/components/home/TransitionGradient.component"
import { PostType } from "@/components/posts/PostGrid.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { getImageObjectById } from "@/utils/astroHelpers"
import { getDateString } from "@/utils/date"
import { faArrowLeft, faBackward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostHeading = ({
    post
}) => {
    return (
        <FullWidthWrapper classes="heading-area post" width={WrapperMax.MaxWidth}>
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
            <TransitionGradient 
                direction="to-top" 
            />
            {(post.collection === PostType.Introduction) ? 
                <div className="main-area introduction">
                    
                    <img src={getImageObjectById('title-space-race')!.src || ''} width={400} />
                    <div className="heading-content">
                        <span className="eyebrow">INTRODUCTION</span>
                        
                        <h1 className="title">{post.data.mainText}</h1>
                        <p className="description">// {post.data.subText}</p>
                        <TagCloud tags={post.data.tags} />
                    </div>
                </div> : null
            }
            {(post.collection === PostType.Lore) ? 
                <div className="main-area">
                    <div className="heading-content">
                        <TagCloud tags={post.data.tags} />
                        <h1 className="title">{post.data.mainText}</h1>
                        <p className="description">// {post.data.subText}</p>
                    </div>
                </div> : null
            }
        </FullWidthWrapper>
    )
}
//by prokhorVLG
export default PostHeading