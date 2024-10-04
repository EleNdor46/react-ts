import React, { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
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
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          theme={ThemeButton.CLEAR_INVERTED}
          className={classNames(cls.links)}
          onClick={onLogOut}
        >
          Log out
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
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
    </div>
  );
};
