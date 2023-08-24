import {data} from '../fixtures/checkoutFlowData.json'

describe('Data driven Mocks checkout', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log(err);
      return false;
    });
    cy.viewport(1280, 720);
  });

  data.scenarios.forEach((item, i) => {
      it(`Scenario ${i + 1}`, () => {
        cy.visit('/');
        cy.SelectCheckout(item.checkoutType);
        cy.SelectCustomerOption(item.customerOption);
        cy.SelectRegion(item.region);
        cy.SelectBank(item.bank);
        cy.EnterAccountDetails(item.name, item.bsb, item.accountNumber);

        // Verifies agreement/payment message
        if (item.agreementMessage === 'Your agreement is ready') {
          cy.get('[data-testid="provider-required-payer-action"]').contains(item.agreementMessage)
            .should('be.visible');

          cy.get('[data-testid="payment-completed"]', { timeout: 15000 }).contains(item.paymentMessage)
            .should('be.visible');
        } else {
          // Verifies failed agreement/payment message
          cy.get('[data-testid="payment-failed"]', { timeout: 15000 }).contains(item.paymentMessage)
            .should('be.visible');
        }
      });
    });
});


