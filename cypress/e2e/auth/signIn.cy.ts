/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
describe('Sign In E2E', () => {
  before(() => {
    cy.visit('/sign-in');
  });

  it('Login as exist user', () => {
    cy.findByLabelText('Email').type(Cypress.env('user'));
    cy.findByLabelText('Password').type(Cypress.env('password'));

    cy.findByRole('button', { name: /Login to account/i }).click();

    cy.url().should('include', '/dashboard');
  });
});
