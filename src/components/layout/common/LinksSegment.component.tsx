import HeaderLink from "@/components/layout/Header/components/HeaderLink.component"
import { CommonLinks, CommonText } from "@/data/Common"
import { faHome, faList, faGamepad } from "@fortawesome/free-solid-svg-icons"

export const LinksSegment = ({ currentPage = '', isFooter = false }) => {
    return (
        <div className="links-segment">
            <ul>
                <HeaderLink
                    title="Home"
                    active={currentPage === "/"}
                    icon={faHome}
                    target={CommonLinks.home}
                    dropText={CommonText.home}
                    isFooter={isFooter}
                />
                <HeaderLink
                    title="Posts"
                    active={currentPage === "/posts"}
                    icon={faList}
                    target={CommonLinks.posts}
                    dropText={CommonText.posts}
                    isFooter={isFooter}
                />
                <HeaderLink
                    title="Game"
                    active={currentPage === "/game"}
                    icon={faGamepad}
                    target={CommonLinks.game}
                    dropText={CommonText.game}
                    isFooter={isFooter}
                />
                <HeaderLink
                    title="Supporters"
                    active={currentPage === "/supporters"}
                    icon={faHome}
                    target={CommonLinks.supporters}
                    dropText={CommonText.supporters}
                    isFooter={isFooter}
                />
            </ul>
        </div>
    )
}

export default LinksSegment