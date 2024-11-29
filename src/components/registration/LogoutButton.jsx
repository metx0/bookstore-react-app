import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function LogoutButton() {
    const logout = useContext(AuthContext).logout;
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <span onClick={handleLogout}>Cerrar sesión</span>
    );
}
