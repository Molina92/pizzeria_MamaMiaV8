import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
export const UserContext = createContext();

const urlBase = "http://localhost:5000/api";
const initialStateToken = localStorage.getItem("token") || null;

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(initialStateToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({});
  const { cart, setCart } = useContext(CartContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${urlBase}/auth/login`, {
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

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError(true);
      return;
    }

    if (password.length >= 6 && password === confirmPassword) {
      setError(false);

      const response = await fetch(`${urlBase}/auth/register`, {
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
    } else {
      if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
      } else {
        alert("Las contraseñas no coinciden.");
      }
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const getUserData = async (token) => {
    try {
      const response = await fetch(`${urlBase}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };

  useEffect(() => {
    if (token) {
      getUserData(token);
    }
  }, [token]);

  const handleCheckout = async () => {
    try {
      const response = await fetch(`${urlBase}/checkouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error("Error en la compra: " + errorData.message);
      }
      const data = await response.json();
      alert("Compra exitosa");
      setCart([]);
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        logout,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleRegister,
        confirmPassword,
        setConfirmPassword,
        error,
        userData,
        handleCheckout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
