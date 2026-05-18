import React, { useState } from "react";
import "./styles.css";
import { useContext } from "react";
 
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
     <button
  className="cart-btn"
  onClick={() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart");
  }}
>
  Add to Cart
</button>
<button
  className="wishlist-btn"
  onClick={() => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to Wishlist ❤️");
    } else {
      alert("Already in Wishlist");
    }
  }}
>
  ❤️ Add to Wishlist
</button>
    </div>
  );
}

export default ProductCard;