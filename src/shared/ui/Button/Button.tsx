import { classNames } from "../../../shared/lib/classNames/className";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND_INVERTED = "background_inverted",
  BACKGROUND = "background",
}

export enum SizeButton {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
}

export const Button: FC<ButtonProps> = (
  { className, children, theme, onClick, square, size=SizeButton.M },
  ...otherProps
) => {
  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };
  return (
    <button
      onClick={onClick}
      className={classNames(cls.Button, mods, [className])}
    >
      {children}
    </button>
  );
};
