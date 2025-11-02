/// <reference types="cypress" />
import { SEARCHBAR_PLACEHOLDER, SEARCH_BTN_TEXT } from "@/data/app-data";
import { APP_BASE_URL } from "testData/test-constants";

describe("SearchBar Component", () => {
  it("should display correct placeholder and trigger search button", () => {
    cy.visit(APP_BASE_URL);
    cy.get("input.search-input")
      .should("have.attr", "placeholder", SEARCHBAR_PLACEHOLDER);
    cy.contains("button", SEARCH_BTN_TEXT)
      .should("have.attr", "type", "submit")
      .click();
  });
});
