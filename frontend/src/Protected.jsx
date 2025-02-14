import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Protected() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProtectedData = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Not authenticated");
                navigate("/login");
                return;
            }
            try {
                const res = await axios.get("http://localhost:5000/protected", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setMessage(res.data.message);
            } catch (error) {
                alert("Access denied");
                navigate("/login");
            }
        };
        fetchProtectedData();
    }, [navigate]);

    return (
        <div>
            <h2>Protected Route</h2>
            <p>{message}</p>
        </div>
    );
}

export default Protected;
