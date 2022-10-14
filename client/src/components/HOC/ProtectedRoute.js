import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"

const ProtectedRoute = () => {

    const location = useLocation();
    const userStatus = useSelector((state) => state.user.status)

    return (
        userStatus ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />

    )
}

export default ProtectedRoute