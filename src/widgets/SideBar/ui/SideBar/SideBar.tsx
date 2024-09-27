import { classNames } from "shared/lib/classNames/className";
import cls from "./SideBar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/RouterConfig/routerConfig";
import MainIcon from "widgets/assets/icon/MainIcon.svg";
import AboutIcon from "widgets/assets/icon/AboutIcon.svg";
import { useTranslation } from "react-i18next";
import { SideBarItemsList } from "widgets/SideBar/model/items";
import { SideBarItem } from "./SideBarItem/SideBarItem";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [t] = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <div>
          {SideBarItemsList.map((item) => (
            <SideBarItem item={item} collapsed key={item.path}/>
          ))}
        </div>
        <div className={cls.item}></div>
      </div>

      <div className={cls.switchers}>
        {<ThemeSwitcher />}
        <LangSwitcher
          className={classNames(cls.langSwitcher)}
          short={collapsed}
        />
      </div>
    </div>
  );
};
