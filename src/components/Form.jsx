import { useState, useEffect } from "react";

import axios from "axios";
require("dotenv").config();

export default function Form(props) {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");

  //const openWeatherAPIKey = process.env.API_KEY;
  const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=38f1fbc74deb031d79636062ba66d984`;

  const getWeatherData = (city) => {
    axios.get(openWeatherURL).then((data) => {
      console.log("data====>", data);
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
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
        onClick={() => {
          getWeatherData(input);
        }}
      >
        Submit
      </button>
    </form>
  );
}
