import { NavLink } from "react-router";
import { authUser } from "../../../../userDb";
import { useUserContext } from "../../../contexts/UserContext";

export default function NavUserDropdown() {
    const { user } = useUserContext();

    return <div className="w3-dropdown-hover w3-right">
        <button className="w3-button w3-hide-small w3-padding-large w3-hover-white w3-circle">
            <img
                src={authUser.avatar}
                className="w3-circle avatar-img"
                style={{ height: 23, width: 23 }}
                alt="Avatar"
            />
        </button>
        <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ right: 0, minWidth: 150 }}>
            <NavLink to={`/auth/${user?._id}/profile`} className="w3-bar-item w3-button">
                <i className="fa fa-user w3-margin-right"></i> My Profile
            </NavLink>
            <NavLink to={`/auth/${user?._id}/edit-profile`} className="w3-bar-item w3-button">
                <i className="fa fa-pencil w3-margin-right"></i> Edit Profile
            </NavLink>
            <NavLink to="/auth/logout" className="w3-bar-item w3-button">
                <i className="fa fa-sign-out w3-margin-right"></i> Logout
            </NavLink>
        </div>
    </div>
}