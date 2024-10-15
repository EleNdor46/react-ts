import { classNames } from "shared/lib/classNames/className";
import cls from "./Skeleton.module.scss";
import { CSSProperties } from "react";
interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string | number;
}

export const Skeleton = ({
    className,
    height,
    width,
    border,
}: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        ></div>
    );
};
