import { useState, useEffect } from "react";
import WeatherList from "./WeatherList";
//import axios from "axios";
require("dotenv").config();

export default function Form(props) {
  const [input, setInput] = useState("");

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");

  //const openWeatherAPIKey = process.env.API_KEY;

  // useEffect(() => {

  //have to do two more get requests - one for forecast and one for precipitation
  //const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`;
  //const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`;

  // async function getWeatherData(e) {
  //   e.preventDefault();
  //   const data = await fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`
  //   ).then((res) => {
  //     res.json().then((data) => {
  //       console.log("dataaaa ", data);
  //       setForecast({ data: data });
  //     });
  //   });

  //console.log("data fetchhhh", data);
  // axios
  //   .get(currentWeatherURL)
  //   .then((data) => {
  //     console.log("data====>", data.data);
  //     setWeatherData(data.data);
  //     console.log("setWeather****", setWeatherData(data));
  //     console.log("Weather****", weatherData);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // axios
  //   .get(forecastURL)
  //   .then((data) => {
  //     console.log("data====>", data.data);
  //     setForecast(data.data);
  //     console.log("forcaste upated ==>", setForecast(data));
  //     console.log("forecast****", forecast);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // }, [input]);
  async function getWeatherData(e) {
    e.preventDefault();

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`
    )
      .then((res) => res.json())
      .then((data) => data.city);
    //.then((data) => data);
    //console.log("newnew", data[0].main);
    console.log("what is data", data);
    console.log("name of city", data.name);
    console.log("forecast2", forecast);
    setForecast({ data: data });
    //console.log("setforecast ###", setForecast());
  }

  console.log("forecast checkkk", forecast.data);

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
            className="form-control"
            placeholder="Enter a city name..."
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-light"
          onClick={(e) => {
            getWeatherData(e);
          }}
          // onClick={() => {
          //   setWeatherData(input);
          // }}
        >
          Submit
        </button>
      </form>
      <div>
        <WeatherList data={forecast.data} />
      </div>
      <p>{forecast.data.name}</p>
    </div>
  );
}
