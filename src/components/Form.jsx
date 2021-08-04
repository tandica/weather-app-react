import { useState } from "react";

export default function Form(props) {
  return (
    <form className="input-form">
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a city name..."
        />
      </div>
      <button type="submit" className="btn btn-light">
        Submit
      </button>
    </form>
  );
}
