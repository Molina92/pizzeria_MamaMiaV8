import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const urlBase = "http://localhost:5000/api/auth";
const initialStateToken = localStorage.getItem("token") || null;

const UserProvider = ({ children }) => {


    const navigate = useNavigate();
    const [token, setToken] = useState(initialStateToken);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(`${urlBase}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            setToken(data.token);
            navigate("/");
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch(`${urlBase}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();
        alert(data?.error || "Register successful!");
        if (data.token) {
            localStorage.setItem("token", data.token);
            setToken(data.token);
            navigate("/");
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
        navigate("/");
    };


    return (
        <UserContext.Provider value={{ token, logout, email, setEmail, password, setPassword, handleLogin, handleRegister, confirmPassword, setConfirmPassword }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
