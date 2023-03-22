import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button, { ButtonStyle } from "../../../Button/Button.component"
import DialogWrap, { DialogHeaderStyle } from "../../../DialogWrap/DialogWrap.component"
import './NavLink.scss'

interface PropTypes {
    icon: IconProp
    title: string
    description: string
    style?: string
}

const NavLink = ({
    icon,
     title,
     description,
     style
}: PropTypes) => {
    return (
        <li className="nav-link">
            <DialogWrap wrapStyle={{
                headerStyle: DialogHeaderStyle.none,
                hasHover: true
            }}>
                <div className={`nav-link-content ${style}`}>
                    <div className="nav-link-pushdown">
                    <div className="icon">
                        <FontAwesomeIcon icon={icon}/>
                    </div>
                    <div className="text">
                        <span className="title">{title}<FontAwesomeIcon icon={faArrowRight}/></span>
                        <span className="description">{description}</span>
                    </div>
                    </div>
                </div>
                </DialogWrap>
            {/*<Button style={ButtonStyle.BorderSnap}>
                <div className="nav-link-content">
                    <FontAwesomeIcon icon={icon} />
                        
                    <div className="text">
                        <span className="strong">{title}</span>
                        <span>{description}</span>
                    </div>
                </div>
    </Button>*/}
        </li>
    )
}

export default NavLink