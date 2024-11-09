import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { withTranslation } from "react-i18next";
import renderWithTranslation from "shared/lib/renderWithTranslation/renderWithTranslation";

describe("classNames", () => {
  test("Test render", () => {
        renderWithTranslation(<Sidebar/>)
    // Проверяем, что текст "Test"  внутри компонента Button существует
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });


});