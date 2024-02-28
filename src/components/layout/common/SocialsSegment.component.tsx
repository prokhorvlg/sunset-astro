import HeaderLink, {
  HeaderLinkType,
} from "@/components/layout/Header/components/HeaderLink.component"
import { CommonLinks, CommonText } from "@/data/Common"
import {
  faPatreon,
  faDiscord,
  faRedditAlien,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import {
  faHome,
  faList,
  faGamepad,
  faImage,
} from "@fortawesome/free-solid-svg-icons"

export const SocialsSegment = ({
  currentPage = "",
  isFooter = false,
}) => {
  return (
    <div className="socials-segment">
      <ul>
        <HeaderLink
          title="Patreon"
          icon={faPatreon}
          target={CommonLinks.patreon}
          dropText={CommonText.patreon}
          type={HeaderLinkType.Icon}
          external={true}
          isFooter={isFooter}
        />
        <HeaderLink
          title="Prints"
          icon={faImage}
          target={CommonLinks.prints}
          dropText={CommonText.prints}
          type={HeaderLinkType.Icon}
          external={true}
          isFooter={isFooter}
        />
        <HeaderLink
          title="Discord"
          icon={faDiscord}
          target={CommonLinks.discord}
          dropText={CommonText.discord}
          type={HeaderLinkType.Icon}
          external={true}
          isFooter={isFooter}
        />
        <HeaderLink
          title="Subreddit"
          icon={faRedditAlien}
          target={CommonLinks.subreddit}
          dropText={CommonText.subreddit}
          type={HeaderLinkType.Icon}
          external={true}
          isFooter={isFooter}
        />
        <HeaderLink
          title="Twitter"
          icon={faTwitter}
          target={CommonLinks.twitter}
          dropText={CommonText.twitter}
          type={HeaderLinkType.Icon}
          external={true}
          isFooter={isFooter}
        />
        {/* <HeaderLink
                    title="Instagram"
                    icon={faInstagram}
                    target={CommonLinks.instagram}
                    dropText={CommonText.instagram}
                    type={HeaderLinkType.Icon}
                    external={true}
                    isFooter={isFooter}
                /> */}
      </ul>
    </div>
  )
}

export default SocialsSegment
