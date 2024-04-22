import('cypress-file-upload');


describe('FileUpload', () => {

    it('Single_FileUpload', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile('Test1.png');
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })


    it.only('Single_FileUpload_Rename', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath:'Test3.pdf'}, {fileName:'myfile.pdf'});
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })
})