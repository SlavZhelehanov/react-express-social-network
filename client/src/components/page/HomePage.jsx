import postsDb from "../../../postsDb";
import LeftSide from "./leftSide/LeftSide";
import Middle from "./middle/Middle";
import RightSide from "./rightSide/RightSide";

export default function HomePage() {
    return (
        <main
            className="w3-container w3-content"
            style={{ maxWidth: 1400, marginTop: 80 }}
        >
            {/* The Grid */}
            <div className="w3-row">
                <LeftSide />

                <Middle posts={postsDb} />

                <RightSide />
            </div>
        </main>
    );
}