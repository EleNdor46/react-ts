import { classNames, Mods } from "shared/lib/classNames/className";
import cls from "./ProfileCard.module.scss";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile/model/types/Profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country";
interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirtsname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    onChangeLastname,
    onChangeFirtsname,
    readonly,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    if (!isLoading) {
        return (
            <div
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [className]
                )}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    title="error profile"
                    theme={TextTheme.ERROR}
                    text="reload page"
                    aligin={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} alt="avatar" />
                </div>
            )}
            <div className={cls.data}>
                <Input
                    className={cls.iput}
                    value={data?.first}
                    placeholder={"your name"}
                    onChange={onChangeFirtsname}
                    readonly={readonly}
                />
                <Input
                    className={cls.iput}
                    value={data?.lastname}
                    placeholder={"your lastname"}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    className={cls.iput}
                    value={data?.age}
                    placeholder={"your age"}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    className={cls.iput}
                    value={data?.city}
                    placeholder={"your city"}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    className={cls.iput}
                    value={data?.username}
                    placeholder={"your username"}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    className={cls.iput}
                    value={data?.avatar}
                    placeholder={"your avatar"}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                    className={cls.input}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
