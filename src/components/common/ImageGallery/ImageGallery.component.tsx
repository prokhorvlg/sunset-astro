import React from 'react'
import { Gallery, Item } from "react-photoswipe-gallery";
import 'photoswipe/dist/photoswipe.css'
import { ImageDetails } from "@/utils/sharedImages";
import styled from "styled-components";

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
}

const MAX_WIDTH = 1000 // based on row width max

const ImageGallery = ({
    imageItems,
    classes = '',
    imageDesktopWidth,
    imageMobileWidth
}: PropTypes) => {
    const ContainerDiv = styled.div`
        width: ${imageDesktopWidth + "px" || 'auto'};
        @media screen and (max-width: 900px) {
            width: ${imageMobileWidth + "px" || 'auto'};
        }
    `;

    return (
        <Gallery>
            <ContainerDiv className={`gallery-container ${classes}`}>
                {imageItems.map((imageItem) => {
                    if (!imageItem) return null
                    return (
                        <div className="gallery-item" key={imageItem.originalObject.id}>
                            {imageItem.originalObject.artist ? 
                                <a className="artist-tag" target="_blank" href={imageItem.originalObject.artist.link || ""}>
                                    <img src={imageItem.originalObject.artist.profilePic} width="60"/>
                                    <span>Created by {imageItem.originalObject.artist.name}</span>
                                </a> 
                                :
                                null
                            }
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
                                                />
                                            </button>
                                            {imageItem.originalObject.caption ? 
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