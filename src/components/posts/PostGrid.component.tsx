import PostCard from "@/components/posts/PostCard.component"
import FullWidthWrapper from "@/components/wrappers/FullWidthWrapper.component"
import { faArrowDown, faArrowUp, faBoxOpen, faCircleXmark, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CollectionEntry } from "astro:content"
import { useEffect, useState } from "react"

export enum PostType {
	Lore = 'lore',
    Introduction = 'introduction',
	Game = 'game',
	Announcement = 'announcement'
}

export interface ProcessedPost {
    post: CollectionEntry<PostType.Lore> | CollectionEntry<PostType.Introduction>
    searchData: string
    processedThumbImage: astroHTML.JSX.ImgHTMLAttributes | null
}

interface PropTypes {
    processedPosts: ProcessedPost[]
}

const POST_TYPES = [
    PostType.Lore,
    PostType.Announcement,
    PostType.Game,
    PostType.Introduction
]

export const PILLAR_TAGS = [
    "post-mankind existentialism",
    "retrofuturistic dreams",
    "core mystery"
]

const PostsView = ({
    processedPosts
}: PropTypes) => {
    const [filteredPosts, setFilteredPosts] = useState<ProcessedPost[]>([])

    const [searchString, setSearchString] = useState("")
    const [activeCollection, setActiveCollection] = useState<PostType | null>(null)
    const [activePillar, setActivePillar] = useState<string | null>(null)

    const [additionalTags, setAdditionalTags] = useState<string[]>([])

    const [areFiltersOpen, setAreFiltersOpen] = useState(false)

    const [galleryMode, setGalleryMode] = useState(true);

    const filterPosts = (
        posts: ProcessedPost[], 
        searchString: string
    ) => {
        return posts.filter((i) => {
            const hasSearchData = i.searchData.includes(searchString.toLowerCase())
            const matchesCollection = activeCollection === null || i.post.collection === activeCollection
            const matchesPillarTag = activePillar === null || 
                i.post.data.tags &&
                i.post.data.tags.includes(activePillar)
            const matchesAdditionalTag = additionalTags.length === 0 ||
                i.post.data.tags &&
                additionalTags.every(r => i.post.data.tags!.filter((r) => !PILLAR_TAGS.includes(r)).includes(r))

            return hasSearchData && matchesCollection && matchesPillarTag && matchesAdditionalTag
        })
    }

    useEffect(() => {
        setFilteredPosts(filterPosts(processedPosts, searchString))
    }, [searchString, activeCollection, activePillar, additionalTags])

    const onPostTypeClick = (type: string) => {
        if (activeCollection === type) {
            setActiveCollection(null)
        } else {
            setActiveCollection(type as any)
        }
    }
    const onPillarTagClick = (pillar: string) => {
        if (activePillar === pillar) {
            setActivePillar(null)
        } else {
            setActivePillar(pillar)
        }
    }
    // When normal tag is clicked, just pop it out
    const onTagClick = (tag: string) => {
        setAdditionalTags(additionalTags.filter((i) => i !== tag))
    }
    const onCardTagClick = (tag: string) => {
        if (PILLAR_TAGS.includes(tag)) {
            onPillarTagClick(tag)
        } else if (!additionalTags.includes(tag)) {
            setAdditionalTags([...additionalTags, tag])
        }
    }

    return (
        <div className="posts-view">
            <button className={`open-filters ${areFiltersOpen ? "filters-open" : "filters-closed"}`} onClick={() => setAreFiltersOpen(!areFiltersOpen)}>
                {areFiltersOpen ? 
                    <span>Filters</span> :
                    <span>Filters</span>
                }
                
                {areFiltersOpen ? 
                    <FontAwesomeIcon icon={faArrowUp} className={`arrow-close`}/> :
                    <FontAwesomeIcon icon={faArrowDown} className={`arrow-open`}/>
                }
            </button>
            <div className={`posts-filters ${areFiltersOpen ? "filters-open" : "filters-closed"}`}>
                <div className="tag-clouds">
                    <div className="filter-row post-type tag-cloud">
                        <span className="row-heading">Type</span>
                        {POST_TYPES.map((type) => {
                            const isActive = activeCollection === type
                            return <button 
                                key={type} 
                                onClick={() => onPostTypeClick(type)}
                                className={`tag ${type} ${isActive? "active" : ''}`}
                            >
                                {type}
                                {isActive ?
                                    <CloseIcon /> : null
                                }
                            </button>
                        })}
                    </div>
                    <div className="filter-row post-pillar-tags tag-cloud">
                        <span className="row-heading">Pillar</span>
                        {PILLAR_TAGS.map((pillar) => {
                            const isActive = activePillar === pillar
                            return <button 
                                key={pillar} 
                                onClick={() => onPillarTagClick(pillar)} 
                                className={`tag ${pillar} ${isActive ? "active" : 'inactive'}`}
                            >
                                {pillar}
                                {isActive ?
                                    <CloseIcon /> : null
                                }
                            </button>
                        })}
                    </div>
                    <div className="filter-row post-additional-tags tag-cloud">
                        <span className="row-heading">Tags</span>
                        {additionalTags.map((tag) => {
                            return <button 
                                key={tag} 
                                onClick={() => onTagClick(tag)} 
                                className={`tag ${tag} active`}
                            >
                                {tag}
                                <CloseIcon />
                            </button>
                        })}
                        {additionalTags.length === 0 ?
                            <span className="none">(none selected)</span> : null
                        }
                    </div>
                </div>
                
                <div className="post-string">
                    <input 
                        type="text" 
                        value={searchString} 
                        onChange={(e) => setSearchString(e.target.value)}
                        placeholder="Search"
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
            </div>
            {/*<button onClick={() => setGalleryMode(!galleryMode)}>Gallery Mode</button>*/}
            <div className={`posts-grid ${galleryMode ? 'gallery-mode' : ''}`}>
                {filteredPosts
                    .map((filteredPost) => {
                        return (
                            <PostCard key={filteredPost.post.slug} processedPost={filteredPost} onCardTagClick={onCardTagClick} galleryMode={galleryMode}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

const CloseIcon = () => <FontAwesomeIcon icon={faCircleXmark} className="close-mark" />

export default PostsView