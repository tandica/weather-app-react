import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";
require("dotenv").config();

export default function WeatherList(props) {
  // const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  // useEffect(() => {
  //const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.input}&appid=38f1fbc74deb031d79636062ba66d984`;
  // const getWeatherData = (input) => {
  //   axios.get(openWeatherURL).then((data) => {
  //     //console.log("data====>", data);
  //     //setWeatherData(data.data);
  //     //console.log("setweather*****", setWeatherData(data.data));
  //   });
  // };

  // const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=38f1fbc74deb031d79636062ba66d984`;
  // const getWeatherData = () => {
  //   axios
  //     .get(openWeatherURL)
  //     .then((data) => {
  //       console.log("data====>", data.data);
  //       setWeatherData(data.data);
  //       console.log("setWeather****", setWeatherData(data));
  //       console.log("Weather****", weatherData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // }, [props.input]);

  return (
    <div>
      weather
      <div className="weather-container"></div>
    </div>
  );
}