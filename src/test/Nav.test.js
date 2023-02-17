import React from "react";
import { render } from "@testing-library/react";

import Nav from "../components/Nav";
import RouteSwitch from "../components/RouteSwitch";

describe("Nav component", () => {
  it("renders correct logo", () => {
    const { getByRole } = render(<Nav />, {wrapper: RouteSwitch});
    expect(getByRole("heading").textContent).toMatch(/SNEAKERS UNDERGROUND/i);
  });

  it("check 3 li items in nav", () => {
    const { getAllByRole } = render(<Nav />, {wrapper: RouteSwitch});
    expect(getAllByRole('listitem')).toHaveLength(3);
  })

  it("renders home page with sample sneakers", () => {
    const { container } = render(<Nav />, {wrapper:RouteSwitch});
    expect(container).toMatchSnapshot();
  })
});
