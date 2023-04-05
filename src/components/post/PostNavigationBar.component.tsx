import DialogContainer from "@/components/containers/DialogContainer/DialogContainer.component"
import SimpleContainer from "@/components/containers/SimpleContainer/SimpleContainer.component"
import NavLink from "@/components/home/IntroSection/components/NavLink.component"
import FullWidthWrapper, { WrapperMax } from "@/components/wrappers/FullWidthWrapper.component"
import { getDateString } from "@/utils/date"
import { PostsIcon } from "@/utils/sharedIcons"

const PostNavigationBar = ({
    date,
    title
}) => {
    const dateString = getDateString(date)
    return (
        <FullWidthWrapper width={WrapperMax.MaxWidth} verticalSpacing={0}>
            <div className="post-navigation-bar">
                <NavLink 
                    title="Newer Post"
                />
                <SimpleContainer classes="post-navigation-date code highlight-orange">
                    <div>{dateString} // <span className="highlight-aqua">{title}</span>   </div>
                </SimpleContainer>
                <NavLink 
                    title="Older Post"
                />
            </div>
        </FullWidthWrapper>
    )
}

export default PostNavigationBar