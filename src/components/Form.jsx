import { useState, useEffect } from "react";
import Weather from "./Weather";
require("dotenv").config();

export default function Form(props) {
  const [input, setInput] = useState("");
  const [forecast, setForecast] = useState([]);

  async function getWeatherData(e) {
    e.preventDefault();

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`
      //` https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=38f1fbc74deb031d79636062ba66d984`
    )
      .then((res) => res.json())
      .then((data) => {
        const weatherInfo = [...new Set(data.list.map((item) => item))];

        console.log("weatherinfoooo", weatherInfo);
        console.log("weatherinfoooo2", weatherInfo[0]);
        setForecast(weatherInfo);
      });

    console.log("what is data", data);
  }

  //console.log("forecast checkkk", forecast[0]);

  // const currentTemp = [...new Set(forecast.map((item) => item.main))];
  // console.log("CURRENT TEMP ^^^^", currentTemp);
  //console.log("forecast data ???", forecast.data.main);

  function displayWeather() {
    const currentTemp = [
      ...new Set(
        forecast.map((item, index) => (
          <Weather item={item.main} desc={item.weather} key={index} />
        ))
      ),
    ];
    console.log("display weatjher", currentTemp);
    return currentTemp;
  }

  // function displayDecsription() {
  //   const description = [
  //     ...new Set(
  //       forecast.map((item, index) => (
  //         <Weather item={item.weather} key={index} />
  //       ))
  //     ),
  //   ];
  //   console.log("display desc", description);
  //   return description;
  // }

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
