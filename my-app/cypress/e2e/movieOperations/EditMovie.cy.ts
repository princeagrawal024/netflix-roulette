/// <reference types="cypress" />
describe("Edit Movie Flow", () => {
  it("should edit Titanic movie", () => {
    cy.visit("http://localhost:5173/?query=titanic");
    cy.wait(2000);
    cy.get(".movie-item").should("exist");
    cy.contains(".movie-title", "Titanic")
      .parents(".movie-item")
      .find("button.edit-btn")
      .click({ force: true });

    cy.wait(1500);
    cy.get("input[name='title']").clear().type("The Titanic movie");

    cy.get("input[name='poster_path']")
      .clear()
      .type(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQXin_CNozAFkv_SSihe5eZ_lvDD5nBqCmQT3xPf6KLlqHloIo5cBRGqwuy8pjuIiZrqoA&s=10"
      );

    cy.get("input[name='vote_average']").clear().type("9.5");
    cy.get(".genre-dropdown-header").click({ force: true });
    cy.contains("label.genre-option", "Romance")
      .find("input")
      .check({ force: true });
    cy.get(".genre-dropdown-header").click({ force: true });
    cy.get("textarea[name='overview']")
      .clear()
      .type(
        "Titanic is a 1997 American epic romantic disaster film directed by James Cameron"
      );
    cy.contains("button", "SUBMIT").click({ force: true });
    cy.wait(2000);
    cy.contains("CONGRATULATIONS!").should("exist");
    cy.get(".generic-portal-close-button").click({ force: true });

    cy.wait(1000);
    cy.visit("http://localhost:5173/?query=The%20Titanic%20movie");
    cy.wait(1500);
    cy.get(".movie-title")
      .should("exist")
      .and("contain.text", "The Titanic movie");

    cy.get(".movie-item").its("length").should("be.greaterThan", 0);
  });
});
