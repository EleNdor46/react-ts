import { classNames } from "shared/lib/classNames/className";
import cls from "./Card.module.scss";
import { HTMLAttributes, memo, ReactNode } from "react";

export enum CardTheme {
    NORMAL = "normal",
    OUTLINE = "outline",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo(
    ({
        className,
        theme = CardTheme.NORMAL,
        children,
        max,
        ...otherProps
    }: CardProps) => {
        return (
            <div
                className={classNames(cls.Card, { [cls.max]: max }, [
                    className,
                    cls[theme],
                ])}
                {...otherProps}
            >
                {children}
            </div>
        );
    }
);
