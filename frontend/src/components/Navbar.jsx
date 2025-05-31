import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </nav>
    );
};

export default Navbar;