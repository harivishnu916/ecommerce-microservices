import React, { useEffect, useState } from "react";
import axios from "axios";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  // Remove item from wishlist
  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // Move item to backend cart
  const moveToCart = async (item) => {
    try {
      await axios.post("http://localhost:8081/cart", {
        productId: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
      });

      // Remove from wishlist after successful add
      removeItem(item.id);

      alert("Moved to Cart");
    } catch (error) {
      console.error(error);
      alert("Failed to move item");
    }
  };

  return (
    <div className="container">
      <h2>My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div className="cart-item" key={item.id}>
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              width="80"
            />

            {/* DETAILS */}
            <div>
              <p>{item.name}</p>
              <p>₹{Number(item.price)}</p>
            </div>

            {/* ACTIONS */}
            <div className="wishlist-actions">
              <button
                className="move-cart-btn"
                onClick={() => moveToCart(item)}
              >
                🛒 Move to Cart
              </button>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;