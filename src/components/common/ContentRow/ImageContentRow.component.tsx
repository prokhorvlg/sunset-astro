import ContentRow from "@/components/common/ContentRow/ContentRow.component"

export interface ImageItem {
    source: string
}

interface PropTypes {
    imageItems: ImageItem[]
}

const ImageContentRow = ({
    imageItems
}: PropTypes) => {
    return (
        <ContentRow>
            {imageItems.map((imageItem) => (
                <img src={imageItem.source} width="100%"/>
            ))}
        </ContentRow>
    )
}

export default ImageContentRow