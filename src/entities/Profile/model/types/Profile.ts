import { Country } from "entities/Country/model/types/country";
import { Currency } from "entities/Currency";

export enum validateProfileError {
    INCORRECT_USER_DATA = "INCORRECT_user_data",
    INCORRECT_AGE = "INCORRECT_age",
    INCORRECT_COUNTRY = "INCORRECT_country",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: validateProfileError[];
}
