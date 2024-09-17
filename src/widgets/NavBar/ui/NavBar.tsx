import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classNames(cls.mainLink)}
          to={"/about"}
        >
          about
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          Main
        </AppLink>
      </div>
    </div>
  );
};
