describe("Handle_Table", () => {

    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']"). click();
        
        cy.get(".btn-close").click() // To close the pop up window
        cy.get("#menu-customer>a").click() //Click on the main customer menu item
        cy.get("#menu-customer>ul>li:first-child").click() // Click on the sub customer menu item
    })

    it("Check number of Rows & Columns", () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7');

    })

    it("Check Cell data from a Specific Row & Column", () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
            .contains("gorankrezic90@gmail.com");

    })
    
    it("Read all rows and Columns in the first page", () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {

            cy.wrap($row).within(() => {

                cy.get("td").each(($col, index, $cols) => {

                    cy.log($col.text());
                        
                })

            })
        })
        
    })

    it.only("Pagination", () => {

        /*let totalPages;
        //Find total number of pages in the table
        cy.get(".col-sm-6.text-end").then ( (e) => {

            let mytext = e.text();
            totalPages = mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
            cy.log("Total number of Pages in the table are ==>" + totalPages);
        })*/

        let totalPages = 5;
        for (let p=1; p<=totalPages; p++)
        {
            if(totalPages>1)
            { 
                cy.log("Active Page is ===> " +p );

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000);
                
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each( ($row, index, $rows) => {
                    cy.wrap($row).within ( () => {
                        cy.get('td:nth-child(3)').then((e) => {
                            cy.log(e.text());
                        })
                    })

                })
            }
        }



        
    })
})