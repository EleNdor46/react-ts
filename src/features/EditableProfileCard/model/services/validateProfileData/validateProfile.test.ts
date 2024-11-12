import { validateProfileData } from "./validateProfileData";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { validateProfileError } from "../../types/Profile";

const data = {
    first: "Тимур",
    lastname: "Ульбиdsddd",
    age: 2222,
    city: "Moscow12d",
    username: "admindsadasd",
    currency: Currency.USD,
    country: Country.Russia,
};

describe(" validateProfile ", () => {
    test("success", async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test("without firstname and lastname", async () => {
        const result = validateProfileData({
            ...data,
            first: "",
            lastname: "",
        });

        expect(result).toEqual([validateProfileError.INCORRECT_USER_DATA]);
    });
    test("incorrect age", async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([validateProfileError.INCORRECT_AGE]);
    });
    test("incorrect country", async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([validateProfileError.INCORRECT_COUNTRY]);
    });
    test("no data", async () => {
        const result = validateProfileData(undefined);

        expect(result).toEqual([validateProfileError.NO_DATA]);
    });
    test("incorrect all", async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            validateProfileError.INCORRECT_USER_DATA,
            validateProfileError.INCORRECT_AGE,
            validateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
