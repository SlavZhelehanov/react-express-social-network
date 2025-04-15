import { NavLink } from "react-router";
import { useUserContext } from "../../../contexts/UserContext";

export default function NavbarSm() {
    const {user} = useUserContext();

    return (
        <div
            id="navDemo"
            className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large sticky-menu"
        >
            <NavLink to="/news" className="w3-bar-item w3-button w3-padding-large">
                News
            </NavLink>
            <NavLink to={`/auht/${user?._id}/profile`} className="w3-bar-item w3-button w3-padding-large">
                My Profile
            </NavLink>
            <NavLink to={`/auth/${user?._id}/messages`} className="w3-bar-item w3-button w3-padding-large">
                Messages
            </NavLink>
            <NavLink to="/auth/logout" className="w3-bar-item w3-button w3-padding-large">
                Logout
            </NavLink>
        </div>

    );
}