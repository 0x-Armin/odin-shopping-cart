import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";

import Shop from "../components/Shop";

describe("Shop component", () => {
  it("input spin button", () => {
    render(<Shop />);

    userEvent.type(screen.getAllByRole('spinbutton')[0], "1");
    expect(screen.getAllByRole('spinbutton')[0]).toHaveValue(1);
  });

  it("add to cart", () => {
    render(<Shop />);

    userEvent.type(screen.getAllByRole('spinbutton')[0], "1"); 
    userEvent.click(screen.getAllByRole('button')[0]);
  })
});
