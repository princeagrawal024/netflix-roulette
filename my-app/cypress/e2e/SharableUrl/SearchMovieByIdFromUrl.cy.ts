/// <reference types="cypress" />

describe("Search Movie By ID", () => {
  it("should load movie 10x10 for ID 505177", () => {
    cy.visit("http://localhost:5173/movies/505177");
    cy.wait(2000);

    cy.get(".md-title").invoke("text").should("contain", "10x10");
  });

  it("should load movie 'A Dog's Purpose' for ID 381289", () => {
    cy.visit("http://localhost:5173/movies/381289");
    cy.wait(2000);

    cy.get(".md-title").invoke("text").should("contain", "A Dog's Purpose");
  });
});
