import ContentRow from "@/components/common/ContentRow/ContentRow.component"
import 'photoswipe/dist/photoswipe.css'
import { ImageDetails } from "@/utils/sharedImages";
import ImageGallery, { FullImageDetails } from "@/components/common/ImageGallery/ImageGallery.component";

interface PropTypes {
    imageItems: (FullImageDetails | null)[]
}

const ImageContentRow = ({
    imageItems
}: PropTypes) => {
    return (
        <ContentRow classes="image-content-row">
            <ImageGallery imageItems={imageItems}/>
        </ContentRow>
    )
}

export default ImageContentRow