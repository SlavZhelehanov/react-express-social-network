export default function LoadingSpinner() {
    return (
        <div className="w3-center w3-padding-64">
            <div className="w3-spin" style={{ fontSize: "64px" }}>
                <i className="fa fa-spinner w3-text-blue"></i>
            </div>
            <p className="w3-large w3-margin-top">Loading...</p>
        </div>
    );
};