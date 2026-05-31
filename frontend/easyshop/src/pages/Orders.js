import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  // ❌ CANCEL ORDER
  const cancelOrder = (id) => {
    const updated = orders.map((order) => {
      if (order.id === id) {
        return { ...order, status: "Cancelled" };
      }
      return order;
    });

    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  // ✅ CONFIRM ACTION (MODAL)
  const handleConfirm = () => {
    if (actionType === "delete") {
      const updated = orders.filter((order) => order.id !== selectedId);
      setOrders(updated);
      localStorage.setItem("orders", JSON.stringify(updated));
    }

    if (actionType === "clear") {
      setOrders([]);
      localStorage.removeItem("orders");
    }

    setShowModal(false);
  };

  return (
    <div className="container">
      <h2>My Orders 📦</h2>

      {/* CLEAR ALL */}
      {orders.length > 0 && (
        <button
          className="clear-btn"
          onClick={() => {
            setActionType("clear");
            setShowModal(true);
          }}
        >
          Clear All Orders
        </button>
      )}

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.id}>
            
            <h4>Order ID: {order.id}</h4>
            <p>Total: ₹{order.total}</p>
            <p>Ordered On: {order.date}</p>
            <p>Delivery By: {order.delivery}</p>

            {/* STATUS */}
            <p>
              Status:
              <span className={`status ${order.status}`}>
                {order.status}
              </span>
            </p>

            {/* ITEMS */}
            {order.items.map((item) => (
              <div key={item.id}>
                <p>{item.name} (x{item.qty})</p>
              </div>
            ))}

            {/* ACTIONS */}
            <div className="order-actions">

              {order.status === "Pending" && (
                <button
                  className="cancel-btn"
                  onClick={() => cancelOrder(order.id)}
                >
                  Cancel
                </button>
              )}

              <button
                className="delete-btn"
                onClick={() => {
                  setSelectedId(order.id);
                  setActionType("delete");
                  setShowModal(true);
                }}
              >
                Delete
              </button>

            </div>
          </div>
        ))
      )}

      {/* 🔥 CUSTOM MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            
            <h3>Are you sure?</h3>
            <p>
              {actionType === "delete"
                ? "Do you want to delete this order?"
                : "Clear all orders? This cannot be undone!"}
            </p>

            <div className="modal-actions">
              <button className="confirm-btn" onClick={handleConfirm}>
                Yes
              </button>

              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;