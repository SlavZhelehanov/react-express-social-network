import { useUserContext } from "../../../contexts/UserContext";
import Ad from "../../globals/ad/Ad";

export default function RightSide() {
    const {user} = useUserContext();
    
    return (
        <div className="w3-col m2 sticky-column">
            <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                    <p>Upcoming Events:</p>
                    <img src="https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Forest" style={{ width: "100%" }} />
                    <p>
                        <strong>Holiday</strong>
                    </p>
                    <p>Friday 15:00</p>
                    <p>
                        <button className="w3-button w3-block w3-theme-l4">Info</button>
                    </p>
                </div>
            </div>
            <br />
            <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                    <p>Friend Request</p>
                    <img src="https://robohash.org/JaneDoe" alt="Avatar" style={{ width: "50%" }} />
                    <br />
                    <span>Jane Doe</span>
                    <div className="w3-row w3-opacity">
                        <div className="w3-half">
                            <button
                                className="w3-button w3-block w3-green w3-section"
                                title="Accept"
                            >
                                <i className="fa fa-check" />
                            </button>
                        </div>
                        <div className="w3-half">
                            <button
                                className="w3-button w3-block w3-red w3-section"
                                title="Decline"
                            >
                                <i className="fa fa-remove" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Ad />
            <br />
            <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
                <p>
                    <i className="fa fa-bug w3-xxlarge" />
                </p>
            </div>
            {/* End Right Column */}
        </div>
    );
}