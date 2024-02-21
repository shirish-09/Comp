export class SuperAdminLogin{
    
    UserName;
    Password;

    constructor(UserName,Password){
        this.User = UserName;
        this.Pass = Password;
    }

    SuperAdmin(){
        cy.get('.px-3').eq(0).type(this.User)
        cy.get('.px-3').eq(1).type(this.Pass)
        cy.get('.w-full').eq(7).click()

    }
}

export class ClientLogin{
    
    Clientcode;
    UserName;
    Password;

    constructor(Clientcode,UserName,Password){
        this.code = Clientcode;
        this.User = UserName;
        this.Pass = Password;
    }
    Tenant(){
        cy.get('.px-3').eq(0).type(this.code)
        cy.get('.h-screen').eq(1).click()
        cy.get('.px-3').eq(1).type(this.User)
        cy.get('.px-3').eq(2).type(this.Pass)
        cy.get('.w-full').eq(7).click()

   }
}