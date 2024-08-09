
const BASE_URL = "https://automationexercise.com/";

// Test Case Log Out Account
class Logout_account{
    static visitHomepage() {
        // cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
    }

    static clickLoginMenu() {
        cy.get('a[href="/login"]').click();
        cy.url().should('include', '/automationexercise.com/login')
    }

    static fillLoginForm_email(email) {
        cy.get('[data-qa="login-email"]').clear().type(email);
    }

    static fillLoginForm_password(password) {
        cy.get('[data-qa="login-password"]').clear().type(password);
    }

    static clickLoginButton() {
        cy.get('[data-qa="login-button"]').click();
        cy.url().should('include', 'https://automationexercise.com/')
    }

    static verifyAlertSuccess() {
        cy.contains('h2', 'Full-Fledged practice website for Automation Engineers').should('be.visible');
        cy.screenshot('verifyAlertSuccess')
    }

    static click_logout_button(){
        cy.get('a[href="/logout"]').click()
    }

    static verifyLogOut(){
        cy.contains('h2', 'Login to your account').should('be.visible');
        cy.url().should('include', 'https://automationexercise.com/login')
        cy.screenshot('verifyLogOut')
    }
}

export { Logout_account };
