describe("assertions", () => {
    it ("implicit_assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // Implicit assertions keywords are "Should" & "and"
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrm')

    })

    it("implicit_assertions1", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')

        cy.title().should('include','Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible') //Logo visible or not?
        .and('exist')// Logo exist or not ?

        cy.xpath("//a").should('have.length', '5') // Assertion to check the number of links
    })

    it("implicit_Assertions2", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')
    })

    it("explicit_assertions", () => {
        // There are Expect(BDD) and Assert(TDD) keywords in this 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="nikhil deshpande"; //Ways to add BDD Assertions
        cy.get(".oxd-userdropdown-name").then( (x) => {
            let actName = x.text()
            expect(actName).to.equal(expName) // BDD Assertion 
            assert.equal(actName, expName)    // TDD Assertion


        })
    })
})