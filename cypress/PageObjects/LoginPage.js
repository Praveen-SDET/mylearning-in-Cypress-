class LoginOrange
{
    setUsername(username)
    {
        cy.get("input[placeholder='Username']").type(username);
    }

    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password);
    }

    clickSubmit()
    {
        cy.get("button[type='submit']").click();
    }
    verifyLogin() {
        cy.get("div.oxd-layout div.oxd-layout-navigation header.oxd-topbar div.oxd-topbar-header div.oxd-topbar-header-title span.oxd-topbar-header-breadcrumb > h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should('have.text','Dashboard');
    }
}

export default LoginOrange;