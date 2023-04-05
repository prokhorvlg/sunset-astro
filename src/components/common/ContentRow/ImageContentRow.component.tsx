import ContentRow from "@/components/common/ContentRow/ContentRow.component"

import React, { ImgHTMLAttributes } from 'react'
//import Zoom from 'react-medium-image-zoom'
//import 'react-medium-image-zoom/dist/styles.css'
import { Gallery, Item } from "react-photoswipe-gallery";
import 'photoswipe/dist/photoswipe.css'


export interface ImageItem {
    id?: string
    src: string
    width: number
    height: number
    element?: HTMLImageElement
}

interface PropTypes {
    imageItems: (astroHTML.JSX.ImgHTMLAttributes | null)[]
}

const ImageContentRow = ({
    imageItems
}: PropTypes) => {
    /*return (
        <ContentRow>
            {imageItems.map((imageItem) => {
                if (!imageItem) return null
                return (
                    <img src={imageItem.src || ""} width="100%" loading="lazy"/>
                )
            })}
        </ContentRow>
    )*/

    return (
        <ContentRow classes="image-content-row">
            <Gallery>
                <div className="gallery-container">
                    {imageItems.map((imageItem) => {
                        if (!imageItem) return null
                        return (
                            <Item
                                original={imageItem.src as string}
                                width={imageItem.width as number}
                                height={imageItem.height as number}
                            >
                                {({ ref, open }) => (
                                    <img 
                                        src={imageItem.src || ""} 
                                        width="100%" 
                                        //loading="lazy"
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