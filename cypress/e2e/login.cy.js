///<reference types = 'cypress'/>

import {  Login } from "../support/login"

describe('Superadmin Login', () => {

    beforeEach('Main Landing Page', () => {
        cy.visit('http://192.168.50.161/login-master')
    })

        it('Login with dynamic value', () =>{

            const superadmin = new Login('super.admin@admin.com','SuperAdmin@123')
            superadmin.superAdminLogin()
   })
   
 });

 describe('Tenant Login', () => {

    beforeEach('Tenant ', () => {

        cy.visit('http://192.168.50.161/login-client')
    })

        it('Login with dynamic value', () =>{

            const client = new Login('872','Admin@1234','012')
            client.clientLogin()
   })
   
 })