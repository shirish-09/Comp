describe('Login', () => {

    beforeEach(() => {
        cy.visit('/')
        
    });

    it.only('Check when valid credentials is provided', () => {
        
        cy.url().should('include','/login-client')
        
        cy.location('href').should('include','/login-client')
        //Finding child div
        cy.get('.w-full').find('.text-sm').should('exist')

        //Logo
        cy.get('.object-contain').should('exist')
       
        cy.get('.text-sm').eq(2).type('012',{delay:700})
        cy.get('.text-sm').eq(4).type('prakriti@yopmail.com')
        cy.get('.text-sm').eq(6).type('Test@123',{delay:50})
        cy.get('.right-3').eq(2).click()
        cy.get('.w-full').eq(8).click()
        cy.get('.text-start ').eq(0).should('exist').and('have.text','Comprehensive Reconciliation System',{delay:500})

        cy.go('back',{delay:500})
       // cy.pause()
        cy.go('forward')
        
       
        
    });

    it('Check when invalid Client Code is provided', () => {

        cy.get('.text-sm').eq(2).type('01',{delay:700})
        cy.get('.w-full').eq(8).click()
        //Capturing toast message 
        cy.get('.text-start').should('be.visible')
        cy.get('.text-start').should('contain','Invalid Client')
    
    });

    it('Check when invalid username and password is provided', () => {

        cy.get('.text-sm').eq(2).type('012',{delay:700})
        //Using Alias
        cy.get('[name="username"]').as('User Name')
        cy.get('@User Name').type("abcd@yopmail.com")
        cy.get('.text-sm').eq(6).type('Test@123',{delay:50})
        cy.get('.w-full').eq(8).click()
        cy.get('.text-start').eq(1).should("be.visible")
        cy.get('.text-start').eq(1).should('contain','Invalid username or password')
    });
    

    afterEach(() => {

//Logout
       cy.get('.text-start').eq(3).click()
       cy.get('.text-start').eq(8).click()
       

    });
});