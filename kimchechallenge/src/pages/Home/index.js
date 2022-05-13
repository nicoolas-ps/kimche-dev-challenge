import React from "react";
import "./style.css";
import { Card } from "../../components/Card";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      native
      capital
      continent {
        code
        name
      }
      languages {
        code
        name
      }
      emoji
      emojiU
    }
  }
`;

export const Home = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
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
        {loading 
        ? (<h2>Loading countries...</h2>)
        : (
          data.countries.map((country, key) => {
            return(
              <Card 
                name={country.name} 
                emoji={country.emoji} 
                native={country.native}
                capital={country.capital}
                currency={country.currency}
                phone={country.phone}
                key={key} 
              />
            );
          })
        )}
      </div>
    </div>
  );
}