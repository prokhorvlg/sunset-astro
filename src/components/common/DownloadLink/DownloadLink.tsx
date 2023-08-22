import Button, { ButtonType } from "@/components/common/Button/Button.component"
import DialogContainer from "@/components/containers/DialogContainer/DialogContainer.component"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './DownloadLink.scss'

interface PropTypes {
    children: JSX.Element
    classes?: string
    linkURL?: string
}

const DownloadLink = ({
    children,
    classes = "",
    linkURL = ''
}: PropTypes) => {
    return (
        <Button 
            type={ButtonType.Link}
            linkURL={linkURL}
            classes={`download-link ${classes}`}
            isDownload
        >
            <>
                <FontAwesomeIcon icon={faDownload} className="download-icon" />{children}
            </>
        </Button>
    )
}

export default DownloadLink;