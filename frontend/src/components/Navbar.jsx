import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav>
            <Link to="/signup">Registro</Link>
            <Link to="/login">Login</Link>
            <Link to="/private">Privado</Link>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </nav>
    );
};

export default Navbar;