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

  it('Standard Login', function(){
    
    // Login with username and password
    cy.Login(this.data.username.demo, this.data.password.pass)
    cy.get(this.data.message.demo_success).should('be.visible')

  })

  // Test for invalid username
  it('Locked Account Login', function(){
    cy.Login(this.data.username.lock_user, this.data.password.pass)
    cy.get(this.data.message.error).should('be.visible')

  })
})