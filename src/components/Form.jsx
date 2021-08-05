import { useState, useEffect } from "react";
import WeatherList from "./WeatherList";
import Weather from "./Weather";
//import axios from "axios";
require("dotenv").config();

export default function Form(props) {
  const [input, setInput] = useState("");
  const [cityID, setCityID] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");

  async function getWeatherData(e) {
    e.preventDefault();

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`
      //` https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=38f1fbc74deb031d79636062ba66d984`
    )
      .then((res) => res.json())
      .then((data) => {
        const weatherInfo = [...new Set(data.list.map((item) => item))];
        const getID = data.city.id;
        //setForecast({ data: data });
        console.log("getid", getID);
        setCityID(getID);
        console.log("weatherinfoooo", weatherInfo);
        console.log("weatherinfoooo2", weatherInfo[0]);
        setForecast(weatherInfo);
      });
    //.then((data) => data);
    //console.log("newnew", data[0].main);
    // console.log("temp ?????", data[0].main.temp);
    //console.log("name of city", data.name);
    //console.log("forecast2", forecast.data);
    //setForecast({ data: data });
    //console.log("setforecast ###", setForecast());
    console.log("what is data", data);
  }

  console.log("forecast checkkk", forecast[0]);
  console.log("city id checkkkkk", cityID);

  // const currentTemp = [...new Set(forecast.map((item) => item.main))];
  // console.log("CURRENT TEMP ^^^^", currentTemp);
  //console.log("forecast data ???", forecast.data.main);

  function displayWeather() {
    const currentTemp = [
      ...new Set(
        forecast.map((item, index) => <Weather item={item.main} key={index} />)
      ),
    ];
    console.log("display weatjher", currentTemp);
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
          className="btn btn-light"
          onClick={(e) => {
            getWeatherData(e);
          }}
        >
          Submit
        </button>
      </form>
      {/* <div>
        <WeatherList data={forecast.data} />
      </div> */}

      <div className="weather">
        <span>{displayWeather()}</span>
      </div>
    </div>
  );
}
