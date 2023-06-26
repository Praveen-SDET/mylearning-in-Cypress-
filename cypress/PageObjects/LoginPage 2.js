class LoginOrange
{
    txtUsername="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    lblmsg="div.oxd-layout div.oxd-layout-navigation header.oxd-topbar div.oxd-topbar-header div.oxd-topbar-header-title span.oxd-topbar-header-breadcrumb > h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    setUsername(username)
    {
        cy.get(this.txtUsername).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }
    verifyLogin() {
        cy.get(this.lblmsg).should('have.text','Dashboard');
    }
}

export default LoginOrange;