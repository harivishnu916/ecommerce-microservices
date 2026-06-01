import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {

  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    

    fetch("http://localhost:8081/cart")
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const removeItem = (id) => {

    fetch(`http://localhost:8081/cart/${id}`, {
      method: "DELETE"
    })
      .then(() => {

        setCart(
          cart.filter(
            (item) => item.id !== id
          )
        );

      });

  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

 return (
    
     

  <div className="cart-container">
  
    <h2>My Cart</h2>

    {cart.length === 0 ? (
      <p>No items in cart</p>
    ) : (
      <>
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={`http://localhost:8081${item.image}`}
              alt={item.name}
            />

            <div className="cart-details">
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
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
 )
}

export default Cart;