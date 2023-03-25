import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface PropsTypes {
    title: string
    active?: boolean
    icon?: any
    target?: string
    dropText? : string
}

const HeaderLink = ({
    title,
    active = false,
    icon,
    target,
    dropText
}: PropsTypes) => {
    return (
        <li className="header-link-item">
            <a className={`header-link ${active ? "active" : ""}`} href={target}>
                <span>{title}</span>
                <div className="on-hover">
                    <FontAwesomeIcon icon={icon} />
                    <FontAwesomeIcon icon={faArrowRight} />
                    {dropText}

                </div>
            </a>
        </li>
    )
}

export default HeaderLink;