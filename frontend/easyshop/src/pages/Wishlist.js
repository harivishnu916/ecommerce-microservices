import React, { useEffect, useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} width="60" />

            <div>
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>

            {/* ❌ REMOVE BUTTON */}
            <button
              className="remove-btn"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;