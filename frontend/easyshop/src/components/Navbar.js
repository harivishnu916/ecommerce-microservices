import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>EASYSHOP</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
      </div>
    </div>
  );
}

export default Navbar;