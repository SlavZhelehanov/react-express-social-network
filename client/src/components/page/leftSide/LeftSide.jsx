import { useUserContext } from "../../../contexts/UserContext";
import Ad from "../../globals/ad/Ad";
import Acordeon from "./acordeon/Acordeon";
import { AlertBox } from "./alertBox/AlertBox";
import Interests from "./interests/Interests";
import ProfileCard from "./profileCard/ProfileCard";

export default function LeftSide() {
    const { user } = useUserContext();

    return (
        <div className="w3-col m3 sticky-column">
            <ProfileCard />
            {user
                ? <>
                    <br />
                    <Acordeon />
                    <br />
                    <Interests />
                    <br />
                    <AlertBox />
                </>
                : <>
                    <br />
                    <Ad />
                </>
            }
        </div>
    );
}