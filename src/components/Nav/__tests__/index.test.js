import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

//after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

// The describe function is not absolutely necessary for the test to run
// it is used to organize tests into sections that are
//typically labeled with the element being tested.
describe("Nav component", () => {
  // baseline test
  it("renders", () => {
    render(<Nav />);
  });
  // snapshot test
  it("matches snapshot", () => {
    // assert value comparison
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });
});

// Test if the camera emoji is visible
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);
    // Assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

// check to see if some of our links are visible
describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    const { getByTestId } = render(<Nav />);
    // Once the getByTestId method is available, use it to Assert
    // the valid outcomes using the matcher, toHaveTextContent
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
