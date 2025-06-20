import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) return navigate("/login");

        fetch(import.meta.env.VITE_BACKEND_URL + "/api/private", {
            headers: { Authorization: "Bearer " + token },
        })
            .then((res) => {
                if (!res.ok) throw Error();
            })
            .catch(() => navigate("/login"));
    }, []);

    return <h1>Zona Privada</h1>;
};

export default Private;