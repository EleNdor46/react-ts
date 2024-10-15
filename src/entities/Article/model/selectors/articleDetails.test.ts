import { StateSchema } from "app/providers/StoreProvider";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "./articleDetails";
describe(" getArticleDetailsData", () => {
    test("return data", () => {
        const data = {
            id: "1",
            title: "Javascript news",
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test("empty state data", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test("return isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test("empty state isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {},
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });

    test("return error", () => {
        const data = {};

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: "er",
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual("er");
    });

    test("should work with empty state error", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
