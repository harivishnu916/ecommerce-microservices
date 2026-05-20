import React, { useEffect, useState } from "react";

function Checkout() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(cart);
  }, []);

  // ❌ REMOVE ITEM
  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ✅ TOTAL
  const total = items.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = item.qty || 1;
    return sum + price * qty;
  }, 0);

  // ✅ PLACE ORDER
  const handleBuy = () => {
    alert("Order Placed Successfully 🎉");

    localStorage.removeItem("cart");
    setItems([]);
  };

  return (
    <div className="container">
      <h2>Checkout 🧾</h2>

      {items.length === 0 ? (
        <p>No items to checkout</p>
      ) : (
        <>
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              
              {/* IMAGE */}
              <img src={item.image} alt={item.name} width="80" />

              {/* DETAILS */}
              <div>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>Qty: {item.qty}</p>
              </div>

              {/* ❌ REMOVE */}
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* ✅ TOTAL */}
          <h3>Total: ₹{total}</h3>

          {/* 🔥 BUY BUTTON */}
          <button className="checkout-btn" onClick={handleBuy}>
            Proceed to Buy ({items.length} items)
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;