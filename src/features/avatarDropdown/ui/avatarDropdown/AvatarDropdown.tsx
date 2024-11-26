import { classNames } from "shared/lib/classNames/className";
import cls from "./AvatarDropdown.module.scss";
import { memo, useCallback } from "react";
import { Dropdown } from "shared/ui/Popus";
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "entities/User";
import { useSelector } from "react-redux";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { useAppDispatch } from "shared/lib/hooks/AppDispatch/AppDispatch";
import { getRouteAdmin, getRouteProfile } from "shared/const/router";
interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: "admin panel",
                              href: getRouteAdmin(),
                          },
                      ]
                    : []),
                {
                    content: "profile",
                    href: getRouteProfile(authData.id),
                },
                {
                    content: "Выйти",
                    onClick: onLogOut,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
