import { Currency } from "entities/Currency/model/types/currency";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/className";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { Select } from "shared/ui/Select/Select";
interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const onChangeHandler = useCallback(
            (value?: string) => {
                onChange?.(value as Currency);
            },
            [onChange]
        );

        return (
            <ListBox
                items={options}
                value={value}
                onChange={onChangeHandler}
                defaultValue={"укажите валюту"}
                readonly={readonly}
        label="укажите валюту"
            />
        );
    }
);
