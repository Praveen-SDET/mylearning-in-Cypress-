describe('MySuite scriptd',()=>{

    it("Clicking Links",()=>{
        // we need to add our custom command in the commands.js file and 
        //then we can use our custom command in the files 
        cy.visit("https://demo.nopcommerce.com/");

        //this is direct command witjout using custom commands 

    /*    cy.get("div.master-wrapper-page:nth-child(7) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.home-page div.page-body div.product-grid.home-page-product-grid div.item-grid div.item-box:nth-child(2) div.product-item div.details h2.product-title > a:nth-child(1)")
        .click();
        cy.get("div.master-wrapper-page:nth-child(7) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.product-details-page div.page-body div:nth-child(2) div.product-essential div.overview div.product-name > h1:nth-child(1)")
        .should('have.text','Apple MacBook Pro 13-inch')
    */
        // using Custom commands
    /*    cy.clickLink('Apple MacBook Pro 13-inch');
        cy.get("div.master-wrapper-page:nth-child(7) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.product-details-page div.page-body div:nth-child(2) div.product-essential div.overview div.product-name > h1:nth-child(1)")
        .should('have.text','Apple MacBook Pro 13-inch');
    */
        // overwrite 
        cy.clickLink('APPLE MACBOOK PRO 13-inch');
        cy.get("div.master-wrapper-page:nth-child(7) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.product-details-page div.page-body div:nth-child(2) div.product-essential div.overview div.product-name > h1:nth-child(1)")
        .should('have.text','Apple MacBook Pro 13-inch');

        //  i dont get a peoper definition for the over write method just to look some other web sites 
        
    })

    it.only('Login custom command',()=>{

        cy.visit("https://demo.nopcommerce.com/");
        cy.clickLink('Log in')
        cy.logininto("testing@gmail.com","test123");

        cy.get(".ico-account").should('have.text','My account');
    })
})