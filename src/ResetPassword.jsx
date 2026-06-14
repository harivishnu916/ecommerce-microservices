import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ResetPassword.css";
import axios from "axios";

function ResetPassword() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messages, setMessages] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const handleReset = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {

      alert("Passwords do not match");
      return;

    }

    try {

      const response = await axios.post(
        "http://localhost:8087/auth/reset-password",
        {
          email: email,
          password: password
        }
      );

      setMessages(response.data);

      if (response.data === "Password Reset Successfully") {

        navigate("/");

      }

    } catch (error) {

      alert("Password Reset Failed");
      console.log(error);

    }

  };

  return (
    <div className="reset-container">

      <div className="reset-card">

        <h2>Reset Password</h2>

        <p>
          Create a new password for your account
        </p>

        <form onSubmit={handleReset}>

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">
            Reset Password
          </button>
          {messages && (
  <p className="success-message">
    ✓ {message}
  </p>
)}
        </form>

      </div>

    </div>
  );
}

export default ResetPassword;