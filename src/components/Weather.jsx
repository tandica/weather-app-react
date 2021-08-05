export default function Weather(props) {
  console.log("weather proprs", props);
  console.log("weather proprs temp>?", props["temp"]);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <p className="card-text">{props.temp}</p>
          <p>test</p>
        </div>
      </div>
    </div>
  );
}
