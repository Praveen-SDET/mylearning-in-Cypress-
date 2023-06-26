/// <reference types="Cypress" />

describe('File Writing and Reading',()=>{
    it('write a file' , function(){
        cy.writeFile('sample.txt','Hi this is a message!')
    })
})