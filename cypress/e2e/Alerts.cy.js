describe('Alerts' , () => {

    //1) java Script Alert : It will have some text and an OK button
    it("JS_Alert", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();
        //method to trigger the event
        cy.on('window:alert', (t) =>{

            expect(t).to.contains('I am a JS Alert');
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')


    })

    //2) JavaScript Confirm Alert : It will have some text with OK and CANCEL buttons
    it("confirmation_Alert", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t) => {

            expect(t).to.contains('I am a JS Confirm');   
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')


    })

    it("confirmation_Alert_Cancel", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t) => {

            expect(t).to.contains('I am a JS Confirm');   
        })

        cy.on('window:confirm', () => false);

        cy.get('#result').should('have.text', 'You clicked: Cancel')


    })


    //3) JavaScript prompt Alert : It will have some text with a text box for user to input along with OK

    it("JS_Prompt_Alert", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
                
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click();

        cy.get('#result').should('have.text', 'You entered: welcome')


    })

    it("JS_Prompt_Alert_Cancel", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click();
        

        cy.on('window:prompt', () => false);

        cy.get('#result').should('have.text', 'You entered: null')
    })



    //4) Authenticated Alert :
    it("Authenticated_Alert", () => {

        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth:
                                                                        {
                                                                        username:"admin", 
                                                                        password:"admin"
                                                                        }
                                                                    } );
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
        
    })

    it.only("Authenticated_Alert2", () => {
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
    })

})