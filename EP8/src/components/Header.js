import { useState } from "react";
import { CART_ICON, LOGO_URL } from "../utils/constans";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleLogin = () => {
    setBtnName((prev) => (prev === "Login" ? "Log Out" : "Login"));
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="App Logo" />
        </Link>
      </div>
      <nav className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>
            <img className="cart-icon" src={CART_ICON} alt="Cart" />
          </li>
          <li>
            <button className="login-btn" onClick={handleLogin}>
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
