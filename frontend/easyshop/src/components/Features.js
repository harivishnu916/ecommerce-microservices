import React from "react";
import "./styles.css";
import { FaShoppingCart, FaLock, FaStar } from "react-icons/fa";

function Features() {
  return (
    <div className="features">
      <h2>BROWSE THROUGH THOUSANDS OF PRODUCTS</h2>

      <div className="feature-box">
        <FaShoppingCart size={40} />
        <h3>Wide Product Selection</h3>
        <p>Browse a diverse range of products.</p>
      </div>

      <div className="feature-box">
        <FaLock size={40} />
        <h3>Secure Checkout</h3>
        <p>Enjoy safe and secure payments.</p>
      </div>

      <div className="feature-box">
        <FaStar size={40} />
        <h3>Customer Reviews</h3>
        <p>Make informed decisions.</p>
      </div>
    </div>
  );
}

export default Features;