import "../styles/Weather.css";

export default function Weather(props) {
  //get value of description from array of objects to display in weather container
  const description = [...new Set(props.desc.map((item) => item.description))];

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
          <p className="weather-text">
            Chance of precipitation: {Math.round(props.precip * 100)}%
          </p>
        </div>
      </div>
    </div>
  );
}
