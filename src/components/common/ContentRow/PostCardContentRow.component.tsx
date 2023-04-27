import ContentRow from "@/components/common/ContentRow/ContentRow.component"
import PostCard from "@/components/posts/PostCard.component"
import { ProcessedPost } from "@/components/posts/PostGrid.component"

interface PropTypes {
    classes?: string
    processedPosts: ProcessedPost[]
}

const PostCardContentRow = ({
    classes = '',
    processedPosts = []
}: PropTypes) => {
    return (
        <ContentRow classes={`post-card-content-row ${classes}`}>
            {processedPosts.map((post) => {
                return (
                    <PostCard 
                        processedPost={post} 
                    />
                )
            })}
        </ContentRow>
    )
}

export default PostCardContentRow