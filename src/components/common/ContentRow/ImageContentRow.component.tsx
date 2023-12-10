import ContentRow from "@/components/common/ContentRow/ContentRow.component"
import ImageGallery, { type FullImageDetails } from "@/components/common/ImageGallery/ImageGallery.component"
import 'photoswipe/dist/photoswipe.css'

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