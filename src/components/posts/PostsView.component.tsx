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
  processedPosts,
}: Props) => {
  const [isSpookyMode, setIsSpookyMode] = useState(false)

  return (
    <div className="posts-view">
      {isSpookyMode ? (
        <SpookyView secretPosts={secretPosts} />
      ) : (
        <>
          <PageHeading
            title={title}
            subtext={subtext}
            image="posts"
            isSpooky
            isSpookyMode={isSpookyMode}
            setIsSpookyMode={setIsSpookyMode}
          />
          <PostsGrid processedPosts={processedPosts} />
          <TransitionGradient
            direction="to-bottom"
            floaterTextRight="disc corruption detected"
            floaterTextLeft="WHATAR~1.TXT"
            classes="spooky-left"
          />
        </>
      )}
    </div>
  )
}

export default PostsView
