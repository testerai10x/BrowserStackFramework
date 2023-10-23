Cypress.Commands.add('BuyIphone', () => {
    cy.fixture('ShopElements').then((shopElements) => {
        cy.get(shopElements.appleElements.iphone12).click()
        cy.get(shopElements.webElements.buyButton).click()
        cy.get(shopElements.shippingInfo.firstName).type("test")
        cy.get(shopElements.shippingInfo.lastName).type("test")
        cy.get(shopElements.shippingInfo.address).type("test")
        cy.get(shopElements.shippingInfo.state).type("test")
        cy.get(shopElements.shippingInfo.postalcode).type("test")
        cy.get(shopElements.shippingInfo.checkoutButton).click()
    })
})