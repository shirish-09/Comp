///<reference types = "cypress"/>

import { ClientLogin, SuperAdminLogin } from "../support/login"

describe('Superadmin Login', () => {

    beforeEach('Main Landing Page', () => {
        cy.visit('http://192.168.50.161/login-master')
    })

        it('Login with dynamic value', () =>{

            const user = new SuperAdminLogin('super.admin@admin.com','SuperAdmin@123')
            user.SuperAdmin()
   })
   
 })

 describe('Tenant Login', () => {

    beforeEach('Tenant ', () => {
        
        cy.visit('http://192.168.50.161/login-client')
    })

        it('Login with dynamic value', () =>{

            const user = new ClientLogin('012','872','Admin@1234')
            user.Tenant()
   })
   
 })