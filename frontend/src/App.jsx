import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <div className="min-vh-100 bg-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
