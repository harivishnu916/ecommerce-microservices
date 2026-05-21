import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state;

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>🎉 Order Placed!</h1>

        {order && (
          <>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Delivery By:</strong> {order.delivery}</p>
          </>
        )}

        <button onClick={() => navigate("/")}>
          Continue Shopping
        </button>

        <button onClick={() => navigate("/orders")}>
          View Orders
        </button>
      </div>
    </div>
  );
}

export default Success;