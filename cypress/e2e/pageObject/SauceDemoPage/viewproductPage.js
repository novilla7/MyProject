const BASE_URL = 'https://www.saucedemo.com/';
const FILL_USERNAME = '#user-name';
const FILL_PASSWORD ='#password';
const LOGIN_BUTTON ='#login-button';

// test case view product
class ViewProduct{
    static visitHomepage(){
        cy.visit(BASE_URL);
        cy.url().should('include','saucedemo.com/')
    }

    static fillUsername(username){
        cy.get(FILL_USERNAME).clear().type(username);
    }

    static fillPassword(password){
        cy.get(FILL_PASSWORD).clear().type(password);
    }

    static clickLoginButton(){
        cy.get(LOGIN_BUTTON).click();
    }

    static verifySuccess(){
        cy.get('[data-test="title"]').should('have.text', 'Products');
    }

    static clickItem(){
        cy.contains('Sauce Labs Backpack').should('be.visible').click()
    }

    static verifyViewProduct(){
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.contains('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.').should('be.visible')
        cy.get('.inventory_details_price').should('be.visible')
        cy.screenshot('verifyViewProduct')
    }
}

export {ViewProduct}