import React, { useState, useMemo } from "react";
import "./style.css";
import { Card } from "../../components/Card";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_DATA = gql`
  query {
    countries {
      code
      name
      native
      capital
      emoji
      emojiU
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

export const Home = () => {
  const { data, loading, error } = useQuery(GET_DATA);
  const [ continentBtn, setContinentBtn ] = useState("selected-button");
  const [ languageBtn, setLanguageBtn ] = useState("unselected-button");
  const [ search, setSearch ] = useState("");
  const [ groupContinent , setGroupContinent ] = useState(true);
  const [ groupLanguage , setGroupLanguage ] = useState(false);

  const filteredCountries = useMemo(() => {
    if (!data) return [];
    return data.countries.filter((country) => {
      if(search === "") return true;
      if (country.name.toLowerCase().includes(search.toLowerCase())) return true;
      return false;
    })
  }, [search, data]);

  const createCards = (countries) => {
    return (
      countries.map((country, key) => {
        return(
          <Card 
            name={country.name} 
            emoji={country.emoji} 
            native={country.native}
            capital={country.capital}
            key={key}
          />
        );
      })
    )
  }

  const getContinents = (countries) => {
    return (
      countries.reduce((allContinents, country) => {
        return Array.from(new Set([...allContinents, ...Object.values(country.continent)]));
      }, [])
    );
  }

  const groupByContinent = (countries) => {
    const continents = getContinents(countries);
    return(          
      continents.filter(c => {
        if (c !== "Continent") return true;
        return false;
      }).map((continent, keyContinent) => {
        return(
          <div className="home-section" key={keyContinent}>
            <div className="home-section-title"><h2>{continent}</h2></div>
            <div className="home-section-items">
              {createCards(
                countries.filter((c) => {
                  if (c.continent.name === continent) return true;
                  return false;
                })
              )}
            </div>
          </div>
        )
      })
    );
  }

  const getLanguages = (countries) => {
    return (
      countries.reduce((allLanguages, country) => {
        return Array.from(new Set([...allLanguages, ...country.languages.reduce((countryLanguages, language) => {
          return [...countryLanguages, ...Object.values(language)]
        }, [])]))
      }, [])
    );
  }

  const groupByLanguage = (countries) => {
    const languages = getLanguages(countries);
    return(          
      languages.filter(l => {
        if (l !== "Language") return true;
        return false;
      }).map((language, keyLanguage) => {
        return(
          <div className="home-section" key={keyLanguage}>
            <div className="home-section-title"><h2>{language}</h2></div>
            <div className="home-section-items">
              {createCards(
                countries.filter((c) => {
                  return (c.languages.some((lang) => lang.name === language));
                })
              )}
            </div>
          </div>
        )
      })
    );
  }

  const showCountries = useMemo(() => {
    if (error) return <div className="home-loading"><h2>There was an error trying to retrieve the data.</h2></div>;
    if (loading) return <div className="home-loading"><h2>Loading countries...</h2></div>;  
    else {
      if (groupContinent) return groupByContinent(filteredCountries);
      if (groupLanguage) return groupByLanguage(filteredCountries);
    }
  }, [filteredCountries, groupContinent, groupLanguage, error, loading]); 

  return (
    <div className="home-bg">
      <div className="home-header">
        <h1>Country Search</h1>
      </div>
      <div className="home-search">
        <input type="text" placeholder="Search country" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="home-filters">
        <div className="home-filters-content">
          <span>Group by</span>
          <button className={continentBtn} onClick={() => {
            if (!groupContinent) {
              setGroupContinent(true);
              setGroupLanguage(false);
              setContinentBtn("selected-button");
              setLanguageBtn("unselected-button");
            }
          }}>Continent</button>
          <button className={languageBtn} onClick={() => {
            if (!groupLanguage) {
              setGroupLanguage(true);
              setGroupContinent(false);
              setLanguageBtn("selected-button");
              setContinentBtn("unselected-button");
            }
          }}>Language</button>
        </div>
      </div>
      {showCountries}
    </div>
  );
}