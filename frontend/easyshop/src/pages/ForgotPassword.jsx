import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ForgotPassword.css";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        `http://localhost:8087/auth/forgot-password?email=${email}`
      );

    setMessage(response.data);

      navigate("/verify-otp", {
        state: { email }
      });

    } catch (error) {

      alert("Failed to send OTP");
      console.log(error);

    }

  };

  return (
    <div className="forgot-container">

      <div className="forgot-card">

        <h2>Forgot Password?</h2>

        <p>
          Enter your registered email address and we'll send you an OTP.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Send OTP
          </button>
          {message && (
  <p className="success-message">
    {message}
  </p>
)}

        </form>

      </div>

    </div>
  );
}

export default ForgotPassword;
