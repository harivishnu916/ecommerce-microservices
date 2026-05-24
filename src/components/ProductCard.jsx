import React from "react";
import "./ShoppingPage.css";

function ProductCard({ product }) {

  return (
    <div className="card">

      <div className="img-box">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button className="cart-btn">
        Add to Cart
      </button>

    </div>
  )
}

export default ProductCard;