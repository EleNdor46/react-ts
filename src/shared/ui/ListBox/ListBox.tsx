import { classNames, Mods } from "shared/lib/classNames/className";
import cls from "./ListBox.module.scss";
import { Fragment, memo, ReactNode, useState } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { Button, ThemeButton } from "../Button/Button";
import { HStack } from "../Stack";

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

export type DropDownDirection = "top" | "bottom";

const mapDirectionClass: Record<DropDownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defautlValue?: string;
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
        defautlValue,
        readonly,
        direction = "bottom",
        label,
    }: ListBoxProps) => {
        const optionsMods = [mapDirectionClass[direction]];

        return (
            <HStack gap="4">
                {label && <span> {`${label}>`}</span>}
                <HListBox
                    disabled={readonly}
                    as={"div"}
                    className={classNames(cls.ListBox, {}, [className])}
                    value={value}
                    onChange={onChange}
                >
                    <HListBox.Button
                        className={cls.trigger}
                        disabled={readonly}
                    >
                        <Button disabled={readonly} theme={ThemeButton.BACKGROUND_INVERTED}>
                            {value ?? defautlValue}
                        </Button>
                    </HListBox.Button>
                    <HListBox.Options
                        className={classNames(cls.options, {}, optionsMods)}
                    >
                        {items?.map((item) => (
                            <HListBox.Option
                                as={Fragment}
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                            >
                                {({ active, selected }) => (
                                    <li
                                        className={classNames(cls.item, {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        })}
                                    >
                                        {selected && "_"}
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
