import { classNames } from "shared/lib/classNames/className";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC, memo } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo(({
  to,
  children,
  className,
  theme,
  ...otherProps
}) => {
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
});
