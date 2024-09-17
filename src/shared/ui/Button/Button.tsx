import { classNames } from '../../../shared/lib/classNames/className';
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";
import { Theme } from "app/providers/ThemeProvider";
import React from 'react';

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (
  { className, children, theme, onClick },
  ...otherProps
) => {
  return (
    <button
      onClick={onClick}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};
