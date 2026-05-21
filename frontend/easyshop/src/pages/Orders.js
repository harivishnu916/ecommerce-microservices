import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  return (
    <div className="container">
      <h2>My Orders 📦</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order.id}>
            <h4>Order ID: {order.id}</h4>
            <p>Total: ₹{order.total}</p>
            <p>Ordered On: {order.date}</p>
            <p>Delivery By: {order.delivery}</p>

            {order.items.map((item) => (
              <div key={item.id}>
                <p>{item.name} (x{item.qty})</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;