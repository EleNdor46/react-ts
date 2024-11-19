import { classNames } from "shared/lib/classNames/className";
import cls from "./NotificationButton.module.scss";
import { memo, useCallback, useState } from "react";
import { NotificationList } from "entities/Notification";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { Popover } from "shared/ui/Popus";
import BellIcon from "widgets/assets/icon/BellIcon.svg";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { BrowserView, MobileView } from "react-device-detect";
import { AnimationProvider } from "shared/lib/components/AnimationProvider";
interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);
        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
                <Icon Svg={BellIcon} inverted></Icon>
            </Button>
        );

        return (
            <div>
                <BrowserView>
                    <Popover
                        className={classNames("", {}, [className])}
                        direction={"bottom left"}
                        trigger={trigger}
                    >
                        <NotificationList className={cls.NotificationButton} />
                    </Popover>
                </BrowserView>
 
            <MobileView>
                    <AnimationProvider>
                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList />
                        </Drawer>
                    </AnimationProvider>
                </MobileView>
            </div>
        );
    }
);
