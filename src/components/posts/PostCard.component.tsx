import DialogContainer from "@/components/containers/DialogContainer/DialogContainer.component"
import { PostType } from "@/components/posts/PostGrid.component"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CollectionEntry } from "astro:content"

interface PropTypes {
    post: CollectionEntry<PostType.Lore>
}

const TagStrategy = {
    'post-mankind': "post-mankind existentialism",
    'retro-dreams': "retrofuturistic dreams"
}

const PostCard = ({
    post
}: PropTypes) => {
    const date = post.data.pubDate
    const dateString = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`

    return (
        <DialogContainer wrapStyle={{
            hasHover: true,
            classes: "post-card"
        }}>
            <div className="post-card-top">
                <div className="post-card-image" style={{
                    backgroundImage: `url(${post.data.heroImage})`
                }}></div>
            </div>
            <div className="post-card-content">
                <div className="tags">
                    {post.data.tags?.map((tag) => (
                        <span className={`tag ${tag}`}>{TagStrategy[tag] || tag}</span>
                    ))}
                </div>
                <h3 className="title">{post.data.title}</h3>
                <p className="description">{post.data.description}</p>
            </div>
            <div className="post-card-bottom">
                <span className="date code">{dateString}</span>
                <FontAwesomeIcon icon={faArrowRight} className="arrow" />
            </div>
        </DialogContainer>
    )
}

export default PostCard