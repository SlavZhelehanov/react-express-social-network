import { NavLink } from "react-router";

import openNav from "../../../utils/openNav";
import { authUser } from "../../../../userDb";

import "./switchButton.css";
import { useUserContext } from "../../../contexts/UserContext";

export default function Navbar() {
    const { user, changeGlobals } = useUserContext();

    function handleGlobalState(e) {
        changeGlobals(e.target.checked);
    }

    return (
        <header className="w3-top">
            <nav className="w3-bar w3-theme-d2 w3-left-align w3-large">
                <NavLink
                    className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
                    to="javascript:void(0);"
                    onClick={openNav}
                >
                    <i className="fa fa-bars" />
                </NavLink>
                <NavLink to="/" className="w3-bar-item w3-logo-size w3-button w3-padding-large w3-theme-d4">
                    <i className="fa fa-home w3-margin-right" />
                    Robo Place
                </NavLink>

                <label className="switch">
                    <input type="checkbox" onClick={handleGlobalState} />
                    <span className="slider round"></span>
                </label>

                {user &&
                    <div className="w3-navbar-center">
                        <NavLink
                            to="#"
                            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
                            title="News"
                        >
                            <i className="fa fa-globe" />
                        </NavLink>
                        <NavLink
                            to="#"
                            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
                            title="Account Settings"
                        >
                            <i className="fa fa-user" />
                        </NavLink>
                        <NavLink
                            to="#"
                            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
                            title="Messages"
                        >
                            <i className="fa fa-envelope" />
                        </NavLink>
                        <div className="w3-dropdown-hover w3-hide-small">
                            <button className="w3-button w3-padding-large" title="Notifications">
                                <i className="fa fa-bell" />
                                <span className="w3-badge w3-right w3-small w3-green">3</span>
                            </button>
                            <div
                                className="w3-dropdown-content w3-card-4 w3-bar-block"
                                style={{ width: 300 }}
                            >
                                <NavLink to="#" className="w3-bar-item w3-button">
                                    One new friend request
                                </NavLink>
                                <NavLink to="#" className="w3-bar-item w3-button">
                                    John Doe posted on your wall
                                </NavLink>
                                <NavLink to="#" className="w3-bar-item w3-button">
                                    Jane likes your post
                                </NavLink>
                            </div>
                        </div>
                    </div>
                }
                <NavLink
                    to="#"
                    className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
                    title="My Account"
                >
                    <img
                        src={authUser.avatar}
                        className="w3-circle"
                        style={{ height: 23, width: 23 }}
                        alt="Avatar"
                    />
                </NavLink>
            </nav>
        </header>
    );
}