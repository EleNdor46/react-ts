import { fireEvent, render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";

describe("sideBar", () => {
  test("test toggle", () => {
    renderWithTranslation(<SideBar/>)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  });
});
