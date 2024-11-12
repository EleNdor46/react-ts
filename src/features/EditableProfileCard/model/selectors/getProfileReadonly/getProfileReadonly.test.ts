import { StateSchema } from "app/providers/StoreProvider";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getProfileReadonly } from "./getProfileReadonly";
describe(" getProfileReadonly", () => {
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
                readonly:true
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
