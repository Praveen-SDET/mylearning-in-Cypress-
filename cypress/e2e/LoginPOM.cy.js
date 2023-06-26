 //  import LoginOrange from "../PageObjects/LoginPage";
import LoginOrange from "../PageObjects/LoginPage 2";

describe('Page Object ref',()=>{
    // normal approach 
    it.skip('LoginTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[type='submit']").click();
        cy.get("div.oxd-layout div.oxd-layout-navigation header.oxd-topbar div.oxd-topbar-header div.oxd-topbar-header-title span.oxd-topbar-header-breadcrumb > h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should('have.text','Dashboard');
    })

    // Login with POM
    it('Logwith',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const ln=new LoginOrange();
        ln.setUsername("Admin");
        ln.setPassword("admin123");
        ln.clickSubmit();
        ln.verifyLogin();
    })
    // Login using POM with fixture 
    it.only('Logwith',()=>{
        cy.fixture('Orange2').then( (data) =>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            data.forEach(element => {
                cy.wait(3000);
                const ln=new LoginOrange();
                ln.setUsername(element.username);
                ln.setPassword(element.password);
                ln.clickSubmit();
                if(element.username=='Admin' && element.password=='admin123'){
                //     cy.get("div.oxd-layout div.oxd-layout-navigation aside.oxd-sidepanel nav.oxd-navbar-nav div.oxd-sidepanel-body ul.oxd-main-menu:nth-child(2) li.oxd-main-menu-item-wrapper:nth-child(1) a.oxd-main-menu-item > span.oxd-text.oxd-text--span.oxd-main-menu-item--name")
                //    .should('have.text',userdata.expected)

                   ln.verifyLogin();

                   cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                   cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible')
                   cy.get(':nth-child(4) > .oxd-userdropdown-link').click()  }
               else { 
                   cy.get("div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-slot div.orangehrm-login-form div.orangehrm-login-error:nth-child(1) div.oxd-alert.oxd-alert--error div.oxd-alert-content.oxd-alert-content--error > p.oxd-text.oxd-text--p.oxd-alert-content-text")
                   .should('have.text',element.expected)}
                
            });
        })

        
       
    })
})