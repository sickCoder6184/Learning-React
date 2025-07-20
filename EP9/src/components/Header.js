import { useState } from "react";
import { CART_ICON, LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const OnlineStatus = useOnlineStatus();

  const handleLogin = () => {
    setBtnName((prev) => (prev === "Login" ? "Log Out" : "Login"));
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img className="h-12 w-auto" src={LOGO_URL} alt="App Logo" />
            <span className="ml-2 text-xl font-bold text-primary">Foodie Express</span>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center space-x-6">
            <li className="flex items-center">
              <span className="mr-2">Status:</span>
              <span>{OnlineStatus ? "👌" : "😒"}</span>
            </li>
            <li>
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/grocery" className="text-gray-700 hover:text-primary transition-colors">
                Grocery
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <div className="relative">
                <img className="h-6 w-6" src={CART_ICON} alt="Cart" />
                
              </div>
            </li>
            <li>
              <button 
                className={`px-4 py-2 rounded-md ${btnName === "Login" ? "bg-primary text-white" : "bg-red-500 text-white"} hover:opacity-90 transition-colors`} 
                onClick={handleLogin}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
