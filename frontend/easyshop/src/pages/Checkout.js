import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [payment, setPayment] = useState("");

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(cart);
  }, []);

  // REMOVE ITEM
  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // TOTAL
  const total = items.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = item.qty || 1;
    return sum + price * qty;
  }, 0);

  // validate form helper
  const validateForm = () => {
    if (!form.name || !form.mobile || !form.address) {
      setError("Please fill all details before selecting payment");
      return false;
    }
    if (form.mobile.length !== 10) {
      setError("Mobile must be 10 digits");
      return false;
    }
    return true;
  };

  // FINAL ORDER FLOW (COD only reaches here)
  const handlePlaceOrder = () => {
    if (!form.name || !form.mobile || !form.address) {
      setError("Please fill all details");
      return;
    }
    if (form.mobile.length !== 10) {
      setError("Mobile must be 10 digits");
      return;
    }
    if (!payment) {
      setError("Please select payment method");
      return;
    }

    // safety net — if upi/card somehow selected, redirect
    if (payment === "card") {
      navigate("/card-payment", { state: { total, items, form } });
      return;
    }
    if (payment === "upi") {
      navigate("/upi-payment", { state: { total, items, form } });
      return;
    }

    setError("");

    // COD only reaches here
    const newOrder = {
      id: "ORD" + Date.now(),
      items: items,
      total: total,
      date: new Date().toLocaleDateString(),
      delivery: new Date(
        Date.now() + 3 * 24 * 60 * 60 * 1000,
      ).toLocaleDateString(),
      status: "Pending",
      paymentMethod: "Cash on Delivery",
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");
    navigate("/success", { state: newOrder });
  };

  return (
    <div className="container">
      <h2>Checkout 🧾</h2>

      {items.length === 0 ? (
        <p>No items to checkout</p>
      ) : (
        <>
          {/* ITEMS */}
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} width="80" />
              <div>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>Qty: {item.qty}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <h3>Total: ₹{total}</h3>

          {/* PROCEED */}
          <button className="checkout-btn" onClick={() => setShowForm(true)}>
            Proceed to Buy ({items.length} items)
          </button>

          {/* FORM */}
          {showForm && (
            <div className="checkout-form">
              {/* ERROR MESSAGE */}
              {error && <p className="error">{error}</p>}

              <h3>Enter Delivery Details</h3>

              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  setError("");
                }}
              />

              <input
                type="text"
                placeholder="Mobile Number"
                value={form.mobile}
                maxLength={10}
                onChange={(e) => {
                  setForm({ ...form, mobile: e.target.value });
                  setError("");
                }}
              />

              <input
                type="text"
                placeholder="Address"
                value={form.address}
                onChange={(e) => {
                  setForm({ ...form, address: e.target.value });
                  setError("");
                }}
              />

              {/* PAYMENT */}
              <h4>Payment Method</h4>

              <div className="payment-option-box">
                {/* COD */}
                <div
                  className={`pay-box ${payment === "cod" ? "active" : ""}`}
                  onClick={() => {
                    setPayment("cod");
                    setError("");
                  }}
                >
                  Cash on Delivery
                </div>

                {/* ✅ UPI - validates first, then navigates */}
                <div
                  className={`pay-box ${payment === "upi" ? "active" : ""}`}
                  onClick={() => {
                    setError("");
                    if (!validateForm()) return;
                    setPayment("upi");
                    navigate("/upi-payment", { state: { total, items, form } });
                  }}
                >
                  UPI
                </div>

                {/* ✅ CARD - validates first, then navigates */}
                <div
                  className={`pay-box ${payment === "card" ? "active" : ""}`}
                  onClick={() => {
                    setError("");
                    if (!validateForm()) return;
                    setPayment("card");
                    navigate("/card-payment", {
                      state: { total, items, form },
                    });
                  }}
                >
                  Card
                </div>
              </div>

              {/* PLACE ORDER (COD only) */}
              <button className="checkout-btn" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Checkout;
