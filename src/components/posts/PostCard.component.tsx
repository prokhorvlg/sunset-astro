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
    const collection: PostType = post.collection as PostType
    console.log(collection)

    return (
        <div className={`post-card-container ${collection}`}>
            <span className="collection">{collection}</span>
            <DialogContainer wrapStyle={{
                isLink: true,
                linkURL: `/posts/${post.slug}`,
                classes: `post-card`
            }}>
                <div className="post-card-top">
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.data.thumbImage})`
                    }}></div>
                </div>

                {(collection === PostType.Lore) ? 
                    <div className="post-card-content">
                        <h3 className="title">{post.data.title}</h3>
                        <p className="description">{post.data.mainText}</p>
                        <TagCloud tags={post.data.tags} />
                    </div> : null
                }
                {(collection === PostType.Introduction) ? 
                    <div className="post-card-content">
                        <h3 className="title">{post.data.title}</h3>
                        <p className="description">{post.data.subText}</p>
                        <TagCloud tags={post.data.tags} />
                    </div> : null
                }

                <div className="post-card-bottom">
                    <span className="date code">{dateString}</span>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                </div>
            </DialogContainer>
        </div>
    )
}

export default PostCard