import React from "react";


const Filter = ({countryChose, handleFilterChange }) => {
  return (
    <div>  Find countries: <input value={countryChose} onChange={handleFilterChange} /></div>
  );
};

export default Filter;
