import { NavLink } from "react-router";

export default function NavbarSm() {
    return (
        <div
            id="navDemo"
            className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large"
        >
            <NavLink to="#" className="w3-bar-item w3-button w3-padding-large">
                Link 1
            </NavLink>
            <NavLink to="#" className="w3-bar-item w3-button w3-padding-large">
                Link 2
            </NavLink>
            <NavLink to="#" className="w3-bar-item w3-button w3-padding-large">
                Link 3
            </NavLink>
            <NavLink to="#" className="w3-bar-item w3-button w3-padding-large">
                My Profile
            </NavLink>
        </div>

    );
}