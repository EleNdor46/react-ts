import { classNames } from "shared/lib/classNames/className";
import cls from "./Dropdown.module.scss";
import { Fragment, memo, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { DropDownDirection } from "shared/types/ui";
import { AppLink } from "../AppLink/AppLink";

export interface DropdownItem {
    disabled?: boolean;
    content?: string;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    "bottom left": cls.optionsBottomLeft,
    "bottom right": cls.optionsBottomRight,
    "top left": cls.optionsBottomLeft,
    "top right": cls.optionsBottomRight,
};

export const Dropdown = memo(
    ({
        className,
        items,
        trigger,
        direction = "bottom right",
    }: DropdownProps) => {
        const menuClasses = [mapDirectionClass[direction]];

        return (
            <Menu
                as="div"
                className={classNames(cls.Dropdown, {}, [className])}
            >
                <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
                <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                    {items.map((item) => {
                        const content = ({ active }: { active: boolean }) => (
                            <button
                                type={"button"}
                                className={classNames(cls.item, {
                                    [cls.active]: active,
                                })}
                                disabled={item.disabled}
                                onClick={item.onClick}
                            >
                                {item.content}
                            </button>
                        );

                        if (item.href) {
                            return (
                                <Menu.Item
                                    as={AppLink}
                                    disabled={item.disabled}
                                    key={item.content}
                                    to={item.href}
                                >
                                    {content}
                                </Menu.Item>
                            );
                        }
                        return (
                            <Menu.Item
                                as={Fragment}
                                disabled={item.disabled}
                                key={item.content}
                            >
                                {content}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>
            </Menu>
        );
    }
);
