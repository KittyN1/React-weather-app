import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  let [inputCity, setInputCity] = useState();
  let [display, setDisplay] = useState();
  let apiKey = "ff38de5a7d15d027da7ba6b40e5e5758";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=
  ${inputCity}&appid=${apiKey}&units=${units}`;

  function changeInputCity(event) {
    setInputCity(event.target.value);
  }

  function displayWeather(event) {
    event.preventDefault();
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    let temp = Math.round(response.data.main.temp);
    let img = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setDisplay(
      <ul>
        <br />
        <li>
          <img src={img} alt="icon" />
        </li>
        <li>The temperature is {temp}°C</li>
        <li>It looks like there is {response.data.weather[0].description}</li>
        <li>
          The humidity is {response.data.main.humidity}% and the wind speed is{" "}
          {response.data.wind.speed}km/h
        </li>
      </ul>
    );
  }

  return (
    <div>
      <h2>
        Weather Forcast in <span id="city"> {inputCity} </span>
      </h2>{" "}
      <br />
      <form onSubmit={displayWeather}>
        <input
          type="search"
          placeholder="Search for a city"
          onChange={changeInputCity}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <div>{display}</div>
    </div>
  );
}
