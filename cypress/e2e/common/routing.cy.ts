describe("Роутинг", () => {
    describe("User LogOut", () => {
        it("Переход на главную", () => {
            cy.visit("/");
            cy.get("[data-testid=MainPage]").should("exist");
        });
        it("Редирект при попытке перехода на профиль", () => {
            cy.visit("/profile/1");
            cy.get("[data-testid=MainPage]").should("exist");
        });
        it("User open not found page", () => {
            cy.visit("/dsadsadsads");
            cy.get("[data-testid=NotFoundPage]").should("exist");
        });
        describe("User LogIn", () => {
            it("Profile Page", () => {
                cy.login("admin", "123");
                cy.visit("/profile/1");
                cy.get("[data-testid=ProfilePage]").should("exist");
            });
            it("Article Page", () => {
                cy.login("admin", "123");
                cy.visit("/article");
                cy.get("[data-testid=ArticlePage]").should("exist");
            });
        });
    });
});
