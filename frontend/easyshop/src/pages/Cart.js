import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load cart from backend
  useEffect(() => {
    axios
      .get("http://localhost:8081/cart")
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Remove item from backend
  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/cart/${id}`);

      setCart(cart.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Quantity (frontend only for now)
  const changeQty = (id, type) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        if (type === "inc") item.quantity += 1;
        if (type === "dec" && item.quantity > 1) item.quantity -= 1;
      }
      return item;
    });

    setCart([...updated]);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div className="qty-box">
                  <button onClick={() => changeQty(item.id, "dec")}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => changeQty(item.id, "inc")}>
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;