
describe('My First Test', () => {
    it('test1-Verify Title-Positive Test', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should('eq', 'OrangeHRM')
    })

    it('test1-Verify Title-Negative Test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM123')
      })
  })