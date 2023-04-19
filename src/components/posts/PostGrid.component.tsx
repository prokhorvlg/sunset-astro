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
    Introduction = 'introduction',
	Game = 'game',
	Announcement = 'announcement'
}

interface PropTypes {
    lorePosts: CollectionEntry<PostType.Lore>[]
    introductionPosts: CollectionEntry<PostType.Introduction>[]
}

const PostsView = ({
    lorePosts,
    introductionPosts
}: PropTypes) => {
    const [searchString, setSearchString] = useState("")
    const [activeCollection, setActiveCollection] = useState(PostType.Lore)
    const [filteredPosts, setFilteredPosts] = useState<CollectionEntry<PostType.Lore | PostType.Introduction>[]>([])

    const filterPosts = (
        posts: CollectionEntry<PostType.Lore | PostType.Introduction>[], 
        searchString: string
    ) => {
        return posts.filter((i) => i.searchData.includes(searchString.toLowerCase()))
    }

    useEffect(() => {
        console.log("searching on", searchString)
        
        setFilteredPosts([
            ...filterPosts(lorePosts, searchString),
            ...filterPosts(introductionPosts, searchString),
        ])
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
                    .map((post) => {
                        return (
                            <PostCard key={post.slug} post={post}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default PostsView