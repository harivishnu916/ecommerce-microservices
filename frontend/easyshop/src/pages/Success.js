import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state;

  // ✅ FIX 1: If no order data (user typed /success directly), redirect home
  useEffect(() => {
    if (!order) {
      navigate("/", { replace: true });
    }
  }, [order, navigate]);

  // ✅ FIX 2: Block browser back button — replace history so back goes to home
  useEffect(() => {
    // Push a dummy entry, then when user clicks back it hits this
    window.history.pushState(null, "", window.location.href);
    const handleBack = () => {
      window.history.pushState(null, "", window.location.href);
    };
    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, []);

  if (!order) return null;

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>🎉 Order Placed!</h1>

        <p>
          <strong>Order ID:</strong> {order.id}
        </p>
        <p>
          <strong>Total:</strong> ₹{order.total}
        </p>
        <p>
          <strong>Delivery By:</strong> {order.delivery}
        </p>

        {/* ✅ replace:true so they can't go back to checkout/card page */}
        <button onClick={() => navigate("/", { replace: true })}>
          Continue Shopping
        </button>

        <button onClick={() => navigate("/orders", { replace: true })}>
          View Orders
        </button>
      </div>
    </div>
  );
}

export default Success;
