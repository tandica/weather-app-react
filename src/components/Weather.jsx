import "../styles/Weather.css";

export default function Weather(props) {
  // console.log("weather props", props);
  // console.log("temp ====>", props.item.temp);
  // console.log("desc ====>", props.desc[0].description);
  // console.log("WIND ====>", props.wind);

  //get value of description from array of objects to display
  const description = [...new Set(props.desc.map((item) => item.description))];
  //console.log("do it work", description);

  return (
    <div className="weather-section">
      <div className="weather-container">
        <div className="weather-data">
          <h3 className="current-temp">
            {Math.round(props.item.temp - 273.15)}°C
          </h3>
          <p className="weather-text-desc">
            <strong> {description}</strong>
          </p>
          <p className="weather-text">
            High: {Math.round(props.item.temp_max - 273.15)}°C
          </p>
          <p className="weather-text">
            Low: {Math.round(props.item.temp_min - 273.15)}°C
          </p>
          <p className="weather-text">Humidity: {props.item.humidity}%</p>
          <p className="weather-text">Wind Speed: {props.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
