import React, { useState } from "react";
import "./index.css";
import Ecommercepng from "./assets/Ecommerce .png";
import google1webp from "./assets/google1.webp";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

      const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {

    try {

      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );

    const response = await axios.post(
  "http://localhost:8087/auth/google-login",
  {
    email: userInfo.data.email,
    name: userInfo.data.name,
  }
);

localStorage.setItem(
  "token",
  response.data
);

      console.log("Google Login Success");

      // navigate("/home");

    } catch (error) {

  console.log("ERROR =", error);

  if (error.response) {
    console.log(error.response.data);
  }

  alert("Google Login Failed");
}

  },

  onError: () => {
    alert("Google Login Failed");
  },
});

  return (
    <div className="container">

      <div className="left">
        <img
          src={Ecommercepng}
          alt="shopping"
        />
      </div>

      <div className="right">

        <div className="form-box">

          <h1>Welcome Back</h1>

          <p>
            Login to your EasyShop account
          </p>

          <form>

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Password</label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </span>

            </div>

            <Link to="/forgot-password">
              <p className="forgot">Forgot Password?</p>
            </Link>

            <button
              type="button"
              className="login-btn"
            >
              Login
            </button>

            <p className="signup">
              New to EasyShop?
              <span> Sign Up</span>
            </p>

            <button
              type="button"
              className="google-btn"
              onClick={() => googleLogin()}
            >
              <img
                src={google1webp}
                alt="google"
              />

              Login with Google
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;