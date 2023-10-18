/// <reference types="cypress" />

describe('Login', () => {

  beforeEach(function(){

    // Load data from fixture file
    cy.fixture('LoginData').then((data) => {
      this.data = data
    })

    // Visit the URL
    cy.visit('https://bstackdemo.com/signin')

  })

  // Test for valid username
  it('TC 01 - Standard Login', function(){
    
    // Login with username and password
    cy.Login(this.data.username.demo, this.data.password.pass)
    cy.get(this.data.message.demo_success).should('be.visible') // Success message should be visible

  })

  // Test for invalid username
  it('TC 02 - Locked Account Login', function(){

    // Login with username and password
    cy.Login(this.data.username.lock_user, this.data.password.pass)
    cy.get(this.data.message.error).should('be.visible') // Error message should be visible

  })
})