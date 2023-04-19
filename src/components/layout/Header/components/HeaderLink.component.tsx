import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface PropsTypes {
    type?: HeaderLinkType
    title: string
    active?: boolean
    icon?: any
    target?: string
    dropText?: string
    external?: boolean
    isFooter?: boolean
}

export enum HeaderLinkType {
    Text = "text",
    Icon = "icon"
}

const HeaderLink = ({
    type = HeaderLinkType.Text,
    title,
    active = false,
    icon,
    target,
    dropText,
    external = false,
    isFooter = false
}: PropsTypes) => {
    return (
        <li className={`header-link-item ${type} ${isFooter ? "is-footer" : ""}`}>
            <a className={`header-link ${active ? "active" : ""}`} href={target} 
                target={external ? "_blank" : "_self"}
            >
                <div className="icon-container">
                    { type === HeaderLinkType.Icon ? 
                        <FontAwesomeIcon icon={icon} /> : null
                    }
                    <span className="title">{title}</span> 
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="mobile-arrow" />
                <div className="on-hover">
                    { type === HeaderLinkType.Text ? 
                        <>
                            <div className='given-icon-container'>
                                <FontAwesomeIcon icon={icon} className="given-icon"/>
                            </div>
                            <p className="drop-text">{dropText}</p>
                        </>
                        :
                        <div className='text-container'>
                            <h3>{title}</h3>
                            <p className="drop-text">{dropText}</p>
                        </div>
                    }
                    <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                </div>
            </a>
        </li>
    )
}

export default HeaderLink;