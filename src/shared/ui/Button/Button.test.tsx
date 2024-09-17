import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("first param", () => {
  test("with only first param", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  });
});
