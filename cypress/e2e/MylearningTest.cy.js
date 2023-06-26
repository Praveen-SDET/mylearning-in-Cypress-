describe('MylearningTest',()=>{
    it('test1',()=>{
        cy.visit("https://automationbookstore.dev/")
        cy.url().should('contains','automation')
        .should('include','automationbook')
        .and('eq','https://automationbookstore.dev/')
        .should('not.contains','Cred power playn')

        cy.title().should('eq','Automation Bookstore')
    })

    it('test2',()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('problem_user')

        cy.get('#user-name').should('have.value','problem_user')

        cy.get('[placeholder=\'Password\']').type('secret_sauce')
        cy.get('[type=\'Submit\']').click();
        cy.visit("sdf")
    })

})