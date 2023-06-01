import Button, { ButtonType } from "@/components/common/Button/Button.component"
import TagCloud from "@/components/common/TagCloud/TagCloud.component"
import DialogContainer, { DialogHeaderStyle } from "@/components/containers/DialogContainer/DialogContainer.component"
import TransitionGradient from "@/components/home/TransitionGradient.component"
import { PostType } from "@/components/posts/PostsGrid.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { getImageObjectById } from "@/utils/astroHelpers"
import { getDateString } from "@/utils/date"
import { faArrowLeft, faBackward, faBullhorn, faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    post: any
    processedThumb?: astroHTML.JSX.ImgHTMLAttributes | null
    postType: string
}

const PostHeading = ({
    post,
    processedThumb,
    postType
}: Props) => {
    return (
        <FullWidthWrapper classes={`heading-area post ${postType}`} width={WrapperMax.MaxWidth}>
            {/* Secrets do not have post headings */}
            { postType !== "secret" &&
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
            }
            <TransitionGradient 
                direction="to-top" 
                classes={postType}
                floaterTextLeft={postType === "secret" ? "992.0037%%% AVAILABLE" : "162k available"}
                floaterTextRight={postType === "secret" ? "MUGUANG COMPUTER CORPORATION" : "version 4.2 (c) Redmond Cybernetics"}
            />
            {(post.collection === PostType.Introduction) ? 
                <div className="main-area introduction">
                    {processedThumb && <img src={processedThumb?.src || ''} width={400} />}
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
            {(post.collection === PostType.Secret) ? 
                <div className="main-area secret">
                    <div className="heading-content">
                        <FontAwesomeIcon icon={faFile} className="file-icon" />
                        <span className="eyebrow">SECRET FILE</span>
                        <h1 className="title">{post.data.title}</h1>
                        <p className="description">// {post.data.description}</p>
                    </div>
                </div> : null
            }
            {(post.collection === PostType.Announcement) ? 
                <div className="main-area announcement">
                    <div className="heading-content">
                        <FontAwesomeIcon icon={faBullhorn} className="file-icon" />
                        <span className="eyebrow">ANNOUNCEMENT</span>
                        <h1 className="title">{post.data.title}</h1>
                        <p className="description">// {post.data.description}</p>
                    </div>
                </div> : null
            }
        </FullWidthWrapper>
    )
}
//by prokhorVLG
export default PostHeading