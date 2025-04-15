import { Link } from "react-router";

export default function PageNotFound() {
    return (
        <div className="w3-display-container w3-light-grey w3-padding-64" style={{ height: "100vh" }}>
            <div className="w3-display-middle w3-center">
                <img
                    src="/assets/404.png"
                    alt="Robot confused"
                    style={{ width: "200px", maxWidth: "90%" }}
                    className="w3-animate-top"
                />
                <h1 className="w3-xxxlarge w3-text-grey w3-animate-opacity">404</h1>
                <p className="w3-large w3-text-dark-grey w3-animate-opacity">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link to="/" className="w3-button w3-blue w3-round-large w3-margin-top w3-hover-shadow">
                    Go Home
                </Link>
            </div>
        </div>
    );
};