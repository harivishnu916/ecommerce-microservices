import React, { useState, useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProductCard({ product }) {
  const [wish, setWish] = useState(false);
  const navigate = useNavigate();

  // Check wishlist
  useEffect(() => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find((item) => item.id === product.id);
    setWish(!!exists);
  }, [product.id]);

  // Add to Cart (Backend)
  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:8081/cart", {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });

      alert("Added to Cart");
    } catch (error) {
      console.error(error);
      alert("Failed to add cart");
    }
  };

  // Wishlist
  const handleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wish) {
      wishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      wishlist.push(product);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setWish(!wish);
  };

  // Buy Now
  const handleBuyNow = async () => {
    try {
      await axios.post("http://localhost:8081/cart", {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });

      navigate("/checkout");
    } catch (error) {
      console.error(error);
      alert("Failed");
    }
  };

  return (
    <div className="card">
      {/* IMAGE */}
     <div
  className="img-box"
  onClick={() =>
    navigate(`/product/${product.id}`, {
      state: { product }
    })
  }
  style={{ cursor: "pointer" }}
>
  <img src={product.image} alt={product.name} />
</div>

      {/* DETAILS */}
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {/* ADD TO CART */}
      <button className="cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>

      {/* WISHLIST */}
      <button className="wishlist-btn" onClick={handleWishlist}>
        {wish ? "❤️ Added" : "🤍 Add to Wishlist"}
      </button>

      {/* BUY NOW */}
      <button className="buy-btn" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;