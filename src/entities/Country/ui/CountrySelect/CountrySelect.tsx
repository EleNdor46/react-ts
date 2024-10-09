import { Country } from "entities/Country/model/types/country";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/className";
import { Select } from "shared/ui/Select/Select";
interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USA, content: Country.USA },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const onChangeHandler = useCallback(
            (value?: string) => {
                onChange?.(value as Country);
            },
            [onChange]
        );

        return (
            <Select
                className={classNames("", {}, [className])}
                label={"страна"}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    }
);
