import React from "react";
import DetailsCountry from "./DetailsCountry";

const Countries = ({ countries,setCountry,filter}) => {

  if(countries.length===0 || filter===''){
    return (<div>Give a valid search term</div>)
  }
  else if (countries.length > 10) {
    return (
        <div>Too many matches, specify another filter</div>
       ); 

  } else if (countries.length === 1) {
    return (
        <DetailsCountry country={countries[0]} />
    );
  } else if (countries.length > 1 && countries.length <= 10 ) {
    return countries.map(country => (
      <div key={country.name.common}>
           {country.name.common}{" "}
          <button onClick={() => {
               setCountry(country.name.common)}}>
          Show
          </button>
      </div>
    ))
      
  }else{
    return <div>No countries match your search.</div>;
  }
   
 

}

export default Countries;