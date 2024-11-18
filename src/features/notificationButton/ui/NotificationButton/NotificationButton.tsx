import { classNames } from "shared/lib/classNames/className";
import cls from "./NotificationButton.module.scss";
import { memo } from "react";
import { NotificationList } from "entities/Notification";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { Popover } from "shared/ui/Popus";
import BellIcon from "widgets/assets/icon/BellIcon.svg";
interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        return (
            <Popover
                className={classNames('', {}, [className])}
                direction={"bottom left"}
                trigger={
                    <Button theme={ThemeButton.CLEAR}>
                        <Icon Svg={BellIcon} inverted></Icon>
                    </Button>
                }
            >
                <NotificationList className={cls.NotificationButton} />
            </Popover>
        );
    }
);
