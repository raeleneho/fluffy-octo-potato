/// <reference types="cypress" />
import { ENDPOINT } from '../../../api/CustomerClient';
import mockData from './mock-data.json'
describe("Customers list dashboard display", () => {
  beforeEach(() => {
    cy.intercept(`${ENDPOINT}*`, {
      statusCode: 200,
      body: mockData,
    })
    cy.visit("http://localhost:3000");
  });

  it("should display the list of customers with manager role when manager user type is selected", () => {
    cy.contains("Loading...").should("not.exist");

    cy.get('[type="radio"]').check("MANAGER", { force: true });

    cy.get('[data-test-id="user-card"]')
      .should("be.visible")
      .contains("Manager");
    
  });

  it("should display the list of customers with admin role when the user type is selected", () => {
    cy.contains("Loading...").should("not.exist");

    cy.get('[type="radio"]').check("ADMIN", { force: true });

    cy.get('[data-test-id="user-card"]').should("be.visible").contains("Admin");
  });
});
