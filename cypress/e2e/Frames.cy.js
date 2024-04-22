import 'cypress-iframe'

describe('Handling_Frames', () => {

    it('approach1_Frames', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type("Welcome {ctrl+a}");
        cy.wait(3000);

        cy.get('[aria-label="Bold"]').click();

    })

    it('Custom_command', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe("#mce_0_ifr")
            .clear()
            .type("Welcome {ctrl+a}");
        
        cy.wait(3000);

        cy.get('[aria-label="Bold"]').click();
    })

    it('Cypress_Iframe_Plugin', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded("#mce_0_ifr"); //This will load the frame
        cy.wait(1000)
        cy.iframe("#mce_0_ifr").clear().type("LuckyArvapalli {ctrl+a}")
        cy.wait(1000)
        cy.get('[aria-label="Bold"]').click();

    })
})
