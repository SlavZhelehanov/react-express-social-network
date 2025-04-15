import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../../../contexts/UserContext";

export default function Logout() {
    const { logout, changeGlobals } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        // localStorage.removeItem("accessToken");

        logout(null);
        changeGlobals(false);
        return () => navigate("/");
    }, [logout, navigate]);

    return null;
};
