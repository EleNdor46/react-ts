import { classNames } from "shared/lib/classNames/className";
import cls from "./Popover.module.scss";
import popupCls from "../styles/popup.module.scss";

import { memo, ReactNode } from "react";
import { Popover as Hpopover } from "@headlessui/react";
import { mapDirectionClass } from "../styles/const";
import { DropDownDirection } from "shared/types/ui";
interface PopoverProps {
    className?: string;
    direction?: DropDownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export function Popover({
    className,
    direction = "bottom right",
    trigger,
    children,
}: PopoverProps) {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Hpopover
            className={classNames(cls.Popover, {}, [className, popupCls.popus])}
        >
            <Hpopover.Button className={popupCls.trigger}>
                {trigger}
            </Hpopover.Button>
            <Hpopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </Hpopover.Panel>
        </Hpopover>
    );
}
