import { Link } from "react-router";
import { useUserContext } from "../../../contexts/UserContext";
import { authUser } from "../../../../userDb";
import { userProfile } from "../../../../userProfile";
import Ad from "../../globals/ad/Ad";

export default function AuthAside() {
    const { user } = useUserContext();

    return (
        <aside className="w3-col m4 w3-margin sticky-column">            
            <div className="w3-card w3-round-large w3-white w3-padding">
                <h4 className="w3-center">Suggested Friends</h4>
                <ul className="w3-ul">
                    <li className="w3-padding-16">
                        <img
                            src="/assets/user1-avatar.png"
                            alt="User 1"
                            className="w3-circle w3-margin-right"
                            style={{ width: 50, height: 50 }}
                        />
                        <span>John Doe</span>
                        <button className="w3-button w3-small w3-theme w3-round-large w3-right">
                            <i className="fa fa-user-plus" /> Add
                        </button>
                    </li>
                    <li className="w3-padding-16">
                        <img
                            src="/assets/user2-avatar.png"
                            alt="User 2"
                            className="w3-circle w3-margin-right"
                            style={{ width: 50, height: 50 }}
                        />
                        <span>Jane Smith</span>
                        <button className="w3-button w3-small w3-theme w3-round-large w3-right">
                            <i className="fa fa-user-plus" /> Add
                        </button>
                    </li>
                </ul>
            </div>

            <div className="w3-card w3-round-large w3-white w3-padding w3-margin-top">
                <h4 className="w3-center">Trending Topics</h4>
                <ul className="w3-ul">
                    <li className="w3-padding-8">
                        <Link to="/topics/ai" className="w3-text-theme">
                            #ArtificialIntelligence
                        </Link>
                    </li>
                    <li className="w3-padding-8">
                        <Link to="/topics/robotics" className="w3-text-theme">
                            #Robotics
                        </Link>
                    </li>
                    <li className="w3-padding-8">
                        <Link to="/topics/tech" className="w3-text-theme">
                            #TechNews
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="w3-card w3-round-large w3-white w3-padding w3-margin-top">
                <h4 className="w3-center">Quick Links</h4>
                <ul className="w3-ul">
                    <li className="w3-padding-8">
                        <Link to="/settings" className="w3-text-theme">
                            <i className="fa fa-cog w3-margin-right" /> Settings
                        </Link>
                    </li>
                    <li className="w3-padding-8">
                        <Link to="/help" className="w3-text-theme">
                            <i className="fa fa-question-circle w3-margin-right" /> Help Center
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}