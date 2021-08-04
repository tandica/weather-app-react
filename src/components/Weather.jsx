import { useState, useEffect } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState([]);
  //   const lat = 43.6532
  //   const weatherCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid={API key}`

  //   axios.get(weatherCall).then((data) => {
  //     setWeatherData(data.data.data);
  //   });
  // }, [props.location]);
}
