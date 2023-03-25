import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DialogContainer, { DialogHeaderStyle } from "../../../containers/DialogContainer/DialogContainer.component"

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
        <li className={`nav-link ${style}`}>
            <DialogContainer wrapStyle={{
                headerStyle: DialogHeaderStyle.none,
                hasHover: true
            }}>
                <div className={`nav-link-content`}>
                    <div className="nav-link-pushdown">
                        <div className="icon">
                            <FontAwesomeIcon icon={icon}/>
                        </div>
                        <div className="text">
                            <span className="title">{title}</span>
                            <span className="description">{description}</span>
                        </div>
                        <div className="icon-arrow">
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </div>
                    </div>
                </div>
            </DialogContainer>
        </li>
    )
}

export default NavLink