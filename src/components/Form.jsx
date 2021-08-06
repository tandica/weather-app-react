import { useState, useEffect } from "react";
import "../styles/Weather.css";
//import { APIKEY } from "../data";
import Weather from "./Weather";
require("dotenv").config();

export default function Form(props) {
  const [input, setInput] = useState("");
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [forecast, setForecast] = useState([]);

  //search for weather through city name
  async function getWeatherData(e) {
    //this one has access to lat and long
    e.preventDefault();
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`
    )
      .then((res) => res.json())
      .then((data) => {
        const weatherInfo = [...new Set(data.list.map((item) => item))];
        console.log("COORDS?????", data.city.coord);
        console.log("weatherinfoooo", weatherInfo);
        console.log("weatherinfoooo2", weatherInfo[0]);
        //set states to include weather detail, and current longitude and latitude
        setForecast(weatherInfo);
        setLat(data.city.coord.lat);
        setLon(data.city.coord.lon);
      });
    //console.log("what is data", data);
  }

  // useEffect(() => {
  //   function fetching() {
  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => console.log("data is here****", data.city.name));
  //     //console.log("diff type data", data);
  //     //console.log("data here", data.city);
  //     //set states to include weather detail, and current longitude and latitude
  //     // setLat(data.city.coord.lat);
  //     // setLon(data.city.coord.lon);
  //     //const weatherInfo = [...new Set(data.list.map((item) => item))];
  //     //setForecast(weatherInfo);
  //   }
  //   fetching();
  // }, [input]);

  // useEffect(() => {
  //   (async () => {
  //     await fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("what is this", data.list);
  //         //set states to include weather detail, and current longitude and latitude
  //         //setLat(data.city.coord.lat);
  //         //setLon(data.city.coord.lon);
  //         const weatherInfo = [...new Set(data.list.map((item) => item))];
  //         // setForecast(weatherInfo);
  //       });
  //   })();
  // }, [input]);

  console.log("latitude -----", lat);
  console.log("longitude -----", lon);

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

  async function getPrecipitationData(e) {
    //get data from this one call api
    //reverse geocode with the same lat and long and find the city name
    //make the city name the search input
    e.preventDefault();
    const data = await fetch(
      `  https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=38f1fbc74deb031d79636062ba66d984`
    )
      .then((res) => res.json())
      .then((data) => data);

    console.log("LATLON DATA", data);
  }

  // useEffect(() => {
  //   async function getWeatherData() {
  //     //this one has access to lat and long

  //     const data = await fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLat(data.city.coord.lat);
  //         setLon(data.city.coord.lon);
  //         const weatherInfo = [...new Set(data.list.map((item) => item))];
  //         console.log("COORDS?????", data.city.coord);
  //         console.log("weatherinfoooo", weatherInfo);
  //         console.log("weatherinfoooo2", weatherInfo[0]);
  //         //set states to include weather detail, and current longitude and latitude
  //         setForecast(weatherInfo);
  //       });
  //     //console.log("what is data", data);
  //   }
  // });

  //get precipitation info from one call API
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
            getPrecipitationData(e);
          }}
        >
          Submit
        </button>
      </form>
      <div>
        7 day forecase for {input}
        <div className="weather">{displayWeather()}</div>
      </div>
    </div>
  );
}
