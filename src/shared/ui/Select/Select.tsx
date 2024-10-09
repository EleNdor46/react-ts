import { classNames, Mods } from "shared/lib/classNames/className";
import cls from "./Select.module.scss";
import { ChangeEvent, memo, useCallback, useMemo } from "react";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value?: string) => void;
    readonly?: boolean;
}

export const Select = memo(
    ({ className, label, options, value, onChange, readonly }: SelectProps) => {
        const mods: Mods = {
            // [cls.]
        };

        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value);
        };

        const optionList = useMemo(() => {
            return options?.map((opt) => (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            ));
        }, [options]);

        return (
            <div className={classNames(cls.Wrapper, mods, [className])}>
                {label && <span className={cls.label}>{`${label}>`}</span>}
                <select
                    className={cls.select}
                    value={value}
                    onChange={onChangeHandler}
                    disabled={readonly}
                >
                    {optionList}
                </select>
            </div>
        );
    }
);
