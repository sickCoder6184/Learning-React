import React from "react";
import ReactDOM from "react-dom";
// Creating a nested structure using React.createElement()

const par = React.createElement(
  "div", // parent <div>
  { id: "parent" },
  [
    // First child <div>
    React.createElement("div", { id: "child1" }, [
      React.createElement("h2", {}, "I am a sibling 1"),
      React.createElement("h2", {}, "I am a sibling 2"),
    ]),

    // Second child <div>
    React.createElement("div", { id: "child2" }, [
      React.createElement("h2", {}, "I am a sibling 1"),
      React.createElement("h2", {}, "I am a sibling 2"),
    ]),
  ]
);

// Example of a single heading element
const heading = React.createElement(
  "h1",
  { id: "heading", s: "abc" }, // "s" is a custom attribute
  "Hello World from React!!!"
);

// Attaching React to the root div in HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the nested structure (You can replace 'par' with 'heading' to see that instead)
root.render(par);
