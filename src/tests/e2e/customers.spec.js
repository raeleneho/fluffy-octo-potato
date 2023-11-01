/// <reference types="cypress" />

// describe("customer list app", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000/");
//   });

// describe("Customers list app", () => {
//   it("loading passes", () => {
//     cy.visit("http://localhost:3000/");
//   });
// });

describe("Customer List End-to-End Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the list of customers with manager role when manager user type is selected", () => {
    cy.contains("Loading...").should("not.exist");

    cy.get('[type="radio"]').check("MANAGER", { force: true });

    // Check if at least one user card is displayed and role is matching selected role
    cy.get('[data-test-id="user-card"]')
      .should("be.visible")
      .contains("Manager");
  });
});
