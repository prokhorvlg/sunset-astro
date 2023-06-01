import TransitionGradient from "@/components/home/TransitionGradient.component"
import PageHeading from "@/components/page/PageHeading.component"
import PostsGrid from "@/components/posts/PostsGrid.component"
import SpookyView from "@/components/posts/SpookyView.component"
import { useEffect, useState } from "react"

interface Props {
    title: string
    subtext: string
    secretPosts: any
    processedPosts: any
}

const PostsView = ({
    title,
    subtext,
    secretPosts,
    processedPosts
}) => {
    const [isSpookyMode, setIsSpookyMode] = useState(false)

    useEffect(()=> {
        if (isSpookyMode) {
            // Animate to spooky mode here...
        }
    }, [isSpookyMode])

    return (
        <div className="posts-view">
            { isSpookyMode ? 
                <SpookyView 
                    secretPosts={secretPosts}
                />
            :
                <>
                    <PageHeading 
                        title={title}
                        subtext={subtext} 
                        image='computer-blinking' 
                        isSpooky
                        isSpookyMode={isSpookyMode}
                        setIsSpookyMode={setIsSpookyMode}
                    />
                    <PostsGrid
                        processedPosts={processedPosts}
                    />
                    <TransitionGradient direction="to-bottom" 
                        floaterTextRight="disc corruption detected"
                        floaterTextLeft="WHATAR~1.TXT"
			            classes="spooky-left"
                    />
                </>
            }
        </div>
    )
}

export default PostsView