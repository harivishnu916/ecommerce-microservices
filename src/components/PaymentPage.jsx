import React from "react";

import { useLocation } from "react-router-dom";

import "./PaymentPage.css";

function PaymentPage() {

  const location = useLocation();

  const { product } = location.state;

  return (

    <div className="payment-page">

      {/* LEFT SIDE */}

      <div className="payment-left">

        <h1>
          Checkout / Payment
        </h1>

        <input
          type="text"
          placeholder="Card Holder Name"
        />

        <input
          type="text"
          placeholder="Card Number"
        />

        <input
          type="text"
          placeholder="Expiry Date"
        />

        <input
          type="password"
          placeholder="CVV"
        />

        <textarea
          placeholder="Billing Address"
          rows="4"
        ></textarea>

        <button className="pay-btn">

          Pay Securely

        </button>

      </div>

      {/* RIGHT SIDE */}

      <div className="payment-right">

        <h2>
          Order Summary
        </h2>

        <img
          src={product.image}
          alt={product.name}
        />

        <h3>
          {product.name}
        </h3>

        <div className="summary">

          <p>
            Price :
            ₹{product.price}
          </p>

          <p>
            Delivery :
            FREE
          </p>

          <p>
            Discount :
            -₹0
          </p>

          <hr />

          <h2>
            Total :
            ₹{product.price}
          </h2>

        </div>

      </div>

    </div>

  )
}

export default PaymentPage;