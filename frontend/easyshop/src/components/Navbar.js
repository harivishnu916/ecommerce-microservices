import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">

      <div className="nav-left"></div>

      <h2 className="logo">EASYSHOP</h2>

      <div className="nav-right">
        <button className="nav-btn" onClick={() => navigate("/login")}>
          Login
        </button>

        <button className="nav-btn" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </div>

    </div>
  );
}

export default Navbar;