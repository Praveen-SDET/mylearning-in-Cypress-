import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
/// <reference types="Cypress" />


describe("Mouse operations",()=>{
    // beforeEach("visit page",()=>{
    //     cy.visit("https://demo.opencart.com/")
    // })

    it("Mouseover",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('not.be.visible');
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
       // cy.get("")
       cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
       .should('be.visible')

    })

    it("Right Click",()=>{
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");
/*
        cy.get("span[class='context-menu-one btn btn-neutral']").trigger('contextmenu');
        cy.get(".context-menu-icon-edit > span").should('be.visible');
 */
        cy.get("span[class='context-menu-one btn btn-neutral']").rightclick();
        cy.get(".context-menu-icon-edit > span").should('be.visible');
        cy.get('.context-menu-icon-quit > span').click();
    })

    it("Double click",()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");

        cy.frameLoaded('#iframeResult')  // to load the iframe 

        // // approach 1 - using trigger method 
        // cy.iframe("#iframeResutl").find("button[ondblclick='myFunction()']").trigger('dblclick');
        // cy.iframe('#iframeResutl').find('#field2').should('have.value','Hello World!')

        //approach 2 
        cy.iframe("#iframeResutl").find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResutl').find('#field2').should('have.value','Hello World!')

        
    })
// to use drag and drop plugin we need to specify that ( require('@4tw/cypress-drag-drop') )in the starting of the spec file

    it("Drag and drop using plugin",()=>{
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');

        cy.get('#box6').drag('#box106',{force:true});  // force : true is used for element is hidden because of Css property
        
    })

    it.only("Page scroll",()=>{
        cy.visit("https://countries-ofthe-world.com/flags-of-the-world.html")
        //cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView();
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible');
        
        cy.get(':nth-child(2) > tbody > :nth-child(2) > :nth-child(1) > img').scrollIntoView();
        cy.get(':nth-child(2) > tbody > :nth-child(2) > :nth-child(1) > img').should('be.visible');
        cy.get("#footer").scrollIntoView().should('be.visible');
        
    })

})