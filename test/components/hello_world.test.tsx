import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { HelloWorld } from "../../src/components/hello_world";

describe("<HelloWorld />", () => {
  beforeEach(() => {
    render(<HelloWorld />);
  });

  it("renders a title", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Hello World 1");
  });

  it("counts up when button pressed", () => {
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("heading")).toHaveTextContent("Hello World 2");
  });
});
