import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./VerifyOtp.css";
import axios from "axios";

function VerifyOtp() {

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const handleVerify = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8087/auth/verify-otp",
        {
          email: email,
          otp: otp
        }
      );

      if (response.data === "OTP Verified") {

        setMessage("✓ OTP Verified");

        setTimeout(() => {

          navigate("/reset-password", {
            state: { email }
          });

        }, 1000);

      } else {

        setMessage(response.data);

      }

    } catch (error) {

      setMessage("OTP Verification Failed");
      console.log(error);

    }

  };

  return (
    <div className="verify-container">

      <div className="verify-card">

        <h2>Verify OTP</h2>

        <p>
          Enter the OTP sent to your email address
        </p>

        <form onSubmit={handleVerify}>

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button type="submit">
            Verify OTP
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

export default VerifyOtp;