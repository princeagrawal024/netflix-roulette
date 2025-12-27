/// <reference types="cypress" />
import { APP_BASE_URL } from "testData/test-constants";

describe("Add Movie Flow + Direct URL Search", () => {
  it("should add 'Source Code' movie and then navigate to query URL", () => {
    cy.visit(APP_BASE_URL);

    cy.contains("button", "+ ADD MOVIE").click();

    cy.get("input[name='title']").type("Source Code");
    cy.get("input[name='release_date']").type("2011-04-01");
    cy.get("input[name='poster_path']").type(
      "https://www.hollywoodreporter.com/wp-content/uploads/2011/02/sourcecode.jpg?w=1440&h=810&crop=1"
    );
    cy.get("input[name='vote_average']").clear().type("9.5");

    cy.get(".genre-dropdown-header").click();
    cy.contains("label.genre-option", "Drama").find("input").check();
    cy.contains("label.genre-option", "Crime").find("input").check();
    cy.get(".genre-dropdown-header").click();

    cy.get("input[name='runtime']").clear().type("120");

    cy.get("textarea[name='overview']").type(
      "Helicopter pilot Colter Stevens (Jake Gyllenhaal) is part of a top-secret military operation..."
    );

    cy.contains("button", "SUBMIT").click();

    cy.wait(2000);

    cy.contains("CONGRATULATIONS!").should("exist");

    cy.get(".generic-portal-close-button").click({ force: true });

    cy.wait(500);

    cy.visit("http://localhost:5173/?query=source");
    cy.wait(1500);

    cy.get(".movie-title").should("exist").and("contain.text", "Source Code");

    cy.get(".movie-item").its("length").should("be.greaterThan", 0);
  });
});
