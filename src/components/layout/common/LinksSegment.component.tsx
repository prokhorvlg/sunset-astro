import HeaderLink from "@/components/layout/Header/components/HeaderLink.component"
import { CommonLinks, CommonText } from "@/data/Common"
import {
  faHome,
  faList,
  faGamepad,
  faMap,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"

export const LinksSegment = ({
  currentPage = "",
  isFooter = false,
}) => {
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
          title="Map"
          active={currentPage === "/map"}
          icon={faMap}
          target={CommonLinks.map}
          dropText={CommonText.map}
          isFooter={isFooter}
        />
        {/* <HeaderLink
          title="Creations"
          active={currentPage === "/creations"}
          icon={faHeart}
          target={CommonLinks.creations}
          dropText={CommonText.creations}
          isFooter={isFooter}
        /> */}
        <HeaderLink
          title="Credits"
          active={currentPage === "/credits"}
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
