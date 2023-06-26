
describe('My suite ',()=>{

    it('Data Driven Test',()=>{
        cy.fixture("Orange2").then( (data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            data.forEach(userdata => {
                
                
                cy.wait(4000);

                cy.get("input[name='username']").type(userdata.username);
                cy.get("input[name='password']").type(userdata.password);
                cy.get("button[type='submit']").click();
                if(userdata.username=='Admin' && userdata.password=='admin123'){
                     cy.get("div.oxd-layout div.oxd-layout-navigation aside.oxd-sidepanel nav.oxd-navbar-nav div.oxd-sidepanel-body ul.oxd-main-menu:nth-child(2) li.oxd-main-menu-item-wrapper:nth-child(1) a.oxd-main-menu-item > span.oxd-text.oxd-text--span.oxd-main-menu-item--name")
                    .should('have.text',userdata.expected)
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible')
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()  }
                else { 
                    cy.get("div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-slot div.orangehrm-login-form div.orangehrm-login-error:nth-child(1) div.oxd-alert.oxd-alert--error div.oxd-alert-content.oxd-alert-content--error > p.oxd-text.oxd-text--p.oxd-alert-content-text")
                    .should('have.text',userdata.expected)}
            })
        })
    })

})