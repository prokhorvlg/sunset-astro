import TagCloud from "@/components/common/TagCloud/TagCloud.component"
import DialogContainer from "@/components/containers/DialogContainer/DialogContainer.component"
import { PostType, ProcessedPost } from "@/components/posts/PostsGrid.component"
import { getImageObjectById } from "@/utils/astroHelpers"
import { getDateString } from "@/utils/date"
import { faArrowRight, faBullhorn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CollectionEntry } from "astro:content"
import { useState, useEffect } from "react"

interface PropTypes {
    processedPost: ProcessedPost
    onCardTagClick?: (arg0: string) => void
    galleryMode?: boolean
    classes?: string
}

// On mobile, the post card will have a width that matches the resolution, and dynamic height to match.

// On desktop, the layout switches to a traditional galley. Variable height, fixed width.

const PostCard = ({
    processedPost,
    onCardTagClick,
    galleryMode = false,
    classes
}: PropTypes) => {
    // POST METADATA
    const post = processedPost.post
    const date = post.data.pubDate
    const dateString = getDateString(date)
    const collection: PostType = post.collection as PostType

    // IMAGE METADATA
    const imageSrc = processedPost.processedThumbImage ? 
        processedPost.processedThumbImage.src :
        post.data.thumbImage

    const originalWidth = Number(processedPost.processedThumbImage?.width) || 100
    const originalHeight = Number(processedPost.processedThumbImage?.height) || 100
    const imageRatio = originalWidth / originalHeight

    // DYNAMIC CALCULATIONS
    const [mobileMode, setMobileMode] = useState(false)

    const [imageHeight, setImageHeight] = useState(500)
    const [imageWidth, setImageWidth] = useState(500)

    useEffect(() => {
        const updateWidth = () => {
            const isMobile = window.innerWidth <= 768;
            setMobileMode(isMobile)

            if (isMobile) {
                const newWidth = window.innerWidth - 50
                setImageWidth(newWidth)
                setImageHeight(newWidth / imageRatio)
            } else {
                const newHeight = 300
                setImageHeight(newHeight)
                setImageWidth(newHeight * imageRatio)
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [])

    return (
        <div className={`post-card-container ${collection} ${classes ? classes : ''} ${galleryMode ? 'gallery-mode' : ''}`}>
            <span className="collection">{collection}</span>
            <DialogContainer wrapStyle={{
                isLink: true,
                linkURL: `/posts/${post.slug}`,
                classes: `post-card`
            }}>
                <div className="post-card-top">
                    { galleryMode && 
                        mobileMode && 
                        collection !== PostType.Introduction &&
                        collection !== PostType.Announcement 
                        ? 
                        <img src={imageSrc || ""} 
                            height={imageHeight} 
                            width={imageWidth}
                        />
                        : 
                        <div className="post-card-image" style={{
                            backgroundImage: `url(${imageSrc})`,
                            backgroundPosition: post.data.thumbAlignment ? post.data.thumbAlignment : 'top'
                        }}></div>
                    }
                </div>
                {(collection === PostType.Lore) ? 
                    <div className="post-card-content">
                        <h3 className="title">{post.data.title}</h3>
                        <p className="description">{post.data.mainText}</p>
                        <div className="fill"></div>
                        <TagCloud tags={post.data.tags || []} onCardTagClick={onCardTagClick} />
                    </div> : null
                }
                {(collection === PostType.Introduction) ? 
                    <div className="post-card-content">
                        <h3 className="title">{post.data.mainText}</h3>
                        <p className="description">{post.data.subText}</p>
                        <TagCloud tags={post.data.tags || []} onCardTagClick={onCardTagClick} />
                    </div> : null
                }
                {(collection === PostType.Announcement) ? 
                    <div className="post-card-content">
                        <FontAwesomeIcon icon={faBullhorn} className="icon" />
                        <h3 className="title">{post.data.title}</h3>
                        <p className="description">{post.data.description}</p>
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

const IntroductionContents = () => {
    return null
}

export default PostCard