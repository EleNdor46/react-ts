import { classNames } from "shared/lib/classNames/className";
import cls from "./Dropdown.module.scss";
import { Fragment, memo, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { DropDownDirection } from "shared/types/ui";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { mapDirectionClass } from "../styles/const";
import popupCls from "../../ui/styles/popup.module.scss";

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
                className={classNames(cls.Dropdown, {}, [
                    className,
                    popupCls.popus,
                ])}
            >
                <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
                <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                    {items.map((item) => {
                        const content = ({ active }: { active: boolean }) => (
                            <button
                                type={"button"}
                                className={classNames(cls.item, {
                                    [popupCls.active]: active,
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
