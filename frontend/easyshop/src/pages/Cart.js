import React, { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const changeQty = (id, type) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        if (type === "inc") item.qty += 1;
        if (type === "dec" && item.qty > 1) item.qty -= 1;
      }
      return item;
    });

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container">
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              
              {/* IMAGE */}
              <img src={item.image} alt={item.name} />

              {/* DETAILS */}
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                {/* QUANTITY */}
                <div className="qty-box">
                  <button onClick={() => changeQty(item.id, "dec")}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => changeQty(item.id, "inc")}>+</button>
                </div>
              </div>

              {/* REMOVE */}
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* 🔥 TOTAL + CHECKOUT */}
          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;