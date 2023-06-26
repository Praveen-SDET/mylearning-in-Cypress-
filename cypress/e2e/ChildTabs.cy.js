/// <reference types="Cypress" />

describe('Handling Child Tabs',()=>{
    //approach 1 

    //removing Target attribute to run in the same window
    it("Child element handling removing target",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("div.example>a").invoke('removeAttr','target').click();

        cy.url().should('contains','https://the-internet.herokuapp.com/windows/new')
        // above line is for verification of the url opened 
    
        cy.wait(3000);
        cy.go('back');
        
    })
    it.only("Child element handling storing href in an object ",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("div.example>a").then((e)=>{
            let url = e.prop('href');
            cy.visit(url);
        })

        cy.url().should('contains','https://the-internet.herokuapp.com/windows/new')
        // above line is for verification of the url opened and this method is only supported in main domain are same 
        //sub domain can be anything but main domain must be the same to execute this method.f
        
        cy.wait(3000);
        cy.go('back');  // back to parent window 
        
    })

})