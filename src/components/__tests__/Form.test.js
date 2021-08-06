import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Form from "../Form";

afterEach(cleanup);

describe("Form", () => {
  it("renders a form", () => {
    render(<Form />);
    const pageTitle = screen.getByText(/Search for a city or zip code/i);
    expect(pageTitle).toBeInTheDocument();
  });

  it("shows correct input on form", () => {
    const result = render(<Form />);
    const input = result.container.querySelector("#inputLocation");
    fireEvent.change(input, { target: { value: "London" } });
    expect((input, "London")).toBe("London");
  });
});
