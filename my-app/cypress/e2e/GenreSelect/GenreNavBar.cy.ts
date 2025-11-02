import { GENRES } from '@/data/app-data';
import { APP_BASE_URL } from "testData/test-constants";
///<reference types="cypress"/>

describe("GenreNavBar component", () => {
  beforeEach(() => {
    cy.visit(APP_BASE_URL);
  });

  it("should select the genre on click", () => {
    for (let i = 0; i < GENRES.length; i++) {
      const currentGenre = GENRES[i];
      cy.contains("a", currentGenre).click().should("have.class", "active");
    }
  });
});
