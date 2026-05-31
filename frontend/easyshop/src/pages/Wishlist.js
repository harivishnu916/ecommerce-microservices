import React, { useEffect, useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  // ❌ Remove item
  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // 🛒 Move to cart
  const moveToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((c) => c.id === item.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        ...item,
        price: Number(item.price), // ✅ FIX
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    removeItem(item.id);
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
            <img src={item.image} alt={item.name} width="80" />

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