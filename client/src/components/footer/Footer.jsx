import { NavLink } from "react-router";
import "./Footer.css"; 

export default function Footer() {
    return (
        <div className="">
            <footer className="w3-container w3-theme-d3 w3-padding-16">
                <h5>Footer</h5>
            </footer>
            <footer className="w3-container w3-theme-d5">
                <p>
                    Powered by{" "}
                    <NavLink to="https://www.w3schools.com/w3css/default.asp" target="_blank">
                        w3.css
                    </NavLink>
                </p>
            </footer>
        </div>
    );
}