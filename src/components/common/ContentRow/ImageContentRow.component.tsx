import ContentRow from "@/components/common/ContentRow/ContentRow.component"

import React, { ImgHTMLAttributes } from 'react'
//import Zoom from 'react-medium-image-zoom'
//import 'react-medium-image-zoom/dist/styles.css'
import { Gallery, Item } from "react-photoswipe-gallery";
import 'photoswipe/dist/photoswipe.css'
import { ImageDetails } from "@/utils/sharedImages";

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
}

const MAX_WIDTH = 994 // based on row width max

const ImageContentRow = ({
    imageItems
}: PropTypes) => {
    return (
        <ContentRow classes="image-content-row">
            <Gallery>
                <div className="gallery-container">
                    {imageItems.map((imageItem) => {
                        if (!imageItem) return null
                        return (
                            <div className="gallery-item">
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
                                            <button className="image-content-image" onClick={open}>
                                                {imageItem.originalObject.caption ? 
                                                    <div className="top-text">CAPTION // <span className="highlight-orange">{imageItem.originalObject.caption || ""}</span></div>
                                                    : null
                                                }
                                                <img
                                                    src={imageItem.processedObject.src || ""}
                                                    alt={imageItem.originalObject.alt || ""}
                                                    width={MAX_WIDTH}
                                                    height={MAX_WIDTH / originalWidth * originalHeight}
                                                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                                                />
                                            </button>
                                        )
                                    }}
                                </Item>
                            </div>
                        )
                    })}
                </div>
            </Gallery>
        </ContentRow>
    )



        /*
        <ContentRow>
            <Gallery id="my-gallery">
                <div className="gallery-container">
                    {imageItems.map((imageItem) => {
                        console.log(imageItem)
                        return (
                            <Item
                                original={imageItem.src}
                                width={imageItem.width}
                                height={imageItem.height}
                            >
                                {({ ref, open }) => (
                                    <img
                                        src={imageItem.src}
                                        width="100%"
                                        ref={ref as React.MutableRefObject<HTMLImageElement>}
                                        onClick={open}
                                    />
                                )}
                            </Item>
                        )
                    })}
                </div>
            </Gallery>
        </ContentRow>
    )


<img
                                        src={imageItem.src}
                                        width="100%"
                                        ref={ref as React.MutableRefObject<HTMLImageElement>}
                                        onClick={open}
                                    />

    return (
        <ContentRow>
            <Zoom>
                <img
                    alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                    src={imageItems[0].src}
                    width="100%"
                />
            </Zoom>
        </ContentRow>
    )
    
    const [index, setIndex] = useState(-1);
    const slides = imageItems.map((imageItem) => {
        return {
            src: imageItem.src,
            key: imageItem.id,
            width: imageItem.width,
            height: imageItem.height
        }
    })


    return (
        <ContentRow>
            <PhotoAlbum 
                layout="rows"
                photos={imageItems}
                onClick={({ index }) => setIndex(index)}    
            />
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
            />
        </ContentRow>
    )*/
    /*
    return (
        <ContentRow>
            {imageItems.map((imageItem) => (
                <img src={imageItem.src} width="100%"/>
            ))}
        </ContentRow>
    )*/
}

export default ImageContentRow