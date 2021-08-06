import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
  const pageTitle = screen.getByText(/Search for a city or zip code/i);
  expect(pageTitle).toBeInTheDocument();
});
