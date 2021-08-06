import { useState, useEffect } from "react";
import "../styles/Weather.css";
import "../styles/Form.css";
import Weather from "./Weather";
require("dotenv").config();

export default function Form(props) {
  const [input, setInput] = useState("");
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [forecast, setForecast] = useState([]);
  const [dataPrec, setDataPrec] = useState([]);
  const [precipData, setPrecipData] = useState([]);
  const [error, setError] = useState(null);

  const APIKEY = process.env.REACT_APP_API_KEY;
  console.log(APIKEY);
  //search for weather through city name
  async function getWeatherData(e) {
    //this one has access to lat and long
    e.preventDefault();
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const weatherInfo = [...new Set(data.list.map((item) => item))];
        console.log("COORDS?????", data.city.coord);
        console.log("weatherinfoooo", weatherInfo);
        console.log("weatherinfoooo2", weatherInfo[0].pop);
        console.log("here ------>", data.list);
        //set states to include weather detail, and current longitude and latitude
        setForecast(weatherInfo);
        //setDataPrec(data);
        setLat(data.city.coord.lat);
        setLon(data.city.coord.lon);
      });
    //console.log("what is data", data);
  }

  //get weather details and coordinate data
  // useEffect(() => {
  //   (async () => {
  //     const data = await fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${input}&cnt=7&appid=38f1fbc74deb031d79636062ba66d984`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("*****", data);

  //         setDataPrec(data);
  //         //set states to include weather detail, and current longitude and latitude
  //         // setLat(data.city.coord.lat);
  //         // setLon(data.city.coord.lon);
  //         //const weatherInfo = [...new Set(data.list.map((item) => item))];
  //         //setForecast(weatherInfo);
  //       });
  //   })();
  // }, [input]);

  //console.log("what is there", dataPrec.city.coord);

  //search for weather with zip code
  async function getWeatherDataZip(e) {
    e.preventDefault();
    const data = await fetch(
      `  https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);

    console.log("zipzip", data);
  }

  //console.log("PREC DATA", dataPrec);
  //GET PRECIPITATION INFO
  // async function getPrecipitationData(e) {
  //   //get data from this one call api
  //   //reverse geocode with the same lat and long and find the city name
  //   //make the city name the search input
  //   e.preventDefault();
  //   const data = await fetch(
  //     `  https://api.openweathermap.org/data/2.5/onecall?lat=35.6895&lon=139.6917&exclude=hourly&appid=38f1fbc74deb031d79636062ba66d984`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => data);
  //   setPrecipData(data);
  //   console.log("LATLON DATA", data);
  // }

  // console.log("LOOK HERE-----", precipData);

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
            precip={item.pop}
            key={index}
          />
        ))
      ),
    ];
    return currentTemp;
  }

  console.log("FORECAST", forecast);

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    if (!input) {
      setError(true);
    }
  }

  console.log("error", error);
  function handleChange(e) {
    setInput(e.target.value);
    setError(false);
  }

  function click(e) {
    e.preventDefault();
    if (handleSubmit(e)) {
      console.log("here?");
    } else {
      getWeatherData(e);
      getWeatherDataZip(e);
    }
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
        {/* {error ? `Please type a city name.` : null} */}
        <div className="weather">{displayWeather()}</div>
      </div>
    </div>
  );
}
