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
      <div className="qty-box">
        <button onClick={() => setQty(qty > 0 ? qty - 1 : 0)}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>

    </div>
  );
}

export default ProductCard;