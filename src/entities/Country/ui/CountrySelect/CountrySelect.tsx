import { Country } from "entities/Country/model/types/country";
import { memo, useCallback } from "react";
import { ListBox } from "shared/ui/Popus";
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
            <ListBox
                items={options}
                value={value}
                onChange={onChangeHandler}
                defaultValue={"укажите Страну"}
                readonly={readonly}
                direction="top right"
                label={"укажите Страну"}
            />
        );
    }
);
