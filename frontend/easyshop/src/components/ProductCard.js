import React, { useState } from "react";
import "./styles.css";

function ProductCard({ product }) {
  const [qty, setQty] = useState(0);

  return (
    <div className="card">
      
      {/* IMAGE */}
      <div className="img-box">
        <img src={product.image} alt={product.name} />
      </div>

      {/* TEXT */}
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {/* BUTTON */}
      <button className="cart-btn">
  Add to Cart
</button>

    </div>
  );
}

export default ProductCard;