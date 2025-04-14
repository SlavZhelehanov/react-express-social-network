import { Link } from "react-router";
import { authUser } from "../../../../../userDb";
import { userProfile } from "../../../../../userProfile";

function dateFormatter(params) {
    return new Date(params).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

export default function ProfileCard() {
    const born = dateFormatter(userProfile.born);

    return (
        <div className="w3-card w3-round-large w3-white">
            <div className="w3-container">
                <h4 className="w3-center">My Info</h4>
                <p className="w3-center">
                    <img
                        src={authUser?.avatar}
                        className="w3-circle"
                        style={{ height: 106, width: 106 }}
                        alt="Avatar"
                    />
                </p>
                <p className="w3-center w3-names-size"><Link className="w3-a-link" to={`/auth/${authUser._id}/profile`}>{authUser?.firstName} {authUser?.lastName}</Link></p>
                <hr />
                <p>
                    <i className="fa fa-paper-plane-o w3-margin-right w3-text-theme" />{" "}
                    {userProfile.postsCount} posts
                </p>
                <p>
                    <i className="fa fa-users w3-margin-right w3-text-theme" />{" "}
                    {userProfile.friendsCount} friends
                </p>
                <p>
                    <i className="fa fa-star w3-margin-right w3-text-theme" />{" "}
                    {userProfile.followersCount} followers
                </p>
                <p>
                    <i className="fa fa-share w3-margin-right w3-text-theme" />{" "}
                    {userProfile.followingCount} following
                </p>
            </div>
        </div>
    );
}