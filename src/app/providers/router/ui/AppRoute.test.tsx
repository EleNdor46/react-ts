import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import AppRouter from "./AppRouter";
import { getRouteAbout, getRouteProfile } from "shared/const/router";
import { screen } from "@testing-library/react";

describe("app/router/AppRoute", function () {
    test("Render page", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId("AboutPage");
        expect(page).toBeInTheDocument();
    });
    test("page not found", async () => {
        componentRender(<AppRouter />, {
            route: "/jfhasdjkf",
        });

        const page = await screen.findByTestId("NotFoundPage");
        expect(page).toBeInTheDocument();
    });
    test("Redirect user without data", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),
        });

        const page = await screen.findByTestId("MainPage");
        expect(page).toBeInTheDocument();
    });
    test("Profile page with user data", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),
            initialState: { user: { _inited: true, authData: {} } },
        });

        const page = await screen.findByTestId("ProfilePage");
        expect(page).toBeInTheDocument();
    });
});
