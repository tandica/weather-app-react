export default function Weather(props) {
  console.log("weather props", props);
  console.log("weather props temp ====>", props.temp);
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{props.temp}</p>
        <p>test</p>
      </div>
    </div>
  );
}
