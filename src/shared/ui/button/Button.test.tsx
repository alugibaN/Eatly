import Button, { ButtonTheme } from "./Button";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("classNames", () => {
  test("Test render", () => {
    render(<Button>Test</Button>);
    // Проверяем, что текст "Test"  внутри компонента Button существует
    expect(screen.getByText("Test")).toBeInTheDocument();
  });


  test("Test clear theme", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    // Проверяем, что текст "Test"  внутри компонента Button существует
    expect(screen.getByText("TEST")).toHaveClass("button");
    screen.debug();
  });
});