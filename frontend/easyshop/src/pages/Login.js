import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Ecommercepng from "../assets/Ecommerce.png";
import google1webp from "../assets/google1.webp";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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

           <p 
  className="forgot"
  onClick={() => navigate("/forgot-password")}
>
  Forgot Password?
</p>

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
  onClick={() => googleLogin()}
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