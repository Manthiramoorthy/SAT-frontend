import { Navigate } from "react-router-dom";
function ProtectedRoute({ children, role }) {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    // If token exists, render the children components
    if (token) {
        if (role && user.role !== role) {
            // If the user role does not match the required role, redirect to home
            return <Navigate to="/pagenotfound" replace />;
        }
        return children;
    }

    // If no token, redirect to login page
    return <Navigate to="/login" replace />;
}

export default ProtectedRoute;