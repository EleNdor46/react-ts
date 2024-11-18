import { classNames } from "shared/lib/classNames/className";
import cls from "./NotificationItem.module.scss";
import { memo } from "react";
import { Notification } from "entities/Notification/model/types/notification";
import { Card, CardTheme } from "shared/ui/Card/Card";
import { Text } from "shared/ui/Text/Text";
interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo(
    ({ className, item }: NotificationItemProps) => {
        const content = (
            <Card
                theme={CardTheme.OUTLINE}
                className={classNames(cls.NotificationItem, {}, [className])}
            >
                <Text title={item.title} text={item.description}></Text>
            </Card>
        );

        if (item.href) {
            return (
                <a href={item.href} target="_blank" className={cls.link}>
                    {content}
                </a>
            );
        }

        return content;
    }
);
