import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
describe(" getProfileData", () => {
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
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
