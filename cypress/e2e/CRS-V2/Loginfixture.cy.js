const neatCsv = require("neat-csv");

it.only('Login with one data in fixture', () => {

    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.fixture('sh')
    .then (data=>{
    cy.get('#loginusername').type(data.Username)
    cy.get('#loginpassword').type(data.Password)
    cy.get('.btn-primary').eq(2).click()
    cy.wait(200)
    cy.get(data.abc).should('contain',data.message)
})
});

it('Login with multiple data in fixture', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.fixture('response/multiple')
    .then (data=>{
        data.forEach(user => {
            cy.get('#loginusername').type(user.Username)
            cy.get('#loginpassword').type(user.Password)
            
           // cy.get('.btn-primary').eq(2).click()
        });
    })
    
});

it('Login with multiple data with array in fixture', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.fixture('response/inside')
    .its('data2')
    .then (data=>{
        data.forEach(user => {
            cy.get('#loginusername').type(user.Username)
            cy.get('#loginpassword').type(user.Password)
           // cy.get('.btn-primary').eq(2).click()
        });
    });
});


// Using CSV

it('Login using csv file', () => {
   
    cy.fixture('response/test.csv')
    .then('csv')
    .then (data=>{
        data.forEach(user => {
            cy.visit('https://www.demoblaze.com/')
            cy.get('#login2').click()
            cy.get('#loginusername').type(user.Username)
            cy.get('#loginpassword').type(user.Password)
           // cy.get('.btn-primary').eq(2).click()
        });
    });
});