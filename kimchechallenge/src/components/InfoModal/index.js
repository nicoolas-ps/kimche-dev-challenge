import React, { useMemo } from "react";
import "./style.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

export const InfoModal = ({countryCode, setShowModal}) => {
  const GET_COUNTRY_DATA = gql`  
    query {
      country(code:"${countryCode}") {
        code
        name
        native
        phone
        continent {
          code
          name
        }
        capital
        currency
        languages {
          code
          name
        }
        emoji
        states {
          code
          name
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_COUNTRY_DATA);

  const showData = useMemo(() => {
    if (error) return <div className="modal-loading"><h2>There was an error trying to retrieve the data.</h2></div>;
    if (loading) return <div className="modal-loading"><h2>Loading...</h2></div>;
    else {
      return(
        <>
          <div className="modal-header">
            <span>{data.country.emoji}</span>
            <h3>{data.country.name}</h3>
          </div>
          <div className="modal-body">
            <div className="modal-items">
              <div className="modal-item">
                <h4>Native</h4>
                <input disabled type="text" value={data.country.native} />
              </div>
              <div className="modal-item">
                <h4>Phone code</h4>
                <input disabled type="text" value={"+" + data.country.phone} />
              </div>
              <div className="modal-item">
                <h4>Capital</h4>
                <input disabled type="text" value={data.country.capital} />
              </div>
              <div className="modal-item">
                <h4>Continent</h4>
                <input disabled type="text" value={data.country.continent.name} />
              </div>
              <div className="modal-item">
                <h4>Currency</h4>
                <input disabled type="text" value={data.country.currency} />
              </div>
              <div className="modal-item">
                <h4>Languages</h4>
                <ul>
                  {data.country.languages.map((language, key) => {
                    return(
                      <li key={key}>{language.name}</li>
                    );
                  })}
                </ul>
              </div>
              {data.country.states.length > 0 ? (
                <div className="modal-item">
                <h4>States</h4>
                <ul>
                  {data.country.states.map((state, key) => {
                    return(
                      <li key={key}>{state.name}</li>
                    );
                  })}
                </ul>
              </div>
              ) : ("")}
            </div>
          </div>
        </>
      );
    } 
  }, [data, error, loading])

  return (
    <div className="modal-bg">
      <div className="modal-content">
        {showData}
        <div className="modal-button"><button onClick={() => setShowModal(false)}>Close</button></div>
      </div>
    </div>
  );
}