import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Ecommercepng from "../assets/Ecommerce.png";
import google1webp from "../assets/google1.webp";
import axios from "axios";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:8080/auth/login",
      {
        email,
        password,
      }
    );

    const token = response.data;

    if (token === "Invalid credentials") {
      alert("Invalid Email or Password");
      return;
    }

    localStorage.setItem("token", token);
    localStorage.setItem("user", email);

    alert("Login Successful");

    navigate("/categories");
  } catch (error) {
    console.error(error);
    alert("Login Failed");
  }
};

  return (
    <div className="login-page">

      {/* LEFT IMAGE */}
      <div className="left">
        <img src={Ecommercepng} alt="shopping" />
      </div>

      {/* RIGHT FORM */}
      <div className="right">
        <div className="form-box">
          <h1>Welcome Back</h1>
          <p>Login to your EasyShop account</p>

          <form onSubmit={handleLogin}>

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

            <p className="forgot">Forgot Password?</p>

  <button type="submit" className="login-btn">
  Login
</button>

            <p className="signup">
              New to EasyShop?
              <span onClick={() => navigate("/signup")}> Sign Up</span>
            </p>

           <button
  type="button"
  className="google-btn"
  onClick={() => navigate("/categories")}
>
  <img src={google1webp} alt="google" />
  <span>Login with Google</span>
</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;