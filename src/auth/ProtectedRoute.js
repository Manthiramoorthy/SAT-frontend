import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");

    // If token exists, render the children components
    if (token) {
        return children;
    }

    // If no token, redirect to login page
    return <Navigate to="/login" replace />;
}

export default ProtectedRoute;