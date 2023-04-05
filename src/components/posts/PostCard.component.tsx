import TagCloud from "@/components/common/TagCloud/TagCloud.component"
import DialogContainer from "@/components/containers/DialogContainer/DialogContainer.component"
import { PostType } from "@/components/posts/PostGrid.component"
import { getDateString } from "@/utils/date"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CollectionEntry } from "astro:content"

interface PropTypes {
    post: CollectionEntry<PostType.Lore>
}

const PostCard = ({
    post
}: PropTypes) => {
    const date = post.data.pubDate
    const dateString = getDateString(date)

    return (
        <DialogContainer wrapStyle={{
            isLink: true,
            linkURL: `/posts/${post.slug}`,
            classes: "post-card"
        }}>
            <div className="post-card-top">
                <div className="post-card-image" style={{
                    backgroundImage: `url(${post.data.thumbImage})`
                }}></div>
            </div>
            <div className="post-card-content">
                
                <h3 className="title">{post.data.title}</h3>
                <p className="description">{post.data.mainText}</p>
                <TagCloud tags={post.data.tags} />
            </div>
            <div className="post-card-bottom">
                <span className="date code">{dateString}</span>
                <FontAwesomeIcon icon={faArrowRight} className="arrow" />
            </div>
        </DialogContainer>
    )
}

export default PostCard