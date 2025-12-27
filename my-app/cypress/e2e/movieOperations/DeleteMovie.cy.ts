describe("Delete Movie Flow", () => {
  it("should delete 'Prince' movie", () => {
    cy.visit("http://localhost:5173/?query=Prince");
    cy.wait(2000);

    cy.get(".movie-item").should("exist");

    cy.contains(".movie-title", "Prince")
      .parents(".movie-item")
      .find("button.delete-btn")
      .click({ force: true });

    cy.wait(1000);

    cy.contains("button", "CONFIRM").click({ force: true });

    cy.wait(2000);
    cy.contains("Success").should("exist");
    cy.get(".generic-portal-close-button").click({ force: true });

    cy.wait(1000);

    cy.visit("http://localhost:5173/");
    cy.wait(1000);
    cy.get("input.search-input").clear().type("Prince");
    cy.contains("button", "SEARCH").click();

    cy.wait(2000);
  });
});
