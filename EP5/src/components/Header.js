import { CART_ICON } from "../utils/constans";
import { LOGO_URL } from "../utils/constans";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src={LOGO_URL}
        alt="App Logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>
          <img
            className="cart-icon"
            src={CART_ICON}
            alt="Cart"
          />
        </li>
      </ul>
    </div>
  </div>
);

export default Header