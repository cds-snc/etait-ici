import Name from "../../components/Name";
import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<Name />", () => {
  test("renders without exploding", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Name />, div);
  });

  test("renders a passed name and date", () => {
    const { getByTestId } = render(
      <Name name="foo" date="01.01.2000" plural={false} />
    );
    expect(getByTestId("Name")).toHaveTextContent("foo");
    expect(getByTestId("Name")).toHaveTextContent("01.01.2000");
  });

  test("states who was here in english and french", () => {
    const { getByTestId } = render(
      <Name name="foo" date="01.01.2000" plural={false} />
    );
    expect(getByTestId("Name")).toHaveTextContent("foo was here");
    expect(getByTestId("Name")).toHaveTextContent("foo était ici");
  });

  test("renders a plural in french", () => {
    const { getByTestId } = render(
      <Name name="foos" date="01.01.2000" plural={true} />
    );
    expect(getByTestId("Name")).toHaveTextContent("foos étaient ici");
  });
});
