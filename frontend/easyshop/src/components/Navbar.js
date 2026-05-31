import React from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">

      <div className="nav-left"></div>

      <h2 className="logo">EASYSHOP</h2>

      {/* SHOW buttons only after clicking Shop Now */}
      {true && (
        <div className="nav-right">
          <button className="nav-btn">Login</button>
          <button className="nav-btn">Signup</button>
        </div>
      )}

    </div>
  );
}

export default Navbar;