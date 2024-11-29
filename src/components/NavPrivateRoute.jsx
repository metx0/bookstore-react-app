import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ element }) {
    const { isAuthenticated } = useContext(AuthContext);

    // Renderices the element only if the user is authenticated

    if (isAuthenticated) {
        return element;
    }
}
