import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

const season1Test = [
  {
    id: Date.now(),
    image: {},
    name: "Test ",
    season: 1,
    number: 5,
    runtime: 60,
    summary: "test Summary",
  },
];

const season2Test = [
  {
    id: Date.now(),
    image: {},
    name: "Test2",
    season: 2,
    number: 5,
    runtime: 60,
    summary: "test Summary2",
  },
];

test("renders without errors", async () => {
  render(<Episodes episodes={[]} />);
});

test("Episodes update properly ", () => {
  const { rerender } = render(<Episodes episodes={season1Test} />);
  const testTitleOne = screen.getByText("Test", {
    exact: true,
  });
  expect(testTitleOne).toBeInTheDocument();

  //Testing Season 2
  rerender(<Episodes episodes={season2Test} />);

  const testTitleTwo = screen.getByText("Test2", {
    exact: true,
  });
  expect(testTitleTwo).toBeInTheDocument();
});
