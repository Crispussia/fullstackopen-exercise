import React, { useState, useEffect } from "react";
import axios from "axios";
const Weather = ({ country }) => {
    
    const [weather, setWeather] = useState("");
    const [weatherDisplay, setWeatherDisplay] = useState(false);
   
   /*Attendre que la variable soit renseignée avant d'exécuter*/ 
    useEffect(() => {
      const key = `029b6d9820c472e2edcfc49a05eec777`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${key}&units=metric`;
      axios.get(url).then(response => {
        console.log("response.data: ", response.data);
        console.log(response.data.main)
        setWeather(response.data); 
        setWeatherDisplay(true);
      });
    }, [country.capital]);
    
    if(weatherDisplay){

        const icons=weather.weather[0].icon
        console.log(icons)
        const urlicons = `http://openweathermap.org/img/wn/${icons}@2x.png`
        
        return (
            <div>
                <p>
                    <span >temperature</span>{" "}
                    {weather.main.temp}{" "} Celcius
                </p>   
                <img
                    src={urlicons}
                   
                    alt={weather.descriptions}
                    
                />
                <p>
                    <span >wind </span>{" "}
                    {weather.wind.speed}{" "} m/s
                </p>
            </div>
            )
    }else{
        return (
            <div>      
              <p>Please wait one minute</p>
            </div>
          );
    }
  

    
  };
  
  export default Weather;