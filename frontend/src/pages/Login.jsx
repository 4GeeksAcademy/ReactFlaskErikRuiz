import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        console.log("BACKEND_URL:", backendUrl); // DEBUG: esto debe mostrar la URL del backend

        let data = {};
        try {
            const response = await fetch(backendUrl + "/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            try {
                data = await response.json();
            } catch {
                data = { msg: "Respuesta vacía del servidor" };
            }

            if (response.ok) {
                sessionStorage.setItem("token", data.token);
                navigate("/private");
            } else {
                alert(data.msg || "Credenciales inválidas");
            }
        } catch (error) {
            alert("Error de red: " + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;