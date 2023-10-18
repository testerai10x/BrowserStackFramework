/// <reference types="cypress" />

Cypress.Commands.add('Login', (email, password) => {
    cy.fixture('LoginElements').then((loginElements) => {
        cy.get(loginElements.username).type(email + '{enter}')
        cy.get(loginElements.password).type(password + '{enter}')
        cy.get(loginElements.loginButton).click()
    })
})