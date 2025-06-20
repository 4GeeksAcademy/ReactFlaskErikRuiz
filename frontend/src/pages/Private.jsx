import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        console.log("PRIVATE - BACKEND_URL:", backendUrl);

        if (!token) {
            navigate("/login");
            return;
        }

        fetch(backendUrl + "/api/private", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error("No autorizado");
                }
                const data = await res.json();
                setMessage(data.msg || "Acceso autorizado");
            })
            .catch(() => {
                sessionStorage.removeItem("token");
                navigate("/login");
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div>
            <h2>Zona Privada</h2>
            <p>{message}</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};

export default Private;
