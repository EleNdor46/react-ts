import { classNames } from "shared/lib/classNames/className";
import cls from "./AppImage.module.scss";
import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useEffect,
    useLayoutEffect,
    useState,
} from "react";
interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFalback?: ReactElement;
}

export const AppImage = memo(
    ({
        className,
        src,
        alt = "",
        fallback,
        errorFalback,
        ...otherProps
    }: AppImageProps) => {
        const [isLoading, setIsLoading] = useState(true);
        const [hasError, setHasError] = useState(false);

        useLayoutEffect(() => {
            const img = new Image();
            img.src = src ?? "";
            img.onload = () => {
                setIsLoading(false);
            };
            img.onerror = () => {
                setIsLoading(false);
                setHasError(true);
            };
        }, []);

        if (isLoading && fallback) {
            return fallback;
        }

        if (hasError && errorFalback) {
            return errorFalback;
        }

        return (
            <img
                className={classNames(cls.AppImage, {}, [className])}
                {...otherProps}
                src={src}
                alt={alt}
            />
        );
    }
);
