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
                            <Item
                                original={imageItem.originalObject.src as string}
                                width={imageItem.originalObject.width as number}
                                height={imageItem.originalObject.height as number}
                            >
                                {({ ref, open }) => (
                                    <button className="image-content-image" onClick={open}> 
                                        <div className="top-text">// IMAGE VIEWER - <span className="highlight-aqua">{imageItem.originalObject.alt || ""}</span></div>
                                        <img
                                            src={imageItem.processedObject.src || ""}
                                            alt={imageItem.originalObject.alt || ""}
                                            width="994"
                                            loading="lazy"
                                            ref={ref as React.MutableRefObject<HTMLImageElement>}
                                        />
                                    </button>
                                )}
                            </Item>
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