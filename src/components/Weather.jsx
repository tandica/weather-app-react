export default function Weather(props) {
  console.log("weather props", props);
  console.log("temp ====>", props.item.temp);
  console.log("desc ====>", props.desc[0].description);
  console.log("WIND ====>", props.wind);

  //get value of description from array of objects to display
  const description = [...new Set(props.desc.map((item) => item.description))];
  console.log("do it work", description);

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{Math.round(props.item.temp - 273.15)}°C</p>
        <p className="card-text">{description}</p>
        <p className="card-text">
          High: {Math.round(props.item.temp_max - 273.15)}°C
        </p>
        <p className="card-text">
          Low: {Math.round(props.item.temp_min - 273.15)}°C
        </p>
        <p className="card-text">Humidity: {props.item.humidity}%</p>
        <p className="card-text">Wind Speed: {props.wind.speed} m/s</p>
      </div>
    </div>
  );
}
