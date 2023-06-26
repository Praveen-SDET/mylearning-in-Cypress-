/// <reference types="Cypress" />

describe("Alert Samples",()=>{

it('Simple Alert in JS',function(){
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    cy.get("button[onclick='jsAlert()']").click()
    cy.on('window:alert',(p)=>{
        expect(p).to.contains("I am a JS Alert");
    })
    // alert window automatically closed by cypress 
    cy.get("#result").should('have.text','You successfully clicked an alert')
})

it('Confirm Alert - Ok ',()=>{
    
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.contains('Click for JS Confirm').click();

    cy.on('window:alert',(t)=>{
        expect(t).to.contains("I am a JS Confirm"); 
        // the above two line of code is not neccessary for handling simple alert 
        //cypess will automatically accept the simple alert just for verification of simple alert i have written this 
    })
    cy.get("#result").should('have.text','You clicked: Ok')
})

// for clicking cancel only we are in need of the another on block


it('Confirm Alert - Cancel ',()=>{
    
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.contains('Click for JS Confirm').click();

    cy.on('window:confirm',(r)=>{
        expect(r).to.contains("I am a JS Confirm"); 
    })
    cy.on('window:confirm',()=>false);  // cypress close the alert by clicking cancel button 
    //by default it will be true we don't want to mention that 

    cy.get("#result").should('have.text','You clicked: Cancel')

})


it('Confirm Alert - Cancel ',()=>{
    
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    cy.window().then( (win)=>{
        cy.stub(win,'prompt').returns('welcome'); 
    })
    cy.get("button[onclick='jsPrompt()']").click()

    cy.on('window:prompt',()=>false);
    //cypress will automatically close prompt alert- it will use OK button - by default


   // cy.get("#result").should('have.text','You entered: welcome')
   cy.get("#result").should('have.text','You entered: null')

})

it.only('Auenticated Alert',()=>{
//     // method or approach 1 below
    
//     cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: {username:"admin",password:"admin"}
// });
// cy.get("div[class='example'] p").should('have.contain',"Congratulations!");

// method 2 or approach 2

cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
cy.get("div[class='example'] p").should('have.contain',"Congratulations!");

})


})