import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 VALIDATION
    if (!user.name || !user.email || !user.password || !user.mobile) {
      setError("All fields are required");
      return;
    }

    if (!user.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    if (user.mobile.length !== 10) {
      setError("Mobile must be 10 digits");
      return;
    }

    if (user.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    alert("Signup Successful!");

    // optional redirect
    navigate("/login");
  };

  return (
    <div className="signup-container">

      <h1>Welcome to EasyShop</h1>
      <h3>Create Account</h3>

      <form onSubmit={handleSubmit} className="signup-form">

  {error && <p className="error">{error}</p>}

  <div className="input-box">
    <span>👤</span>
    <input type="text" name="name" required onChange={handleChange} />
    <label>Full Name</label>
  </div>

  <div className="input-box">
    <span>📧</span>
    <input type="email" name="email" required onChange={handleChange} />
    <label>Email</label>
  </div>

  <div className="input-box">
    <span>📱</span>
    <input type="text" name="mobile" required onChange={handleChange} />
    <label>Mobile Number</label>
  </div>

  <div className="input-box">
    <span>🏠</span>
    <input type="text" name="address" onChange={handleChange} />
    <label>Address</label>
  </div>

  <div className="input-box password-box">
    <span>🔒</span>
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      required
      onChange={handleChange}
    />
    <label>Password</label>

    <div
      className="toggle"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? "🙈" : "👁"}
    </div>
  </div>

  <button type="submit">Signup</button>

</form>

      <p className="login-text">
        Already have an account?
        <span onClick={() => navigate("/login")}> Login</span>
      </p>

    </div>
  );
}

export default Signup;