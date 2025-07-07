import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        fetch(`${backendUrl}/api/private`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                if (!res.ok) throw new Error("No autorizado");
                return res.json();
            })
            .then(data => setMsg(data.msg))
            .catch(() => {
                sessionStorage.removeItem("token");
                navigate("/login");
            });
    }, [navigate]);

    return (
        <div>
            <h2>Zona Privada</h2>
            <p>{msg}</p>
        </div>
    );
};

export default Private;
