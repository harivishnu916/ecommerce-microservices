import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Navbar() {
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
useEffect(() => {
  const updateCounts = async () => {
    try {
      // Cart count from backend
      const res = await fetch("http://localhost:8081/cart");
      const cart = await res.json();

      // Wishlist count from localStorage
      const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

      setCartCount(cart.length);
      setWishCount(wishlist.length);
    } catch (error) {
      console.log(error);
    }
  };

  updateCounts();
}, []);
 

  return (
   <div className="navbar">

  <div className="nav-left">
    <h2 className="logo">EASYSHOP</h2>
  </div>

  <div className="nav-right">
    <button className="icon-btn" onClick={() => navigate("/wishlist")}>
  ❤️ <span>{wishCount}</span>
</button>

<button className="icon-btn" onClick={() => navigate("/cart")}>
  🛒 <span>{cartCount}</span>
</button>
    <button onClick={() => navigate("/login")}>
  Login
</button>
    <button onClick={() => navigate("/signup")}>
  Signup
</button>
  </div>

</div>
  );
}

export default Navbar;