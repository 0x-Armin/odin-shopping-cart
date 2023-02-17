import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Cart from "../components/Cart";

describe("Cart component", () => {
  it("renders default empty cart page", () => {
    const container = render(<Cart />);
    expect(container).toMatchSnapshot();
  });
});
