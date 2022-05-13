import React from "react";
import "./style.css";

export const Card = ({name, emoji, native, capital}) => {
  return (
    <div className="card-bg">
      <div className="card-header">
        <span>{emoji}</span>
        <h3>{name}</h3>
      </div>
      <div className="card-content">
        <h4>Native</h4>
        <span>{native}</span>
        <h4>Capital</h4>
        <span>{capital}</span>
      </div>
      <div className="card-button">
        <button>Show more</button>
      </div>
    </div>
  );
}