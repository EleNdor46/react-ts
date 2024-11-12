import { StateSchema } from "app/providers/StoreProvider";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getProfileValidateError } from "./getProfileValidateError";
import { validateProfileError } from "../../types/Profile";
describe(" getProfileValidateError", () => {
    test("should return error", () => {
        const data = {
            first: "Тимур",
            lastname: "Ульбиdsddd",
            age: 2222,
            city: "Moscow12d",
            username: "admindsadasd",
            currency: Currency.USD,
            country: Country.Russia,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data: data,
                error: "er",
                form: data,
                isLoading: true,
                readonly: true,
                validateErrors: [validateProfileError.INCORRECT_AGE ,validateProfileError.INCORRECT_COUNTRY],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([validateProfileError.INCORRECT_AGE ,validateProfileError.INCORRECT_COUNTRY]);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toEqual(
            undefined
        );
    });
});
