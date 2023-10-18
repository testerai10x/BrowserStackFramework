/// <reference types="cypress" />

describe('Login', () => {

  beforeEach(function(){

    cy.fixture('LoginData').then((data) => {
      this.data = data
    })

    cy.visit('https://bstackdemo.com/signin')

  })


  it('Standard Login', function(){
    
    cy.Login(this.data.username.demo, this.data.password.pass)
    cy.get(this.data.message.demo_success).should('be.visible')

  })
})