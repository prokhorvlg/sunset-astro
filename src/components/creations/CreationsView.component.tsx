import TransitionGradient from "@/components/home/TransitionGradient.component"
import PageHeading from "@/components/page/PageHeading.component"
import PostsGrid from "@/components/posts/PostsGrid.component"
import type { ProcessedPost } from "@/types/postTypes"

// import "./PostsView.scss"

const CreationsView = ({
  title,
  subtext,
  processedPosts,
  children,
}: {
  title: string
  subtext: string
  processedPosts: ProcessedPost[]
  children?: any
}) => {
  return (
    <div className="posts-view">
      <PageHeading
        title={title}
        subtext={subtext}
        image="creations"
      />

      {children}

      <PostsGrid
        processedPosts={processedPosts}
        usesFilter={false}
      />
      <TransitionGradient
        direction="to-bottom"
        floaterTextRight="0X0018"
        floaterTextLeft="memory file located"
        classes=""
      />
    </div>
  )
}

export default CreationsView
