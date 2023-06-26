
/// <reference types="Cypress" /> 

describe("Tables Handlling",()=>{
    beforeEach("Login FUnctionalities",()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type('demo');
        cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click();

        cy.get("button[class='btn-close']").click();

        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:first-child").click();

    })
    it('number of Rows and Columns',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')

    })
    it('Check cell data from specific rows and column',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(4)").should('have.text','Default');
        // or we could use .should('contains','___')
    })
    it.skip('Read all the rows and colums data in the first page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
         .each( ($row, index, $rows)=>{
            cy.wrap($row).within( ()=>{

                cy.get("td").each( ($col, index, $cols)=>{ 
                    cy.log($col.text());
                    })
            })
         })
        
    })
    it.only('Pagination of tables',()=>{
        /*cy.get("div.container-fluid div.row div.col-lg-9.col-md-12 div.card div.card-body form:nth-child(1) div.row > div.col-sm-6.text-end:nth-child(2)").then( (e)=>{
            let mytext=e.text();
            let totalPages=mytext.substring( mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
            cy.log("Total number of Pages in the table is ======>"+totalPages);  */

            let totalPages=5;
            for(let p=1;p<=totalPages;p++)
            {
                if(totalPages>1){
                    cy.log("Active Page number is ===>"+p);

                    cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                    cy.wait(2000);

                    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each( ($row, index, $rows)=>{
                        cy.wrap($row).within( ()=>{
                            cy.get('td:nth-child(3)').then( (e)=>{
                                cy.log( e.text());// this will print Status in the table
                            })
                        })
                    })

                     
                }

            }
        })

})