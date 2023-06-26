
describe('My suite',()=>{

    it('capture screen shot for specific',()=>{
        cy.visit("https://demo.opencart.com/")
       // cy.screenshot("homepage");
        cy.wait(4000);
        cy.get("img[title='Your Store']").screenshot('logo of page');


        // Automatically capture screen shot on failure and video only when execute through CLI
         
        cy.get("li:nth-child(7) a:nth-child(1)").click();   //cameras

        cy.get("div.container:nth-child(1) nav.navbar.navbar-expand-lg.navbar-light.bg-primary div.collapse.navbar-collapse ul.nav.navbar-nav li.nav-item:nth-child(4) > a.nav-link")
        .should('have.text','Camaras')

    })


})