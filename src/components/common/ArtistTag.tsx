import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./ArtistTag.scss"

const ArtistTag = ({
  href,
  imageSrc,
  artistName,
}: {
  href?: string
  imageSrc?: string
  artistName: string
}) => {
  const hasLink = href && href !== "#"

  return (
    <a
      className={`bubble-tag artist-tag ${
        !hasLink ? "no-link" : ""
      }`}
      target="_blank"
      href={hasLink ? href : "#"}
    >
      {imageSrc && <img src={imageSrc} width="60" />}
      <div className="text-container">
        <span className="hide-on-mobile">
          Created by&nbsp;
        </span>
        <span className="show-on-mobile">by&nbsp;</span>
        {artistName}
        {hasLink && (
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
          />
        )}
      </div>
    </a>
  )
}

export default ArtistTag
