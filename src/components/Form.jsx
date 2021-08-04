import { useState } from "react";

export default function Form(props) {
  const [input, setInput] = useState(null);

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
      <button type="submit" className="btn btn-light">
        Submit
      </button>
    </form>
  );
}
