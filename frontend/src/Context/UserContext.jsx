import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
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
        alert(data?.error || "Authentication successful!");
        localStorage.setItem("token", data.token);
    };




    const [token, setToken] = useState(true);
    const logout = () => {
        setToken(false);
    };


    return (
        <UserContext.Provider value={{ token, logout, email, setEmail, password, setPassword, handleSubmit }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
