import React from "react";

function Hero({ onShopNow }) {
  return (
    <div className="hero">
      <h1>Welcome to EASYSHOP</h1>
      <p>Your one-stop shop</p>

      {/* ✅ THIS IS REQUIRED */}
      <button onClick={onShopNow}>
        Shop Now
      </button>
    </div>
  );
}

export default Hero;