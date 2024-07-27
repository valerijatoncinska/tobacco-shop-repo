import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (<nav>

        <ul>
            <li>
                <NavLink to="/">View orders</NavLink>
            </li>
            <li>
                <NavLink to="/account">Account Admin</NavLink>
            </li>
        </ul>
    </nav>)
}

export default Navigation;