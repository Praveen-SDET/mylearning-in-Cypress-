/// <reference types="Cypress" />




describe('MyTest Suite',()=>{
// dierct access 
 /*   it('Fixtures demo test',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('OrangeHRM.json')//specify the file type or OrangeHRM is enough// 
        .then( (data)=>{
            cy.get("input[name='username']").type(data.username);
            cy.get("input[name='password']").type(data.password);
            cy.get("button[type='submit']").click();

            cy.get("div.oxd-layout div.oxd-layout-navigation aside.oxd-sidepanel nav.oxd-navbar-nav div.oxd-sidepanel-body ul.oxd-main-menu:nth-child(2) li.oxd-main-menu-item-wrapper:nth-child(1) a.oxd-main-menu-item > span.oxd-text.oxd-text--span.oxd-main-menu-item--name")
            .should('have.text',data.expected)

        })

       
    })
*/
    let userdata;
    before( ()=>{
        cy.fixture('OrangeHRM').then( (data)=>{
            userdata=data;
        })
    })
    it('Using Hooks or used for multiple it blocks',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type(userdata.username);
            cy.get("input[name='password']").type(userdata.password);
            cy.get("button[type='submit']").click();

            cy.get("div.oxd-layout div.oxd-layout-navigation aside.oxd-sidepanel nav.oxd-navbar-nav div.oxd-sidepanel-body ul.oxd-main-menu:nth-child(2) li.oxd-main-menu-item-wrapper:nth-child(1) a.oxd-main-menu-item > span.oxd-text.oxd-text--span.oxd-main-menu-item--name")
            .should('have.text',userdata.expected)
        

    })


})