import PostCard from "@/components/posts/PostCard.component"
import FullWidthWrapper from "@/components/wrappers/FullWidthWrapper.component"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
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

const PostsView = ({
    processedPosts
}: PropTypes) => {
    const [searchString, setSearchString] = useState("")
    //const [activeCollection, setActiveCollection] = useState(PostType.Lore)
    const [filteredPosts, setFilteredPosts] = useState<ProcessedPost[]>([])

    const filterPosts = (
        posts: ProcessedPost[], 
        searchString: string
    ) => {
        console.log(posts)
        return posts.filter((i) => i.searchData.includes(searchString.toLowerCase()))
    }

    useEffect(() => {
        setFilteredPosts(filterPosts(processedPosts, searchString))
    }, [searchString])

    return (
        <div className="posts-view">
            <div className="posts-filters">
                <div className="post-type"></div>
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
            <div className="posts-grid">
                {filteredPosts
                    .map((filteredPost) => {
                        return (
                            <PostCard key={filteredPost.post.slug} processedPost={filteredPost}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default PostsView