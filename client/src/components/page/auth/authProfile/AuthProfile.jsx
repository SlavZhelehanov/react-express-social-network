import { Link, useParams } from "react-router";
import { userProfile } from "../../../../../userProfile";
import { useUserContext } from "../../../../contexts/UserContext";
import "./authProfile.css";
import AuthAside from "../AuthAside";
import Post from "../../middle/post/Post";

export default function AuthProfile() {
    const { user } = useUserContext();
    const { id } = useParams();

    return (
        <main className="w3-container w3-content w3-center" style={{ maxWidth: 1600, marginTop: 80 }}>
            <div className="w3-row">
                <div className="w3-col m7">
                    <div className="w3-content w3-margin-top container-mw">
                        <div className="card w3-center w3-round-large">
                            <div className="avatar w3-margin-bottom" style={{
                                backgroundImage: `url(${userProfile?.coverImage})`
                            }}>
                                <img
                                    src={user?.avatar}
                                    alt="Avatar"
                                    className="profile-avatar"
                                />
                            </div>
                            <div className="content">
                                <div className="detail">
                                    <h3 className="w3-text-dark-grey">{user?.firstName} {user?.lastName}</h3>
                                    <p className="w3-opacity">{userProfile?.aboutMe}</p>
                                    <div className="w3-row w3-margin-top profile-stats">
                                        <div className="w3-third">
                                            <i className="fa fa-users w3-large w3-text-indigo" />
                                            <p>Friends</p>
                                            <strong>{userProfile?.friendsCount}</strong>
                                        </div>
                                        <div className="w3-third">
                                            <i className="fa fa-star w3-large w3-text-orange" />
                                            <p>Followers</p>
                                            <strong>{userProfile?.followersCount}</strong>
                                        </div>
                                        <div className="w3-third">
                                            <i className="fa fa-share w3-large w3-text-teal" />
                                            <p>Following</p>
                                            <strong>{userProfile?.followingCount}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {user && <div className="w3-col w3-margin">
                                {id + "s" === user._id
                                    ? <Link to={`/auth/${user?._id}/edit-profile`} className="w3-button w3-small w3-theme w3-round-large">
                                        <i className="fa fa-pencil" /> Edit Profile

                                    </Link>
                                    : <>
                                        <button className="w3-button w3-theme w3-round-large w3-margin-right">
                                            <i className="fa fa-user-plus" /> Follow
                                        </button>
                                        <button className="w3-button w3-white w3-border w3-round-large w3-margin-right">
                                            <i className="fa fa-envelope" /> Message
                                        </button>
                                        <button className="w3-button w3-theme w3-border w3-round-large w3-margin-right">
                                            <i className="fa fa-user-plus" /> Sent Friend Reuqest
                                        </button>
                                    </>
                                }
                            </div>
                            }
                        </div>
                    </div>

                    <div className="w3-content content-margin-top container-mw">
                        {user?.posts
                            ? user.posts.map(post => <Post key={post._id} post={post} />)
                            : <div className="w3-round w3-white w3-padding w3-center">
                                <i className="fa fa-info-circle w3-xxlarge w3-text-theme" />
                                <p className="w3-large">No posts available yet.</p>
                            </div>
                        }
                    </div>
                </div>
                {user && <AuthAside />}
            </div>
        </main>
    );
}