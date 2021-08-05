export default function Weather(props) {
  console.log("weather props", props);
  console.log("weather props temp ====>", props.item.temp);

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{Math.round(props.item.temp - 273.15)}°C</p>
        <p className="card-text">
          High: {Math.round(props.item.temp_max - 273.15)}°C
        </p>
        <p className="card-text">
          Low: {Math.round(props.item.temp_min - 273.15)}°C
        </p>
        <p className="card-text">Humidity: {props.item.humidity}%</p>
      </div>
    </div>
  );
}
