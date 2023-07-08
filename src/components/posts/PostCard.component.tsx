import TagCloud from "@/components/common/TagCloud/TagCloud.component"
import DialogContainer from "@/components/containers/DialogContainer/DialogContainer.component"
import { PostType, ProcessedPost } from "@/components/posts/PostsGrid.component"
import { getImageObjectById } from "@/utils/astroHelpers"
import { getDateString } from "@/utils/date"
import { faPatreon } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faArrowRight, faArrowUpRightFromSquare, faBullhorn, faDatabase, faKey, faLock, faMicrochip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

import './PostCard.scss'

export const MapStringToIcon = {
    "faMicrochip": faMicrochip
}

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

    const isPatreonExclusive = post.data.patreonLocked
    const target = isPatreonExclusive ? post.data.target : `/posts/${post.slug}`

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
            <div className="above-card">
                <span className="above-message collection">{collection}</span>
                {post.data.patreonLocked &&
                    <div className="patreon-exclusive">
                        <FontAwesomeIcon icon={faPatreon} className="icon" />
                        <span className="above-message patreon-locked">Patreon Exclusive</span>
                    </div>
                }
            </div>
            <DialogContainer wrapStyle={{
                isLink: true,
                linkURL: target,
                classes: `post-card`,
                isExternal: isPatreonExclusive
            }}>
                <div className="post-card-top">
                    { galleryMode && 
                        mobileMode && 
                        collection !== PostType.Introduction &&
                        collection !== PostType.Announcement &&
                        collection !== PostType.Database
                        ? 
                        <div
                            className={`post-card-image-mobile ${isPatreonExclusive ? "patreon-exclusive" : ""}`}
                        >
                            <img src={imageSrc || ""} 
                                height={imageHeight} 
                                width={imageWidth}
                            />
                            {isPatreonExclusive && <PatreonExclusiveOverlay />}
                        </div>
                        : 
                        <div className={`post-card-image ${isPatreonExclusive ? "patreon-exclusive" : ""}`} style={{
                            backgroundImage: `url(${imageSrc})`,
                            backgroundPosition: post.data.thumbAlignment ? post.data.thumbAlignment : 'top'
                        }}>
                            {isPatreonExclusive && <PatreonExclusiveOverlay />}
                        </div>
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
                        <FontAwesomeIcon icon={faBullhorn} className="main-icon" />
                        <h3 className="title">{post.data.title}</h3>
                        <p className="description">{post.data.description}</p>
                    </div> : null
                }
                {(collection === PostType.Database) ? 
                    <div className="post-card-content">
                        <div className="icon-pack small">
                            <FontAwesomeIcon icon={faDatabase} className="main-icon" />
                            <FontAwesomeIcon className="sub-icon" icon={MapStringToIcon[post.data.icon || ""]} />
                        </div>
                        <h3 className="title">{post.data.title}</h3>
                        <p className="description">{post.data.subText}</p>
                        <TagCloud tags={post.data.tags || []} onCardTagClick={onCardTagClick} />
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

const PatreonExclusiveOverlay = () => {
    return (
        <div className="patreon-exclusive-overlay">
            <FontAwesomeIcon icon={faKey} className="main-icon" />
            <p>This is a <span>Patreon exclusive</span> post.</p>
            <p>Become a backer to view! <FontAwesomeIcon icon={faArrowRight} className="icon" /></p>
        </div>
    )
}

export default PostCard