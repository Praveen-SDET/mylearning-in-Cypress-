///reference <types="Cypress" />

describe('Select Drop down ',function(){
    
    it('zoho test1 with select tag',()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country').select('Algeria').should('have.value','Algeria')
    })

    it('dropdown without having select tag',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get('.select2-search__field').type('Gabon{enter}')     //previous way or this way we can click the enter button 
        cy.get("#select2-billing_country-container").should('have.text','Gabon')   //.type('{enter}')
        

    })
    it('Auto Suggestion dropdown',()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Praveen')
        cy.get(".suggestion-link").contains('Praveen Jordan').click()

    })

    it('Dynamic Suggestion dropdown',()=>{
        cy.visit("https://www.google.com/")
        
        cy.get("#APjFqb").type('cypress automation')
        cy.wait(3000)

        // cy.get('iv.wM6W7d>span').should('have.length',12)
        cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click();
            }
            

            cy.get("#APjFqb").should('have.value','cypress automation tool')
        
        })


    })
})