import { classNames } from "shared/lib/classNames/className";
import cls from "./Avatar.module.scss";
import { CSSProperties, useMemo } from "react";
import { AppImage } from "../AppImage/AppImage";
import UserIcon from "widgets/assets/icon/UserIcon.svg";
import { Icon } from "../Icon/Icon";
interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        };
    }, [size]);

    return (
        <AppImage
            src={src}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt}
            errorFalback={<Icon Svg={UserIcon} />}
            fallback={<Icon Svg={UserIcon} />}
        />
    );
};
