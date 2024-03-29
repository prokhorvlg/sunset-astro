import FullWidthWrapper, {
  WrapperMax,
} from "@/components/wrappers/FullWidthWrapper.component"
import {
  faClose,
  faList,
  faMinus,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TransitionGradient from "@/components/home/TransitionGradient.component"

export const INSERTED_DISK_ID = "inserted_disk_id"

interface PropTypes {
  title?: string
  subtext?: string
  children?: any
  image?: "posts" | "creations" | null
  pullDown?: boolean // artificially heighten and reduce margin?
  showHeaderBar?: boolean
  isSpooky?: boolean // Does this page top trigger a spooky mode with close button (only on posts)
  isSpookyMode?: boolean
  setIsSpookyMode?: Function
}

const PageHeading = ({
  title,
  subtext,
  children = <></>,
  image,
  pullDown,
  showHeaderBar = true,
  isSpooky = false,
  isSpookyMode,
  setIsSpookyMode,
}: PropTypes) => {
  // Transform the page into the spooky page instead.
  const triggerSpooky = () => {
    if (setIsSpookyMode) {
      setIsSpookyMode(true)
    }
  }
  return (
    <FullWidthWrapper
      classes={`heading-area page ${
        pullDown ? "hidden-header" : null
      }`}
      width={WrapperMax.MaxWidth}
    >
      {showHeaderBar ? (
        <div className="heading-crown-wrapper">
          <div className="heading-crown">
            <div className="section">
              <FontAwesomeIcon
                icon={faList}
                className="main-icon"
              />
              <div className="lines">
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
              </div>
            </div>
            <span className="crown-title code">
              system content directory
            </span>
            <div className="section">
              <div className="lines">
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
              </div>
              <button className="crown-button orange">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button
                className={`crown-button close ${
                  isSpooky ? "spooky" : null
                }`}
                onClick={() => triggerSpooky()}
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <TransitionGradient direction="to-top" />
      <div className="main-area-wrapper">
        <div className={`main-area`}>
          <div className="heading-content">
            <div className={`heading-image ${image ?? ""}`}>
              {image === "posts" && (
                <>
                  <img
                    src="/images/posts-anim.gif"
                    className="posts-anim"
                    width="208"
                  />
                  <img
                    src="/images/posts.webp"
                    className="posts-image"
                    width="800"
                  />
                </>
              )}
              {image === "creations" && (
                <>
                  <img
                    src="/images/creations-anim.gif"
                    className="creations-anim"
                    width="640"
                  />
                  <img
                    src="/images/creations.webp"
                    className="creations-image"
                    width="700"
                  />
                </>
              )}
            </div>
            <h1 className="title">{title}</h1>
            <p className="description">{subtext}</p>
            {children}
          </div>
        </div>
      </div>
    </FullWidthWrapper>
  )
}

export default PageHeading
