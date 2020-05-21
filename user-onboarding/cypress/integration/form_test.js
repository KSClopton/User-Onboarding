describe('Form inputs', () => {
    it('can get the name input', () => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="name"]')
        .type('Kyle Clopton')
        .should('have.value', 'Kyle Clopton')
    })
    it('can get the email input', () => {
        // cy.visit('http://localhost:3000/')
        cy.get('input[name="email"]')
        .type('Kyle.clopton@gmail.com')
        .should('have.value', 'Kyle.clopton@gmail.com')
        
    })
    it('can get the password input', () => {
        // cy.visit('http://localhost:3000/')
        cy.get('input[name="password"]')
        .type("password")
        .should('have.value', 'password')
    })
    it('can check the terms of service checkbox', () => {
        // cy.visit('http://localhost:3000/')
        cy.get('[type="checkbox"][name="accept"]')
        .check()
    })
    it('click submit button ', () => {
        cy.get('button.submit')
          .should('not.be.disabled')
      })


})
describe('Form validation', () => {
    it('validates username correctly', () => {
      cy.visit('http://localhost:3000')
      cy.contains('Name is required').should('not.exist')
      cy.get('button.submit')
      .should('be.disabled')
    //   cy.contains('Name is required')
    })
})