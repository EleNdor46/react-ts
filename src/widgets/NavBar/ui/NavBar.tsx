import React, { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/RouterConfig/routerConfig";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onShowModal = () => {
        setIsAuthModal(true);
    };

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    title={"¤EleNdor0_o"}
                    theme={TextTheme.INVERTED}
                    className={cls.appName}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    Create Article
                </AppLink>
                <Dropdown
                    direction="bottom left"
                    className={cls.dropdown}
                    items={[
                        {
                            content: "Выйти",
                            onClick: onLogOut,
                        },
                        {
                            content: "profile",
                            href: RoutePath.profile + authData.id,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                />

                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={classNames(cls.links)}
                onClick={onShowModal}
            >
                Sing In
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
};
