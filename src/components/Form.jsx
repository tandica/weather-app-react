import { useState } from "react";
import "../styles/Weather.css";
import "../styles/Form.css";
import Weather from "./Weather";
require("dotenv").config();

export default function Form(props) {
  const [input, setInput] = useState("");
  const [forecast, setForecast] = useState([]);

  const APIKEY = process.env.REACT_APP_API_KEY;

  //search for weather through city name
  async function getWeatherData(e) {
    e.preventDefault();
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const weatherInfo = [...new Set(data.list.map((item) => item))];

        //set state to include weather detail
        setForecast(weatherInfo);
      });
  }

  //search for weather with zip code
  async function getWeatherDataZip(e) {
    e.preventDefault();
    const data = await fetch(
      `  https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);
  }

  //display weather details
  function displayWeather() {
    const currentTemp = [
      ...new Set(
        forecast.map((item, index) => (
          <Weather
            item={item.main}
            desc={item.weather}
            wind={item.wind}
            precip={item.pop}
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

  function click(e) {
    e.preventDefault();
    handleSubmit(e);
    getWeatherData(e);
    getWeatherDataZip(e);
  }

  return (
    <div className="background-container">
      <h3 className="page-title">Search for a city or zip code</h3>
      <form className="input-form" onSubmit={handleSubmit} id="form-test">
        <div>
          <input
            type="text"
            className="form"
            id="inputLocation"
            placeholder="City name or zip code..."
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-light"
          onClick={(e) => {
            click(e);
          }}
        >
          Search
        </button>
      </form>
      <div>
        <div className="weather">{displayWeather()}</div>
      </div>
    </div>
  );
}
