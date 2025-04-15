import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../../contexts/UserContext";

export function ProtectedRoute() {
    const { user } = useUserContext();

    return user ? <Outlet /> : <Navigate to="/" />;
};

export function PublicRoute() {
    const { user } = useUserContext();

    return user ? <Navigate to="/"/> : <Outlet />;
};
