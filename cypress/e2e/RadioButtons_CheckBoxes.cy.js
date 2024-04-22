describe("CheckUI_Elements", () => {
    it("CheckingRadioButtons", () => {
        cy.visit("https://practice.expandtesting.com/")

        cy.get("#search-input").type("Radio Buttons")

        cy.get("#search-button").click()
        cy.get(".my-link.stretched-link").click()
        
        //Check if the Radio button is visible
        cy.get("[id='red']").should('be.visible')
        cy.get("[id='red']").check().should('be.visible')

        // Check if the radio button is checked, validation post selection
        cy.get("[id='red']").check().should('be.checked')
        cy.get("[id='basketball']").should('be.visible')
        cy.get("[id='basketball']").click()
    })

    it("Checking Check Boxes", () => {
        cy.visit("https://practice.expandtesting.com/")

        cy.get("#search-input").type("Check Boxes")
        cy.get("#search-button").click()
        cy.get(".my-link.stretched-link").click()
        //Check the visibility of the element
        cy.get("[id='checkbox1']").should('be.visible')

        //select the single check box and ensure it is checked
        cy.get("[id='checkbox1']").check().should('be.checked')

        //uncheck the single check box and ensure it is unchecked
        cy.get("[id='checkbox2']").uncheck().should('not.be.checked')

        //To select all the check boxes, we need to use a common locator
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')


        //cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        //cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})