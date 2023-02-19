import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";

import Shop from "../components/Shop";

describe("Shop component", () => {
  it("input has correct values", () => {
    render(<Shop />);

    userEvent.type(screen.getAllByRole('spinbutton')[0], "1");
    expect(screen.getAllByRole('spinbutton')[0]).toHaveValue(1);
  });

  it("calls add to cart one time", () => {
    const setCartMock = jest.fn();

    render(<Shop cart={new Map()} setCart={setCartMock} />);

    userEvent.type(screen.getAllByRole('spinbutton')[0], "1"); 
    userEvent.click(screen.getAllByRole('button')[0]);

    expect(setCartMock).toHaveBeenCalledTimes(1);
  })
});
