import React from "react";
import "../../index.css";

const Shimmer = () => {
  // Show 10 shimmer cards as loading placeholders
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((_, idx) => (
          <div className="card shimmer-card" key={idx}>
            <div className="shimmer-img" />
            <div className="shimmer-line shimmer-title" />
            <div className="shimmer-line shimmer-line-short" />
            <div className="shimmer-line" />
            <div className="shimmer-line" />
          </div>
        ))}
    </div>
  );
};

export default Shimmer;