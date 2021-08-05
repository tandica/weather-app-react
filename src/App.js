import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
require("dotenv").config();

function App(props) {
  // const [location, setLocation] = useState("");
  // const [apiData, setApiData] = useState({});

  // const openWeatherAPIKey = { key: process.env.API_KEY };
  // const openWeatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude={part}&appid=${props.openWeatherAPIKey.key}`;
  // console.log({ openWeatherAPIKey });

  // useEffect(() => {
  //   fetch(openWeatherURL)
  //     .then((res) => res.json)
  //     .then((data) => setApiData);
  // }, [openWeatherURL]);

  // function getCity(city) {
  //   setLocation(city);
  // }

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
