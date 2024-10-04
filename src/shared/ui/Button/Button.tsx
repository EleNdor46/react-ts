import { classNames, Mods } from "../../../shared/lib/classNames/className";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND_INVERTED = "background_inverted",
  BACKGROUND = "background",
  CLEAR_INVERTED = "clear_inverted",
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
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme =ThemeButton.OUTLINE,
    square,
    disabled,
    size = SizeButton.M,
    ...otherProps
  } = props;
  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };
  return (
    <button
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
