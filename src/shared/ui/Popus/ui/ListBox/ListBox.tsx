import { classNames, Mods } from "shared/lib/classNames/className";
import cls from "./ListBox.module.scss";
import { Fragment, memo, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { DropDownDirection } from "shared/types/ui";
import { Button } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import { mapDirectionClass } from "../styles/const";
import popupCls from "../../ui/styles/popup.module.scss";

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;
}

export const ListBox = memo(
    ({
        className,
        items,
        value,
        onChange,
        defaultValue,
        readonly,
        direction = "bottom left",
        label,
    }: ListBoxProps) => {
        const optionsMods = [mapDirectionClass[direction]];

        return (
            <HStack gap="4">
                {label && <span>{`${label}>`}</span>}
                <HListBox
                    disabled={readonly}
                    as="div"
                    className={classNames(cls.ListBox, {}, [
                        className,
                        popupCls.popus,
                    ])}
                    value={value}
                    onChange={onChange}
                >
                    <HListBox.Button
                        disabled={readonly}
                        className={cls.trigger}
                    >
                        <Button disabled={readonly}>
                            {value ?? defaultValue}
                        </Button>
                    </HListBox.Button>
                    <HListBox.Options
                        className={classNames(cls.options, {}, optionsMods)}
                    >
                        {items?.map((item) => (
                            <HListBox.Option
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                                as={Fragment}
                            >
                                {({ active, selected }) => (
                                    <li
                                        className={classNames(cls.item, {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        })}
                                    >
                                        {selected && "!!!"}
                                        {item.content}
                                    </li>
                                )}
                            </HListBox.Option>
                        ))}
                    </HListBox.Options>
                </HListBox>
            </HStack>
        );
    }
);
