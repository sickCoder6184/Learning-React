import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import restaurantList from "./data";

// Header Component
const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg"
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
            src="https://cdn-icons-png.flaticon.com/512/5166/5166615.png"
            alt="Cart"
          />
        </li>
      </ul>
    </div>
  </div>
);

// Search Component
const Search = () => (
  <div className="search">
    <input
      type="text"
      className="search-input"
      placeholder="Search restaurants..."
    />
    <button className="search-btn">Search</button>
  </div>
);

// Restaurant Card Component
const Card = ({ data }) => (
  <div className="card">
    {data.img ? (
      <img
        className="res-banner"
        alt={`${data.resName} Banner`}
        src={data.img}
      />
    ) : (
      <div className="fallback-img">Image not available</div>
    )}
    
    <h3>{data.resName}</h3>
    <ul className="res-details">
      <li>🍽️ {data.foodName}</li>
      <li>🗂️ {data.foodType}</li>
      <li>⏱️ {data.deliveryTime}</li>
      <li>🍴 {data.cuttleries}</li>
      <li>💰 {data.price}</li>
    </ul>
  </div>
);



// Restaurant List Component
const RestaurantList = () => (
  <div className="restaurant-list">

    {/* Map over restaurantList render a card for each item ,index is just to give keys only becoz react want*/}
    {restaurantList.map((item, index) => (
      <Card key={index} data={item} />
    ))}

    
  </div>
);

// Body Component
const Body = () => (
  <div className="body">
    <h2>Welcome to our Food Delivery App</h2>
    <p>Explore our menu and order your favorite meals!</p>
    <Search />
    <RestaurantList />
  </div>
);

// App Layout
const AppLayout = () => (
  <div>
    <Header />
    <Body />
  </div>
);

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
