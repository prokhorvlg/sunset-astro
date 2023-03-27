import PostCard from "@/components/posts/PostCard.component"
import FullWidthWrapper from "@/components/wrappers/FullWidthWrapper.component"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CollectionEntry } from "astro:content"
import { useEffect, useState } from "react"

import {remark} from 'remark'
import strip from 'strip-markdown'

export enum PostType {
	Lore = 'lore',
	Game = 'game',
	Announcement = 'announcement'
}

interface PropTypes {
    lorePosts: CollectionEntry<PostType.Lore>[]
}

const PostsView = ({
    lorePosts
}: PropTypes) => {
    const [searchString, setSearchString] = useState("")
    const [activeCollection, setActiveCollection] = useState(PostType.Lore)
    const [filteredPosts, setFilteredPosts] = useState<CollectionEntry<PostType.Lore>[]>([])

    /*
    const processedLorePosts = lorePosts.map(async (post) => {
        const strippedMarkdown = await remark().use(strip).process(post.body)
        return {
            ...post,
            searchData: `${strippedMarkdown}`
        }
    })*/

    useEffect(() => {
        console.log("searching on", searchString)
        
        setFilteredPosts(lorePosts.filter((i) => i.searchData.includes(searchString.toLowerCase())))
    }, [searchString])

    return (
        <div className="posts-view">
            <h1>Posts</h1>
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
                    .map((lorePost) => {
                        return (
                            <PostCard key={lorePost.id} post={lorePost}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default PostsView