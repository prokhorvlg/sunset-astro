import Button from "../../../Button/Button.component"
import './NavLink.scss'

interface PropTypes {
    icon: string
    title: string
    description: string
}

const NavLink = ({
    icon,
     title,
     description
}: PropTypes) => {
    return (
        <li className="nav-link">
            <Button>
                <div className="nav-link-content">
                    <div className="icon">
                        {icon}
                    </div>
                    <div className="text">
                        <span className="strong">{title}</span>
                        <span>{description}</span>
                    </div>
                </div>
            </Button>
        </li>
    )
}

export default NavLink