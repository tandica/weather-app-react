import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import WeatherList from "./components/WeatherList";
// import WeatherList from "./components/WeatherList";
require("dotenv").config();

function App(props) {
  // const [city, setCity] = useState("toronto");
  // console.log("yoooooo");
  // function getCity(city) {
  //   setCity(city);
  //   console.log("cityyyyy", setCity(city));
  //   axios
  //     .post(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38f1fbc74deb031d79636062ba66d984`,
  //       { city }
  //     )
  //     .then((res) => {
  //       console.log("res", res);
  //     });
  // }

  return (
    <div className="App">
      <Form />
      <WeatherList />
    </div>
  );
}

export default App;
