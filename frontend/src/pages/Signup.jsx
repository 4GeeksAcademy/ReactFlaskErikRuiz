import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        console.log("BACKEND_URL:", backendUrl);

        let data = {};
        try {
            const response = await fetch(backendUrl + "/api/signup", {
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
                alert("Usuario registrado");
                navigate("/login");
            } else {
                alert(data.msg || "Error al registrar");
            }
        } catch (error) {
            alert("Error de red: " + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro</h2>
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
            <button type="submit">Registrarse</button>
        </form>
    );
};

export default Signup;