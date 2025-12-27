/// <reference types="cypress" />
import {
  SEARCHBAR_PLACEHOLDER,
  SEARCH_BTN_TEXT,
  GENRES,
} from "@/data/app-data";
import { APP_BASE_URL } from "testData/test-constants";

describe("SearchBar + Genre + Sort Control Flow", () => {
  const search = (text) => {
    cy.get("input.search-input").clear().type(text);
    cy.contains("button", SEARCH_BTN_TEXT).click();
    cy.wait(1500);
  };

  const verifyMoviesExist = () => {
    cy.get(".movie-item").its("length").should("be.greaterThan", 0);
    cy.get(".movie-title").should("exist");
  };

  const changeSortBy = () => {
    // Title -> Release Date -> Title
    cy.get('[data-testid="sort-by-dropdown"]')
      .select("release_date")
      .wait(800)
      .select("title")
      .wait(800);
  };

  it("should perform search, then search again, switch genres and sort each time", () => {
    cy.visit(APP_BASE_URL);

    // Initial placeholder check
    cy.get("input.search-input").should(
      "have.attr",
      "placeholder",
      SEARCHBAR_PLACEHOLDER
    );

    // SEARCH #1: "crime"
    search("crime");
    verifyMoviesExist();

    // SEARCH #2: "the"
    search("the");
    verifyMoviesExist();

    // Iterate all genres one by one
    GENRES.forEach((genre) => {
      cy.log(`Testing Genre: ${genre}`);

      // Click genre link
      cy.contains("a.nav-link", genre).click();
      cy.wait(1000);

      verifyMoviesExist();

      // Change sort order after selecting this genre
      changeSortBy();
    });
  });
});
