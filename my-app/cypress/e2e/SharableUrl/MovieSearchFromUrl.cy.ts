/// <reference types="cypress" />

describe("Search Movie From URL", () => {
  const verifySearch = (text) => {
    cy.get(".movie-title").each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((title) => {
          expect(title.toLowerCase()).to.include(text.toLowerCase());
        });
    });
  };

  it("should load movies containing 'prince'", () => {
    cy.visit("http://localhost:5173/?query=prince");
    cy.wait(2000);
    verifySearch("prince");
  });

  it("should load movies containing 'hunter'", () => {
    cy.visit("http://localhost:5173/?query=hunter");
    cy.wait(2000);
    verifySearch("hunter");
  });
});
