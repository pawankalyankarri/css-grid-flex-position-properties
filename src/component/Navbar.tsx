import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><NavLink to='c1'>Child1</NavLink></li>
                <li><NavLink to='c2'>Child2</NavLink></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
export default Navbar;