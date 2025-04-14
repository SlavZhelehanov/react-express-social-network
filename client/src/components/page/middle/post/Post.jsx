// import { Suspense } from "react";

import { Link } from "react-router";
import { timeAgo } from "../../../../utils/timeAge";
import "./Post.css";
import Attachements from "./attachements/Attachements";
// import LoadingTemplateImage from "../../../globals/loadingTemplateImage/LoadingTemplateImage";


export default function Post({ post }) {
    const isAuthenticated = true;

    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin">
            <br />
            <img
                src={post.avatar}
                alt="Avatar"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: 60 }}
            />
            <span className="w3-right w3-opacity">{timeAgo(post?.createdAt)}</span>
            <h4>{post.owner?.firstName} {post.owner?.lastName}</h4>
            <br />

            <hr className="w3-clear" />

            {post.media && (
                <>
                    {post.media.title && <p>{post.media.title}</p>}
                    {post.media.image && <img src={post.media.image} style={{ width: "100%" }} className="w3-margin-bottom" />}
                </>
            )}

            {post.content && <p>{post.content}</p>}

            {post.images && <Attachements images={post.images} />}

            <div className={`button-container ${!isAuthenticated ? "centered" : ""}`}>
                {isAuthenticated && <button
                    type="button"
                    className="w3-button w3-theme-d1 w3-margin-bottom"
                >
                    <i className="fa fa-thumbs-up" /> &nbsp;Like
                </button>}
                <span className="w3-small w3-margin-left w3-margin-right activities-counter">
                    {post.likes?.length || 0} Likes | {post.comments?.length || 0} Comments
                </span>
                {isAuthenticated && <Link
                    to={`/posts/${post._id}/details`}
                    type="button"
                    className="w3-button w3-theme-d2 w3-margin-bottom"
                >
                    <i className="fa fa-comment" /> &nbsp;Comments
                </Link>}
            </div>
        </div>
    );
}