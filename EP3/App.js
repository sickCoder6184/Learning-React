import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* 
  ✅ A. Nested header Element using React.createElement 
     (h1, h2, h3 inside a div with class "title")
*/
const header = React.createElement(
  "div",
  { className: "title" },
  [ 
    React.createElement("h1", { key: 1 }, "This is h1 old React"),
    React.createElement("h1", { key: 2 }, "This is h2"),
    React.createElement("h1", { key: 3 }, "This is h3")
  ]
);

/* 
  ✅ B. The same using JSX 
*/
const jsxHeading = (
  <div className="title">
    <h1>Hi this is Heading 1 from JSX</h1>
    <h1>Hi this is Heading 2</h1>
    <h1>Hi this is Heading 3</h1>
  </div>
);

/* 
  ✅ C. Functional Component of the same with JSX 
*/
const ArrowTitleComponent = () => (
  <div className="title">
    <h1>This is H1 of ArrowTitleComponent</h1>
    <h2>This is H2 of ArrowTitleComponent</h2>
    <h3>This is H3 of ArrowTitleComponent</h3>
  </div>
);

function LegacyTitleComponent() {
  return (
    <div className="title">
      <h1>This is H1 of LegacyTitleComponent</h1>
      <h2>This is H2 of LegacyTitleComponent</h2>
      <h3>This is H3 of LegacyTitleComponent</h3>
    </div>
  );
}

/* 
  ✅ D. Pass attribute into the tag in JSX 
*/
const AttributeJSX = () => (
  <div className="title">
    <h1 style={{ color: "red" }}>This is H1 with style of AttributeJSX</h1>
    <h2 id="second-heading">This is heading 2 of AttributeJSX</h2>
    <h3 className="h3 heading">Small heading of AttributeJSX</h3>
  </div>
);

/* 
  ✅ E. Composition of Component (Add a component inside another) 
*/
function Header() {
  return (
    <div>
      <p>This is the start of Header component containing ArrowTitleComponent</p>
      <ArrowTitleComponent />
      <p>This is the end of Header component containing ArrowTitleComponent</p>
    </div>
  );
}

/* 
  ✅ F. {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} 
*/
const Difference = () => (
  <div>
    {/* 
      {LegacyTitleComponent} 
      ⚠️ Reference to the function itself. Not rendered as JSX.
    */}
    {<LegacyTitleComponent />}
    {<LegacyTitleComponent></LegacyTitleComponent>} 
    {/* ✅ Same as above. Recommended when you want to pass children */}
  </div>
);

/* 
  ✅ G. Create Header Component from scratch using Functional Component with JSX
     - Add a Logo on Left
     - Add search bar in middle
     - Add User icon on right
     - Add CSS to make it look nice
*/
const BigHeader = () => (
  <header className="header">
    <div className="logo">
      <img src="https://via.placeholder.com/50" alt="Logo" />
    </div>
    <div className="search_input">
      <input type="text" placeholder="Search ......" />
    </div>
    <div className="icon">
      <img src="https://via.placeholder.com/40" alt="User" />
    </div>
  </header>
);

// App function
function App() {
  return (
    <div>
      <BigHeader />
    </div>
  );
}

// Choose what to render here:
// root.render(header);
// root.render(jsxHeading);
// root.render(<LegacyTitleComponent />);
// root.render(<ArrowTitleComponent />);
// root.render(<AttributeJSX />);
// root.render(<Header />);
// root.render(<Difference />);
root.render(<App />);
