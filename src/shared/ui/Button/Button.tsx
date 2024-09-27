import { classNames } from "../../../shared/lib/classNames/className";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, memo } from "react";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND_INVERTED = "background_inverted",
  BACKGROUND = "background",
  CLEAR_INVERTED="clear_inverted"
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
  disabled?:boolean
}

export const Button: FC<ButtonProps> = memo(((
  { className, children, theme, onClick, square, size=SizeButton.M ,disabled},
  ...otherProps
) => {
  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]:disabled
  };
  return (
    <button
      onClick={onClick}
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
}));
