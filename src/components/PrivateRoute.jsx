import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ element }) {
    const { isAuthenticated } = useContext(AuthContext);

    // Renderice the element if the user is authenticated
    // Otherwise, it redirects to /login
    return isAuthenticated ? element : <Navigate to="/login" />;
}
