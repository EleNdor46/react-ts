import { classNames } from "shared/lib/classNames/className";
import cls from "./Icon.module.scss";
import { memo } from "react";
interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
    return <Svg className={classNames(cls.Icon, {}, [className])}></Svg>;
});
