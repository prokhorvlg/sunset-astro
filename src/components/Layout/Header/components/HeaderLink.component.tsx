import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HeaderLink.scss'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface PropsTypes {
    title: string
    active?: boolean
    icon?: any
}

const HeaderLink = ({
    title,
    active = false,
    icon
}: PropsTypes) => {
    return (
        <li className="header-link-item">
            <a className={`header-link ${active ? "active" : ""}`}>
                <span>{title}</span>
                <div className="on-hover">
                    <FontAwesomeIcon icon={icon} />
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </a>
        </li>
    )
}

export default HeaderLink;