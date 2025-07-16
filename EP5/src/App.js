import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css"
import Header from "./components/Header"; 
import Body from "./components/Body"; 

const AppLayout = () => (
  <div>
    <Header />
    <Body />
  </div>
);

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
