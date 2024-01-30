import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className="nav">
        <li className="nav-item">
            <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/"}>Productos</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"category/mates"}>Mates</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"category/bombillas"}>Bombillas</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"category/termos"}>Termos</NavLink>
        </li>
    </ul>
)
    
}

export default NavBar;