import React from "react";
import "./style.css";
import { Card } from "../../components/Card";

export const Home = () => {

  const showItems = () => {
    return(
      <Card />
    );
  }

  return (
    <div className="home-bg">
      <div className="home-header">
        <h1>Country Search</h1>
      </div>
      <div className="home-search">
        <input type="text" placeholder="Search country..."/>
      </div>
      <div className="home-filters">
        <div className="home-filters-content">
          <span>Group by</span>
          <button>Continent</button>
          <button>Language</button>
        </div>
      </div>
      <div className="home-items">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}