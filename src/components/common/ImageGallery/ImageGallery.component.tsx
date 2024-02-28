import React from "react"
import { Gallery, Item } from "react-photoswipe-gallery"
import "photoswipe/dist/photoswipe.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { styled } from "@stitches/react"
import type { ImageDetails } from "@/data/sharedImages"
import type { GetImageResult } from "astro"
import ArtistTag from "@/components/common/ArtistTag"

export interface FullImageDetails {
  originalObject: ImageDetails // Contains the original file source
  processedObject: GetImageResult // Contains the webp converted file for thumb
  smallImage: GetImageResult
}

export interface ImageItem {
  id?: string
  src: string
  width: number
  height: number
  element?: HTMLImageElement
}

interface PropTypes {
  imageItems: (FullImageDetails | null)[]
  classes?: string
  imageDesktopWidth?: number
  imageMobileWidth?: number
  color?: string
  noCap?: boolean
}

const MAX_WIDTH = 1000 // based on row width max

const ContainerDiv = styled("div", {})

const ImageGallery = ({
  imageItems,
  classes = "",
  imageDesktopWidth,
  imageMobileWidth,
  color = "",
  noCap = false,
}: PropTypes) => {
  return (
    <Gallery>
      <ContainerDiv
        className={`gallery-container ${classes}`}
        css={{
          width: imageDesktopWidth + "px" || "auto",
          "@media screen and (max-width: 900px)": {
            width: imageMobileWidth + "px" || "auto",
            maxWidth: "98%",
          },
        }}
      >
        {imageItems.map((imageItem) => {
          if (!imageItem || !imageItem.processedObject)
            return null

          const originalWidth = Number(
            imageItem.processedObject.attributes.width ||
              "1"
          )
          const originalHeight = Number(
            imageItem.processedObject.attributes.height ||
              "1"
          )

          return (
            <div
              className="gallery-item"
              key={imageItem.originalObject.id}
            >
              <div className="over-image">
                {imageItem.originalObject.artist ? (
                  <ArtistTag
                    href={
                      imageItem.originalObject.artist.link
                    }
                    imageSrc={
                      imageItem.originalObject.artist
                        .profilePic
                    }
                    artistName={
                      imageItem.originalObject.artist.name
                    }
                  />
                ) : null}
                {imageItem.originalObject.originalPost ? (
                  <a
                    className="bubble-tag original-post-tag"
                    href={`/posts/${imageItem.originalObject.originalPost}`}
                    target="_blank"
                  >
                    <div className="text-container">
                      <span className="hide-on-mobile">
                        Go to original post{" "}
                      </span>
                      <span className="show-on-mobile">
                        Original post{" "}
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                      />
                    </div>
                  </a>
                ) : null}
              </div>
              <Item
                thumbnail={
                  imageItem.smallImage
                    ? (imageItem.smallImage.src as string)
                    : (imageItem.processedObject
                        .src as string)
                }
                original={
                  imageItem.processedObject.src as string
                }
                width={originalWidth}
                height={originalHeight}
              >
                {({ ref, open }) => {
                  return (
                    <div className="image-content-box">
                      <button
                        className="image-content-image"
                        onClick={open}
                      >
                        <img
                          src={
                            imageItem.processedObject.src ||
                            ""
                          }
                          alt={
                            imageItem.originalObject.alt ||
                            ""
                          }
                          width={MAX_WIDTH}
                          height={
                            (MAX_WIDTH / originalWidth) *
                            originalHeight
                          }
                          ref={
                            ref as React.MutableRefObject<HTMLImageElement>
                          }
                          className={`inner-image ${imageItem.originalObject.classes}`}
                          style={{
                            borderColor: color
                              ? color
                              : imageItem.originalObject
                                  .borderColor
                              ? imageItem.originalObject
                                  .borderColor
                              : "auto",
                          }}
                        />
                      </button>
                      {imageItem.originalObject.caption &&
                      !noCap ? (
                        <div className="top-text">
                          CAPTION //{" "}
                          <span className="highlight-orange">
                            {imageItem.originalObject
                              .caption || ""}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  )
                }}
              </Item>
            </div>
          )
        })}
      </ContainerDiv>
    </Gallery>
  )
}

export default ImageGallery
