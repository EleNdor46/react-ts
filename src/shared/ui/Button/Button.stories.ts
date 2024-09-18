import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import cls from "./Button.module.scss";
import { Button } from "./Button";
import { classNames } from "shared/lib/classNames/className";
import { ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: "Clear",
    className: classNames(cls.Button, {}, [ThemeButton.CLEAR]),
  },
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: "OUTLINE",
    className: classNames(cls.Button, {}, [ThemeButton.OUTLINE]),
  },
};
export const Background: Story = {
  args: {
    theme: ThemeButton.BACKGROUND,
    children: ">",
    className: classNames(cls.Button, {}, [ThemeButton.BACKGROUND]),
  },
};
export const Background_inverted: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED,
    children: ">",
    className: classNames(cls.Button, {}, [ThemeButton.BACKGROUND_INVERTED]),
  },
};
export const Square: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED,
    children: ">",
    className: classNames(cls.Button, {}, [ThemeButton.BACKGROUND_INVERTED]),
    square: true,
  },
};
export const SquareSizeM: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED,
    children: ">",
    className: classNames(cls.Button, {}, [ThemeButton.BACKGROUND_INVERTED]),
    square: true,
  },
};
export const SquareSizeL: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED,
    children: ">",
    className: classNames(cls.Button, {}, [ThemeButton.BACKGROUND_INVERTED]),
    square: true,
  },
};
export const SquareSizeXL: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED,
    children: ">",
    className: classNames(cls.Button, {}, [ThemeButton.BACKGROUND_INVERTED]),
    square: true,
  },
}
