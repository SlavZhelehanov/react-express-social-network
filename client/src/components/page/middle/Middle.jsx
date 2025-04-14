import CreatePost from "./post/CreatePost";
import Post from "./post/Post";

export default function Middle({ posts }) {
    const isAuthenticated = false;

    return (
        <div className="w3-col m7">
            <div className="w3-row-padding">
                <div className="w3-col m12">
                    <div className="w3-card w3-round w3-white">
                        {isAuthenticated
                            ? <CreatePost />
                            : <div className="w3-round-large w3-white w3-container w3-padding w3-center">
                                <h4 className="w3-opacity w3-margin-bottom">
                                    <i className="fa fa-bullhorn w3-text-blue w3-large"></i> &nbsp;
                                    Check out what’s fresh! 🍃
                                </h4>
                                <p className="w3-text-grey">Here are our most recent posts — curated, honest, and straight from the heart.</p>
                            </div>}
                    </div>
                </div>
            </div>

            {posts ? (
                posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post => <Post key={post._id} post={post} />)
            ) : (
                <div className="w3-container w3-card w3-white w3-round w3-margin">
                    <div className="w3-round w3-white w3-padding w3-center">
                        <i className="fa fa-info-circle w3-xxlarge w3-text-theme" />
                        <p className="w3-large">No posts available yet. Be the first to share something!</p>
                    </div>
                </div>
            )}
        </div >
    );
}