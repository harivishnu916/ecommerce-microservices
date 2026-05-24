import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar({ search, setSearch }) {

  const location = useLocation();

  return (

    <div className="navbar">

    

   

      {/* LOGO */}

      <h2 className="logo">
        EASYSHOP
      </h2>

      {/* RIGHT SIDE */}

      <div className="nav-right">

        <button className="nav-btn">
          Login
        </button>

        <button className="nav-btn">
          Signup
        </button>

      </div>

    </div>
  );
}

export default Navbar;