/// <reference types="cypress" />
import { SEARCHBAR_PLACEHOLDER, SEARCH_BTN_TEXT } from "@/data/app-data";
import { APP_BASE_URL } from "testData/test-constants";

describe("Movie Sorting Functionality", () => {
  beforeEach(() => {
    cy.visit(APP_BASE_URL);
    cy.get("input.search-input")
      .should("have.attr", "placeholder", SEARCHBAR_PLACEHOLDER)
      .clear()
      .type("prince");

    cy.contains("button", SEARCH_BTN_TEXT)
      .should("have.attr", "type", "submit")
      .click();
    cy.get(".movie-item").should("have.length.greaterThan", 3);
  });

  it("should sort the first 3 movies alphabetically by Title", () => {
    cy.get('[data-testid="sort-by-dropdown"]').select("title");
    cy.get(".movie-title").should("have.length.greaterThan", 3);

    cy.get(".movie-title").then(($titles) => {
      const first3 = $titles
        .toArray()
        .slice(0, 3)
        .map((el) => el.innerText.trim());
      const sorted = [...first3].sort((a, b) => a.localeCompare(b));

      cy.log("First 3 titles:", first3);
      expect(first3).to.deep.equal(sorted);
    });
  });
});
