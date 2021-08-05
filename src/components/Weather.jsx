import { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();

export default function Weather(props) {
  // const [weatherData, setWeatherData] = useState({});
  // const [location, setLocation] = useState("");
  // const openWeatherAPIKey = process.env.API_KEY;
  // const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}}&appid=${openWeatherAPIKey}`;
  // const getWeatherData = (city) => {
  //   axios.get(openWeatherURL).then((data) => {
  //     console.log("data====>", data);
  //   });
  // };
  //const [apiData, setApiData] = useState({});
  //https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=38f1fbc74deb031d79636062ba66d984
  // const openWeatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude={part}&appid=${props.openWeatherAPIKey.key}`;
  // console.log({ openWeatherAPIKey });
  // useEffect(() => {
  //   fetch(openWeatherURL)
  //     .then((res) => res.json)
  //     .then((data) => setWeatherData);
  // }, [openWeatherURL]);
  //   const lat = 43.6532
  //   const weatherCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid={API key}`
  //   axios.get(weatherCall).then((data) => {
  //     setWeatherData(data.data.data);
  //   });
  // }, [props.location]);
}
