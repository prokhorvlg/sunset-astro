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
    external = false
}: PropsTypes) => {
    return (
        <li className={`header-link-item ${type}`}>
            <a className={`header-link ${active ? "active" : ""}`} href={target} 
                target={external ? "_blank" : "_self"}
            >
                { type === HeaderLinkType.Text ? 
                    <span>{title}</span> 
                    : 
                    <FontAwesomeIcon icon={icon} />
                }
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