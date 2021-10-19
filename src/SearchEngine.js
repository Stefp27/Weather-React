import React, { useState }  from "react";
import axios from "axios";
import './App.css';

export default function SearchEngine(props) {
    let [city, setCity] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [weather, setWeather] = useState({});
  
    function displayWeather(response) {
      setLoaded(true);
      setWeather({
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "ba0f360e4ade3504405f1836416cb716";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayWeather);
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    let form = (
      <div className="CitySearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <br />
      </div>
    );
  
    if (loaded) {
      return (
        <div>
          {form}
          <ul>
            <li>Temp: {Math.round(weather.temperature)}°C</li>
            <li>Wind: {weather.wind} km/h</li>
            <li>Humidity:{weather.humidity} %</li>
            <li>
              {" "}
              <img src={weather.icon} alt="icon" />
            </li>
          </ul>
        </div>
      );
    } else {
      return form;
    }
  }  