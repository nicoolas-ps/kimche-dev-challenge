import React, { useState } from "react";
import "./style.css";
import { InfoModal } from "../InfoModal";

export const Card = ({code, name, emoji, native, capital}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
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
          <button onClick={() => setShowModal(true)}>Show more</button>
        </div>
      </div>
      {showModal ? (<InfoModal countryCode={code} setShowModal={setShowModal} />) : ("")}
    </>  
  );
}