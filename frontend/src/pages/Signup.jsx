import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) navigate("/login");
        else alert("Error al registrar usuario");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Registrarse</button>
        </form>
    );
};

export default Signup;