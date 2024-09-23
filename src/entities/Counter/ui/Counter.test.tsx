import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";
import { screen, render } from "@testing-library/react";
import React from "react";
import { userEvent } from "@storybook/test";

describe("Counter", () => {
  test("test render", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  }),
    test("test toggle", () => {
      componentRender(<Counter />, {
        initialState: { counter: { value: 10 } },
      });
      userEvent.click(screen.getByTestId('increment-btn'))
      expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
});
