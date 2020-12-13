// __tests__/Contact.test.js
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact component", () => {
  // First Test to verify that the component is rendering
  it("renders", () => {
    render(<ContactForm />);
  });

  it("matches snapshot DOM node structure", () => {
    // render About by returning a snapshot of the About component
    const { asFragment } = render(<ContactForm />);
    // test and compare whether the expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders", () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  });
});
