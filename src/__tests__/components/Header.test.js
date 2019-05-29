import Header from "../../components/Header";
import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<Header />", () => {
  test("renders without exploding", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });

  test("renders the text Était ici", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("Header")).toHaveTextContent("Était ici");
  });
});
