import React from "react";
import Weather from "./Weather";




const DetailsCountry = ({ country }) => {

  
  return (
    <div>
      <div key={country.name.common}>
        <h2>{country.name.common}</h2>
        <p>capital : {" "} {country.capital}</p>
        <p>area: {" "}{country.area}</p>
      </div>
      <div >
        <h3>languages: </h3>
        <div>
          <ul>
            {Object.values(country.languages).map(language => <li key={language}> {language}</li>)}
          </ul>  
        </div>
      </div>
      <img
        src={country.flags.png}
        alt={country.name.common}
        height="200"
        width="200"
      />
      <div >
        <h2>Weather in {country.capital} </h2>
        <div >
          <Weather country={country} />
        </div>
        
      </div>
    </div>
  );
};

export default DetailsCountry;
