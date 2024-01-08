///<reference types = "cypress"/>


// describe('Login', () => {

//     beforeEach(() => {
//         cy.visit('/')
        
//     });

//     it('Check when valid credentials is provided', () => {
        
//         cy.url().should('include','/login-client')
        
//         cy.location('href').should('include','/login-client')
//         //Finding child div
//         // cy.get('.w-full').find('.text-sm').should('exist')

//         //Logo
//         cy.get('.object-contain').should('exist')
       
//         cy.get('.text-sm').eq(2).type('012',{delay:700})
//         cy.get('.text-sm').eq(4).type('prakriti@yopmail.com')
//         cy.get('.text-sm').eq(6).type('Test@123',{delay:50})
//         cy.get('.right-3').eq(2).click()
//         cy.get('.w-full').eq(8).click()
//         cy.get('.text-start ').eq(0).should('exist').and('have.text','Comprehensive Reconciliation System',{delay:500})

//         cy.go('back',{delay:500})
//        // cy.pause()
//         cy.go('forward')
        
       
        
//    });

//     it('Check when invalid Client Code is provided', () => {

//         cy.get('.text-sm').eq(2).type('01',{delay:700})
//         cy.get('.w-full').eq(8).click()
//         //Capturing toast message 
//         cy.get('.text-start').should('be.visible')
//         cy.get('.text-start').should('contain','Invalid Client')
    
//     });

//     it('Check when invalid username and password is provided', () => {

//         cy.get('.text-sm').eq(2).type('012',{delay:700})
//         //Using Alias
//         cy.get('[name="username"]').as('User Name')
//         cy.get('@User Name').type("abcd@yopmail.com")
//         cy.get('.text-sm').eq(6).type('Test@123',{delay:50})
//         cy.get('.w-full').eq(8).click()
//         cy.get('.text-start').eq(1).should("be.visible")
//         cy.get('.text-start').eq(1).should('contain','Invalid username or password')
//     });
    

//     afterEach(() => {

// //Logout
//        cy.get('.text-start').eq(3).click()
//        cy.get('.text-start').eq(8).click()
       

//     });
// });

//------------------------------------- Third class----------------------------------------------------------

const crsURl = "192.168.50.161/login-client"
const clientcode = Cypress.env('clientcode')
const username = Cypress.env('username')
const password = Cypress.env('password')

    it('const,network interceptor(json),within,dropdown,environment,photo-attach', () => {

       
       
       //pre login network interceptor (json)
        cy.intercept('GET','http://192.168.50.161/login-client').as('prelogin')
        // cy.visit(Cypress.env('staging_url'))
       
       //using const
        cy.visit(crsURl)

       
        cy.get('[name= "clientCode"]').type(clientcode)
        cy.get('.right-3').eq(2).click()
        cy.get('[name= "username"]').type(username)
        cy.get('[name= "password"]').type(password)
        cy.get('.w-full').eq(8).click()
        cy.wait('@prelogin')

        //cy.intercept('POST','http://192.168.50.161:8070/login').as('postlogin')
        //cy.wait('@postlogin')

//dropdown
        cy.get('.text-start').eq(5).click()
        cy.get('.css-9jkw19').eq(0).click().type('esewa')


    
        // cy.get('.mt-6').eq(0).within(()=>{

        //     cy.get('.px-3').should('exist')
        //     cy.get('.w-full').should('exist')
           
    //  })

    })


      
    

       


    

  