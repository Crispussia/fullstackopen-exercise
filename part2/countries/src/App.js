import React, { useState,useEffect } from 'react'

import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Country'

const App = () => {
  
  const [countries, setCountries] = useState([])
  const [ filter, setFilter] = useState('')


 
  useEffect(() => {
    console.log('effect')
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data);
      })
  }, [])
  console.log('render', countries.length, 'countries')
  
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

 
  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );
    
    return (
      <div>
          <Filter countryChose={filter} handleFilterChange={handleFilterChange} />   
          <Countries countries={ countriesToShow} setCountry={setFilter} filter={filter}/>
      </div>
    )
}

export default App

