/// <reference types="Cypress" />


describe("handling iframes",()=>{

    it("approach1",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe=cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap);

        cy.wait(2000);
        iframe.clear().type('Welcome Home{ctrl+a}');
        cy.get("[aria-label='Bold']").click();

        cy.go('back');
    })
    it.only('Apperoach2',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe('#mce_0_ifr').clear().type('Welcome Home{ctrl+a}');
        // here i have created one command in the command.js file 
        //for further repeating the command of function (getIframe)
        cy.get("[aria-label='Bold']").click();
    })

   //npm install -D cypress-iframe (step 1 in terminal)
   // import 'cypress-iframe' (step 2)
   //in the it block Cy.visit
   // cy.frameloaded("__id_")  is for loading the i frame and again cy.iframe("id") to perform actions in the i frame  
})