import TransitionGradient from "@/components/home/TransitionGradient.component"
import PageHeading from "@/components/page/PageHeading.component"
import PostsGrid from "@/components/posts/PostsGrid.component"
import type { ProcessedPost } from "@/types/postTypes"

// import "./PostsView.scss"

const CreationsView = ({
  title,
  subtext,
  processedPosts,
}: {
  title: string
  subtext: string
  processedPosts: ProcessedPost[]
}) => {
  return (
    <div className="posts-view">
      <PageHeading
        title={title}
        subtext={subtext}
        image="creations"
      />
      {/* {processedPosts.map((post) => {
        return <div>{post.post.slug}</div>
      })} */}
      <PostsGrid
        processedPosts={processedPosts}
        usesFilter={false}
      />
      <TransitionGradient
        direction="to-bottom"
        floaterTextRight="bla"
        floaterTextLeft="yes"
        classes=""
      />
    </div>
  )
}

export default CreationsView
