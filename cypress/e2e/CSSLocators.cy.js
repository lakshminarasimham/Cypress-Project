describe('CSSLocators', () => {
    it("csslocators", () => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")

        cy.get("[name='username']").type("larvapall")

        cy.get("[name='password']").type("Para123")

        cy.get("[type='submit']").click()

        //cy.get(".leftmenu").contains("Solutions")

        cy.xpath("//ul[@class='leftmenu']/li").should('have.length', 6)
    })

    it("chained xpath", () => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")

        cy.get("[name='username']").type("larvapall")

        cy.get("[name='password']").type("Para123")

        cy.get("[type='submit']").click()
        
        cy.xpath("//ul[@class='leftmenu']").xpath("./li").should('have.length', 6)
    })
})
