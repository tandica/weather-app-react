import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
  getByPlaceholderText,
  getByText,
  queryByText,
  getByTestId,
} from "@testing-library/react";
import Form from "../Form";
import Weather from "../Weather";

// test("search for a city weather by name", () => {
//   render(<Form />);
//   const pageTitle = screen.getByText(/Search for a city or zip code/i);
//   expect(pageTitle).toBeInTheDocument();
// });
afterEach(cleanup);

// test("renders a form", () => {
//   render(<Form />);
//   const pageTitle = screen.getByText(/Search for a city or zip code/i);
//   expect(pageTitle).toBeInTheDocument();
// });

describe("Form", () => {
  it("renders a form", () => {
    render(<Form />);
    const pageTitle = screen.getByText(/Search for a city or zip code/i);
    expect(pageTitle).toBeInTheDocument();
  });

  // it("renders weather data", () => {
  //   render(<Weather />);
  //   const pageTitle = screen.getByText(/precipitation/i);
  //   expect(pageTitle).toNotBeInTheDocument();
  // });

  it("calls handleSubmit", async () => {
    const onSubmit = jest.fn();
    const { getByText, getByTestId } = render(<Form onSubmit={onSubmit} />);
    fireEvent.click(getByText("Search"));
    //const { getByTestId } = render(<Form onSubmit={handleSubmit} />);
    // fireEvent.submit(queryByText("Search"));
    fireEvent.submit(getByTestId("form-test"));
    expect(onSubmit).toHaveBeenCalled();
  });
});
