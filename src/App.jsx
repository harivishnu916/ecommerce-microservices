import React, { useState } from "react";
import './index.css'
import Ecommercepng from "./assets/Ecommerce .png";
import google1webp from "./assets/google1.webp"
function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="container">

    

      <div className="left">

        <img
          src= {Ecommercepng}
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

      

            <p className="forgot">
              Forgot Password?
            </p>

            

            <button className="login-btn">
              Login
            </button>

          

            <p className="signup">

              New to EasyShop?

              <span> Sign Up</span>

            </p>
            <button className="google-btn">

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

  )
}

export default Login;