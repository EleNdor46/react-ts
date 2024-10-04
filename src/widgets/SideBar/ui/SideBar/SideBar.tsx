import { classNames } from "shared/lib/classNames/className";
import cls from "./SideBar.module.scss";
import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { SideBarItemsList } from "widgets/SideBar/model/items";
import { SideBarItem } from "./SideBarItem/SideBarItem";

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      SideBarItemsList.map((item) => (
        <SideBarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed]
  );

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
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
      <div className={cls.items}>{itemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={classNames(cls.lang)}
          short={collapsed}
        />
      </div>
    </div>
  );
});
