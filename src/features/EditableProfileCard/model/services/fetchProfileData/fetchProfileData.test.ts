import axios from "axios";
import { TestAsyncThunk } from "shared/lib/tests/TestAsynkThunk/TestAsynkThunk";
import { fetchProfileData } from "./fetchProfileData";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

const data = {
    first: "Тимур",
    lastname: "Ульбиdsddd",
    age: 2222,
    city: "Moscow12d",
    username: "admindsadasd",
    currency: Currency.USD,
    country: Country.Russia,
};

describe(" fetchProfileData ", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error login", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockRejectedValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
