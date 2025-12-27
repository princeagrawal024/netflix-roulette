/// <reference types="cypress" />

describe("Sort Movie By Release Date", () => {
  const verifyDropdownReleaseDate = () => {
    cy.get("[data-testid='sort-by-dropdown']").should(
      "have.value",
      "release_date"
    );
  };

  it("should have sort by release date selected for COMEDY", () => {
    cy.visit("http://localhost:5173/?sortBy=release_date&genre=COMEDY");
    cy.wait(2000);
    verifyDropdownReleaseDate();
  });

  it("should have sort by release date selected for HORROR", () => {
    cy.visit("http://localhost:5173/?sortBy=release_date&genre=HORROR");
    cy.wait(2000);
    verifyDropdownReleaseDate();
  });
});
