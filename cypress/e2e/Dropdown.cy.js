describe("Handle_dropdown", () => {
    it.skip("Dropdown_with_list", () => {
        cy.visit("https://practice.expandtesting.com/")

        cy.get("#search-input").type("Dropdown List")

        cy.get("#search-button").click()
        cy.get(".my-link.stretched-link").click()

        cy.get('#dropdown').select('Option 1').should('have.value', 'Option 1')

    })

    it.skip("Dropdown_with_search", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text', 'Italy')

    })

    it.skip("Suggestions_DropDown", () => {
        cy.visit("https://www.wikipedia.org/")

        cy.get("#search-input").type('Delhi')
        cy.get('.suggestions-dropdown').contains("Delhi University").click()


    })

    it("Dynamic_DropDown", () => {
        cy.visit("https://www.google.com/")

        cy.get("#APjFqb").type('Cypress Automation')
        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length', 13)
        
        cy.get('div.wM6W7d>span').each( ($el, index, $list) => {

            if($el.text() == "cypress automation tutorial")
            {
                cy.wrap($el).click()
            }
        })
        cy.get('#APjFqb').should('have.value', 'cypress automation tutorial')

    })
})