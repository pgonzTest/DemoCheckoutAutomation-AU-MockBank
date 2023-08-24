
Cypress.Commands.add('SelectCheckout', (menuValue) => {
    cy.get('button').contains('Simulation', {timeout: 10000}).click({ force: true });
    cy.get('a[role="menuitem"]').contains(menuValue).click(); 
    cy.get('[data-testid="provider-list"]').should('be.visible'); // expects bank providers list is visible
});

Cypress.Commands.add("SelectCustomerOption", (option) => {
    cy.get('div.grid-cols-1.grid-rows-3')
      .contains('label', option)
      .find('input[type="radio"]').first()
      .check();
});

Cypress.Commands.add("SelectRegion", (country) => {
    cy.get('select').select(country);
});

Cypress.Commands.add("SelectBank", (bankName) => {
    cy.get('[data-testid="provider-button"]').contains(bankName).click();
    cy.get('button').contains('Change').should('be.visible');
    let providerName = bankName + ' ' + 'AUD';
    cy.get('#provider-name').should('contain', providerName);
});

Cypress.Commands.add("EnterAccountDetails", (accountName, bsb, accountNum) => {
    cy.get('#ACCOUNT_NAME').type(accountName).blur();
    cy.get('#BSB_NUMBER').type(bsb).blur();
    cy.get('#ACCOUNT_NUMBER').type(accountNum).blur();
    cy.get('button').contains('Continue').should('be.not.disabled');
    cy.get('button').contains('Continue').click();
})



  