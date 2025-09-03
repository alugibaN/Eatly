// import Button, { ButtonType } from "./Button";
// import { render, screen } from "@testing-library/react";

// describe("classNames", () => {
//   test("Test render", () => {
//     render(<Button>Test</Button>);
//     // Проверяем, что текст "Test"  внутри компонента Button существует
//     expect(screen.getByText("Test")).toBeInTheDocument();
//   });


//   test("Test clear theme", () => {
//     render(<Button type={ButtonType.SECONDARY}>TEST</Button>);
//     // Проверяем, что текст "Test"  внутри компонента Button существует
//     expect(screen.getByText("TEST")).toHaveClass("button");
//     screen.debug();
//   });
// });