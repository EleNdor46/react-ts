import { classNames, Mods } from "shared/lib/classNames/className";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
    INVERTED = "inverted",
}

export enum TextAlign {
    RIGHT = "right",
    CENTER = "center",
    LEFT = "left",
}

export enum TextSize {
    S = "size_s",
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

    "data-testid"?: string;
}

export type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: "h3",
    [TextSize.M]: "h2",
    [TextSize.L]: "h1",
};

export const Text = ({
    className,
    title,
    text,
    size = TextSize.M,
    theme = TextTheme.PRIMARY,
    aligin = TextAlign.LEFT,
    "data-testid": dataTestId = "Text",
}: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[aligin]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
};
