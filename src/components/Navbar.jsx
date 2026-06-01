import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar({ search, setSearch }) {

  const location = useLocation();

  return (
    <div className="navbar">

      {/* LEFT - empty div for balance */}
      <div className="nav-left"></div>

      {/* LOGO - center */}
      <h2 className="logo">EASYSHOP</h2>

      {/* RIGHT */}
      <div className="nav-right">
        <button className="nav-btn">Login</button>
        <button className="nav-btn">Signup</button>
      </div>

    </div>
  );
}

export default Navbar;