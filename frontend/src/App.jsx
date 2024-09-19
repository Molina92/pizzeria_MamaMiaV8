import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import  Cart from "./Pages/Cart";
import { Pizza } from "./Pages/Pizza";
import { Profile } from "./Pages/Profile";
import { NotFound } from "./Pages/NotFound";

function App() {
  return (
    <>
      <div className="min-vh-100 bg-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
