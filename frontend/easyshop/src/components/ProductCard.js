import React, { useState, useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
function ProductCard({ product }) {
  const [wish, setWish] = useState(false);
const navigate = useNavigate();
  // ✅ Check if item already in wishlist
  useEffect(() => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find((item) => item.id === product.id);
    setWish(!!exists);
  }, [product.id]);

  // ✅ ADD TO CART
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Added to cart"); // cleaner than alert
  };

  // ✅ TOGGLE WISHLIST
  const handleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wish) {
      // remove
      wishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      // add
      wishlist.push(product);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setWish(!wish);
  };

  return (
    <div className="card">

      {/* IMAGE */}
      <div className="img-box">
        <img src={product.image} alt={product.name} />
      </div>

      {/* TEXT */}
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {/* ADD TO CART */}
      <button className="cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>

      {/* ❤️ WISHLIST TOGGLE */}
      <button className="wishlist-btn" onClick={handleWishlist}>
        {wish ? "❤️ Added" : "🤍 Add to Wishlist"}
      </button>
<button
  className="buy-btn"
  onClick={() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, price: Number(product.price), qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // go to checkout
    window.location.href = "/checkout";
  }}
>
  Buy Now
</button>
    </div>
  );
}

export default ProductCard;