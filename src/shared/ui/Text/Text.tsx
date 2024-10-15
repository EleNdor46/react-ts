import { classNames, Mods } from "shared/lib/classNames/className";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextAlign {
    RIGHT = "right",
    CENTER = "center",
    LEFT = "left",
}

export enum TextSize {
    M = "size_m",
    L = "size_l",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    aligin?: TextAlign;
    size?: TextSize;
}

export const Text = ({
    className,
    title,
    text,
    size = TextSize.M,
    theme = TextTheme.PRIMARY,
    aligin = TextAlign.LEFT,
}: TextProps) => {
    const mods: Mods = {
        [cls[theme]]: true,
        [cls[aligin]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
