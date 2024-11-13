import { screen } from "@testing-library/react";
import { EditableProfileCard } from "./EditableProfileCard";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Profile } from "features/EditableProfileCard/model/types/Profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { profileReducer } from "features/EditableProfileCard/model/slice/ProfileSlice";
import userEvent from "@testing-library/user-event";

const profile: Profile = {
    id: "1",
    first: "admin",
    lastname: "admin",
    age: 465,
    currency: Currency.USD,
    country: Country.Russia,
    city: "Moscow",
    username: "admin123",
};

describe("features/EditableProfileCard", () => {
    test("test toggle", async () => {
        componentRender(<EditableProfileCard id={"1"} />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: profile,
                    form: profile,
                },
            },
            asyncRedusers: {
                profile: { profileReducer },
            },
        });
        await userEvent.click(
            screen.getByTestId("EditableProfileCardHeader.EditBtn")
        );
        expect(screen.getByTestId("EditableProfileCardHeader.CancelBtn"))
            .toBeInTheDocument;
    });
});
