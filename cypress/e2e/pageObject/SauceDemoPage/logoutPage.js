const BASE_URL = 'https://www.saucedemo.com/';
const FILL_USERNAME = '#user-name';
const FILL_PASSWORD ='#password';
const LOGIN_BUTTON ='#login-button';


class LogOut{
    static visitHomepage(){
        cy.visit(BASE_URL);
        cy.url().should('include', 'saucedemo.com/')
    }

    static fillUsername(username){
        cy.get(FILL_USERNAME).clear().type(username)
    }

    static fillPassword(password){
        cy.get(FILL_PASSWORD).clear().type(password)
    }

    static clickLoginButton(){
        cy.get(LOGIN_BUTTON).click()
    }

    static verifySuccess(){
        cy.get('[data-test="title"]').should('have.text', 'Products')
        cy.url().should('include', '/inventory.html');
    }

    static click_sidebarButton(){
        cy.get('#react-burger-menu-btn').click()
    }

    static clickLogOutButton(){
        cy.get('#logout_sidebar_link').click()
    }

    static verifySuccessLogOut(){
        cy.url().should('include', '/');
        cy.get('.login_logo').should('have.text', 'Swag Labs')
        cy.screenshot('verifySuccessLogOut')
    }
}

export {LogOut}