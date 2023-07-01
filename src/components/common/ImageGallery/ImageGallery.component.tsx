import React from 'react'
import { Gallery, Item } from "react-photoswipe-gallery";
import 'photoswipe/dist/photoswipe.css'
import { ImageDetails } from "@/data/sharedImages";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@stitches/react';

export interface FullImageDetails {
    originalObject: ImageDetails                        // Contains the original file source
    processedObject: astroHTML.JSX.ImgHTMLAttributes  // Contains the webp converted file for thumb
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

const ContainerDiv = styled('div', {});

const ImageGallery = ({
    imageItems,
    classes = '',
    imageDesktopWidth,
    imageMobileWidth,
    color = '',
    noCap = false
}: PropTypes) => {
    return (
        <Gallery>
            <ContainerDiv 
                className={`gallery-container ${classes}`} 
                css={{
                    width: imageDesktopWidth + "px" || 'auto',
                    '@media screen and (max-width: 900px)': {
                        width: imageMobileWidth + "px" || 'auto',
                        maxWidth: '98%'
                    }
                  }}
            >
                {imageItems.map((imageItem) => {
                    if (!imageItem) return null
                    return (
                        <div className="gallery-item" key={imageItem.originalObject.id}>
                            <div className="over-image">
                                {imageItem.originalObject.artist ? 
                                    <a className="artist-tag" target="_blank" href={imageItem.originalObject.artist.link || ""}>
                                        <img src={imageItem.originalObject.artist.profilePic} width="60"/>
                                        <div className="text-container">
                                            <span className="hide-on-mobile">Created by&nbsp;</span>
                                            <span className="show-on-mobile">by&nbsp;</span>
                                            {imageItem.originalObject.artist.name} 
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </div>
                                    </a> 
                                    :
                                    null
                                }
                                {imageItem.originalObject.originalPost ? 
                                    <a className="original-post-tag" href={`/posts/${imageItem.originalObject.originalPost}`} target="_blank">
                                        <div className="text-container">
                                            <span className="hide-on-mobile">Go to original post </span>
                                            <span className="show-on-mobile">Original post </span>
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </div>
                                    </a>
                                    : null 
                                }
                            </div>
                            <Item
                                thumbnail={imageItem.processedObject.src as string}
                                original={imageItem.originalObject.src as string}
                                width={imageItem.originalObject.width as number}
                                height={imageItem.originalObject.height as number}
                            >
                                {({ ref, open }) => {
                                    const originalWidth = imageItem.originalObject.width || 1
                                    const originalHeight = imageItem.originalObject.height || 1
                                    return (
                                        <div className="image-content-box">
                                            <button className="image-content-image" onClick={open}>
                                                <img
                                                    src={imageItem.processedObject.src || ""}
                                                    alt={imageItem.originalObject.alt || ""}
                                                    width={MAX_WIDTH}
                                                    height={MAX_WIDTH / originalWidth * originalHeight}
                                                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                                                    className={`inner-image ${imageItem.originalObject.classes}`}
                                                    style={{
                                                        borderColor: color ? color :
                                                            imageItem.originalObject.borderColor ? imageItem.originalObject.borderColor : 
                                                                "auto" 
                                                    }}
                                                />
                                            </button>
                                            {imageItem.originalObject.caption && !noCap ? 
                                                <div className="top-text">CAPTION // <span className="highlight-orange">{imageItem.originalObject.caption || ""}</span></div>
                                                : null
                                            }
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