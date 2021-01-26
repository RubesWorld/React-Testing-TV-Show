import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

import { fetchShow as mockFetchShow } from "./api/fetchShow";

const testObj = {
  data: {
    image: {
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    name: "Stranger Things",
    summary: "<p>A really cool show</p>",
    _embedded: {
      episodes: [
        {
          id: 1,
          name: "foo",
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
          },
          number: 1,
          season: 1,
          summary: "bar",
          runtime: 60,
        },
      ],
    },
  },
};

test("renders without errors", () => {
  render(<App />);
});

test("Fetching Data... to show on the screen ", () => {
  render(<App show={false} />);

  const fetching = screen.queryByText(/Fetching data.../i);

  expect(fetching).toBeInTheDocument();
});

// test("Dropdown to appear ", async () => {
//   render(<App />);

//   const dropdown = await screen.findByText(/Select a season/i);
//   //dropdown loads
//   userEvent.click(dropdown);
//   //clicked so seasons is up
//   const season2 = screen.findByText(/season 2/i);

//   expect(season2).toBeInTheDocument();
// });
