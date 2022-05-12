import React from "react";
import "./style.css";

export const Card = () => {
  return (
    <div className="card-bg">
      <div className="card-header">
        <span role="img" aria-label="🇦🇩">
        🇦🇩
        </span>
        <h3>Country</h3>
      </div>
      <div className="card-content">
        Info
      </div>
      <div className="card-button">
        <button>Show more</button>
      </div>
    </div>
  );
}