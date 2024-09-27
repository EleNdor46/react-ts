import { classNames } from "shared/lib/classNames/className";
import cls from "./SideBarItem.module.scss";
import { SideBarItemType } from "widgets/SideBar/model/items";
import { t } from "i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { memo } from "react";
interface SideBarItemProps {
  item?: SideBarItemType;
  collapsed?: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  return (
    <div className={classNames(cls.SideBarItem, {}, [])}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      >
        <item.Icon className={cls.icon} />
        <span className={classNames(cls.link)}>{t(item.text)}</span>
      </AppLink>
    </div>
  );
});
