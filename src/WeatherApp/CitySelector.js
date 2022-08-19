import React, {useEffect, useState} from 'react';
import "../App.css";
import rain from "./rain.png";
import clouds from "./clouds.png";
import sunny from "./sunny.png";


const CitySelector = () => {
  
  const [city, setCity] = useState('London');
  const [apiData, setApiData] = useState({});
  const [getCity, setGetCity] = useState('');

  


  const apiKey ='5f9953639d586ea3ffc8c4592c94bc01'
  const startUrl = 'https://api.openweathermap.org'
  const url = `${startUrl}/data/2.5/forecast?q=${city}&appid=${apiKey}`


  // Side effect
useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setApiData(data));
}, [url]);


console.log(apiData);


const handleClick = () =>{
  setCity(getCity)
}
const handleChange = (event) => {
  setGetCity(event.target.value)
}

const kelvinToFarenheit = (k) => {
  return (k - 273.15).toFixed(2);
}

let background = {
  backgroundImage: 'url('+rain+')',
  backgroundSize: "cover",
 
}
const backgroundImage = (background, weather) => {
 
    if(weather === 'Rain'){
   
      background = { 
        backgroundImage: 'url('+rain+')',
        backgroundSize: "cover",
        color: "white"
       }
     
     
    }
    else if(weather === 'Clouds'){
   
        background = { 
        backgroundImage: 'url('+clouds+')',
        backgroundSize: "cover",
        
       
      }
    }
    else if(weather === 'Clear'){
     
        background = { 
        backgroundImage: 'url('+sunny+')',
        backgroundSize: "cover",
      
      }
    }

 return background
}
 
  return (
  <div className='WeatherAppContainer'>
   <h1>Search Your City</h1>
  
   <input
    className="WeatherAppSearch"
    placeholder='Enter City'
    onChange={handleChange}
    value={getCity}
   /><br></br>
   <button className="WeatherAppSearchButton" onClick={handleClick}>Check Weather</button>
   {apiData.list ? (
    <div className='Weather' style={backgroundImage(background, apiData.list[0].weather[0].main)}>

    <div className='space'></div>
    <p>{apiData.list[0].weather[0].main}</p>
    <img
     src={`http://openweathermap.org/img/w/${apiData.list[0].weather[0].icon}.png`}
     alt="weather status icon"
     className="weather-icon"
    />
   <p>Feels Like: {kelvinToFarenheit(apiData.list[0].main.feels_like)}&deg;</p> 
   <p>Min Temp: {kelvinToFarenheit(apiData.list[0].main.temp_min)}&deg;</p> 
   <p>Max Temp: {kelvinToFarenheit(apiData.list[0].main.temp_max)}&deg;</p>
   <p>Humidity: {apiData.list[0].main.humidity}</p>
   <p>Wind Speed: {apiData.list[0].wind.speed}</p>
    </div>
  
   ) : (
      <h1>Loading</h1>
    )}
    </div>

  )
};

export default CitySelector;