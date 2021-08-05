import { useState } from "react";
import Weather from "./Weather";
require("dotenv").config();

export default function Form(props) {
  const [input, setInput] = useState("");
  const [forecast, setForecast] = useState([]);

  //search for weather through city name
  async function getWeatherData(e) {
    e.preventDefault();
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`
    )
      .then((res) => res.json())
      .then((data) => {
        const weatherInfo = [...new Set(data.list.map((item) => item))];

        console.log("weatherinfoooo", weatherInfo);
        console.log("weatherinfoooo2", weatherInfo[0]);
        setForecast(weatherInfo);
      });

    //console.log("what is data", data);
  }

  //search for weather with zip code
  async function getWeatherDataZip(e) {
    e.preventDefault();
    const data = await fetch(
      `  https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=38f1fbc74deb031d79636062ba66d984`
    )
      .then((res) => res.json())
      .then((data) => data);

    console.log("zipzip", data);
  }

  //console.log("forecast checkkk", forecast[0]);

  // const currentTemp = [...new Set(forecast.map((item) => item.main))];
  // console.log("CURRENT TEMP ^^^^", currentTemp);
  //console.log("forecast data ???", forecast.data.main);

  //display weather details
  function displayWeather() {
    const currentTemp = [
      ...new Set(
        forecast.map((item, index) => (
          <Weather
            item={item.main}
            desc={item.weather}
            wind={item.wind}
            key={index}
          />
        ))
      ),
    ];
    return currentTemp;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <form className="input-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="form"
            placeholder="Enter a city name..."
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            getWeatherData(e);
            getWeatherDataZip(e);
          }}
        >
          Submit
        </button>
      </form>
      <div className="weather">
        <span>{displayWeather()}</span>
      </div>
    </div>
  );
}
