/// <reference types="cypress" />

describe("Filter Genre From URL", () => {
  const verifyGenre = (genre) => {
    cy.get(".movie-item").each(($el) => {
      cy.wrap($el)
        .find(".movie-genres")
        .invoke("text")
        .then((text) => {
          expect(text.toLowerCase()).to.include(genre.toLowerCase());
        });
    });
  };

  it("should load only DOCUMENTARY movies", () => {
    cy.visit("http://localhost:5173/?genre=DOCUMENTARY");
    cy.wait(2000);
    verifyGenre("DOCUMENTARY");
  });

  it("should load only COMEDY movies", () => {
    cy.visit("http://localhost:5173/?genre=COMEDY");
    cy.wait(2000);
    verifyGenre("COMEDY");
  });
});
