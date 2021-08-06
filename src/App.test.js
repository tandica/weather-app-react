import { render, screen } from "@testing-library/react";
import App from "./App";
import Form from "./components/Form";
import Weather from "./components/Weather";

test("renders without crashing", () => {
  render(<Form />);
  const pageTitle = screen.getByText(/Search for a city or zip code/i);
  expect(pageTitle).toBeInTheDocument();
});
