import { classNames } from "shared/lib/classNames/className";
import cls from "./SideBarItem.module.scss";
import { t } from "i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { SideBarItemType } from "widgets/SideBar/model/types/sidbar";
interface SideBarItemProps {
    item: SideBarItemType;
    collapsed?: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {

  const isAuth =useSelector(getUserAuthData)

  if(item.authOnly && !isAuth){
    return null
  }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
