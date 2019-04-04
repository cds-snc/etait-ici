import List from "../../components/List";
import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<List />", () => {
  test("renders without exploding", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List />, div);
  });

  test("renders the the name CDS-SNC", () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId("List")).toHaveTextContent("CDS-SNC");
  });

  test("renders the the name L'équipe de la Plateforme", () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId("List")).toHaveTextContent("L'équipe de la Plateforme");
  });

  test("renders the the name Khalid", () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId("List")).toHaveTextContent("Khalid");
  });

  test("renders the the name Dan", () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId("List")).toHaveTextContent("Dan");
  });

  test("renders the the name Élenchos", () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId("List")).toHaveTextContent("Élenchos");
  });

  test("renders the the name John O'Brien", () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId("List")).toHaveTextContent("John O'Brien");
  });
  
  test("renders the the name AaronO", () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId("List")).toHaveTextContent("AaronO");
  });
});
