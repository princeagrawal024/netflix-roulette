import { COUNTER_INITIAL_VALUE } from "@/data/app-data";
import { APP_BASE_URL } from "testData/test-constants";
///<reference types="cypress"/>
describe("Counter Component", () => {
  it("should increment and decrement", () => {
    cy.visit(APP_BASE_URL);
    cy.get(".counter h2").should("have.text", COUNTER_INITIAL_VALUE);
    cy.contains("+").click();
    cy.get(".counter h2").should("have.text", COUNTER_INITIAL_VALUE + 1);
    cy.contains("-").click();
    cy.contains("-").click();
    cy.get(".counter h2").should("have.text", COUNTER_INITIAL_VALUE-1);
  });
});
