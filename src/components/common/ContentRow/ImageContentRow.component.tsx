import ContentRow from "@/components/common/ContentRow/ContentRow.component"
import 'photoswipe/dist/photoswipe.css'
import { ImageDetails } from "@/data/sharedImages";
import ImageGallery, { FullImageDetails } from "@/components/common/ImageGallery/ImageGallery.component";

interface PropTypes {
    imageItems: (FullImageDetails | null)[]
    noCap?: boolean
}

const ImageContentRow = ({
    imageItems,
    noCap
}: PropTypes) => {
    return (
        <ContentRow classes="image-content-row">
            <ImageGallery imageItems={imageItems} noCap={noCap}/>
        </ContentRow>
    )
}

export default ImageContentRow