let pricetage = "price"

it('Using then', () => {
    
    cy.visit('https://www.demoblaze.com/index.html')
    // cy.get('#login2').click()
    // cy.get('#loginusername').type('Shirish Mainalii')
    // cy.get('#loginpassword').type('Shirish@1234')

    cy.get('.btn-primary').eq(2).then((letscheck)=>{
        expect(letscheck).to.have.text('Log in')
        expect(letscheck).exist
        expect(letscheck.text().length).to.be.eq(6)
    })
    
});


it('GET', () => {
    cy.request({
        method : "GET",
        url : "https://jsonplaceholder.typicode.com/comments"

    }).then((Response)=>{
        expect(Response.status).to.eq(200)
        expect(Response.body[3].id).to.eq(4)
        expect(Response.body[13].name).to.eq('et officiis id praesentium hic aut ipsa dolorem repudiandae')

    })

});

it('GET', () => {
    
    cy.request({
        method : "GET",
        url : 'https://api.demoblaze.com/entries'

    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.Items[0].cat).to.eq("phone")
        expect(response.body.Items[5].price).to.eq(320)
    })
});
/////////////////////////////Fifth Class////////////
it('post ', () => {
    cy.request({
        method: "POST",
        url: "https://api.demoblaze.com/login",
        body: {
            username : "Shirish Mainali",
            password : "$hirish@1234"
        }
    

    }).then((response) => {
        expect(response.status).to.eq(200)
    })
});

it('get after post ', () => {
    cy.request({
        method : "GET",
        url : "https://api.demoblaze.com/entries"
    }).then((response) =>{
       Cypress.env('price',response.body.Items.price)
       const pricetag = Cypress.env('price')
    })
});


it.only(' get  ', () => {
    const pricetag = Cypress.env('price')
    cy.request({
        method : "GET",
        url : "https://api.demoblaze.com/entries"
    }).then((response) => {
        expect(response.body.Items[1].price).to.eq(820);
    })
});