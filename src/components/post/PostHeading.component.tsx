import TagCloud from "@/components/common/TagCloud/TagCloud.component"
import DialogContainer, { DialogHeaderStyle } from "@/components/containers/DialogContainer/DialogContainer.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { getDateString } from "@/utils/date"

const PostHeading = ({
    post
}) => {
    return (
        <FullWidthWrapper classes="post-heading" width={WrapperMax.MaxWidth} verticalSpacing={0}>
            <DialogContainer wrapStyle={{
                headerTitle: post.data.title,
                hasCloseButton: true,
                classes: "date-dialog"
            }}>
                <div className="date-area">
                    <div className="inner">
                        <p><span className="date">{getDateString(post.data.pubDate)}</span><span className="slashes"> //</span><span className="name highlight-aqua"> {post.data.title}</span></p>
                    </div>
                </div>
            </DialogContainer>
            <div className="main-area">
                <div className="post-heading-content">
                    <TagCloud tags={post.data.tags} />
                    <h1 className="title">{post.data.mainText}</h1>
                    <p className="description">// {post.data.subText}</p>
                </div>
            </div>
        </FullWidthWrapper>
    )
}
//by prokhorVLG
export default PostHeading