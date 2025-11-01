///<reference types="cypress"/>
describe('Counter Component', () => {
  it('should increment and decrement', () => {
    cy.visit('http://localhost:5173');
    cy.get('.counter h2').should('have.text', '100');
    cy.contains('+').click();
    cy.get('.counter h2').should('have.text', '101');
    cy.contains('-').click();
    cy.get('.counter h2').should('have.text', '100');
  });
});
