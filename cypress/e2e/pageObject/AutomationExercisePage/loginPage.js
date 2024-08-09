const BASE_URL = "https://automationexercise.com/";

// Common login actions
class LoginActions {
    static visitHomepage() {
        // cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
        cy.wait(7000)
    }

    static clickLoginMenu() {
        cy.get('a[href="/login"]').click();
        cy.url().should('include', '/automationexercise.com/login')
        cy.screenshot('clickLoginMenu')
    }

    static signUp_page(){
        cy.wait(2000);
        cy.url().should('include', '/login');
    }
}

// Test Case Login Invalid Data
class Login_invalid {
    static signUp_page(){
        cy.wait(2000);
        cy.url().should('include', '/login');
        cy.xpath('//h2[text()="New User Signup!"]').should('exist')
    }

    static LoginEmail(Email_Address) {
        if (Email_Address) {
            cy.get('[data-qa="login-email"]').clear().type(Email_Address);
        }
        
    }

    static LoginPassword(password){
        if (password) {
            cy.get('[data-qa="login-password"]').clear().type(password);
        }
    }
            

    static clickLoginButton() {
        cy.get('[data-qa="login-button"]').click();
        cy.url().should('include', 'https://automationexercise.com/')
    }

    static verifyAlertError(Message) {
        cy.on('window:alert', (str) => {
            expect(str).to.exist;
            expect(str).to.contain(Message);
            cy.screenshot('verifyAlertError')
        });
    }
}

// Test Case Login Valid Data
class Login_valid {
    static signUp_page(){
        cy.wait(2000);
        cy.url().should('include', '/login');
        cy.xpath('//h2[text()="New User Signup!"]').should('exist')
    }

    static LoginValid_email(){
        cy.get('[data-qa="login-email"]').clear().type("siti@gmail.com");
    }

    static LoginValid_password(){
        cy.get('[data-qa="login-password"]').clear().type("password123");
    }

    static clickLoginButton() {
        cy.get('[data-qa="login-button"]').click();
        cy.url().should('include', 'https://automationexercise.com/')
    } 

    static verifyAlertSuccess() {
        cy.contains('h2', 'Full-Fledged practice website for Automation Engineers').should('be.visible');
        cy.contains('a', ' Logged in as ').should('be.visible')
        cy.screenshot('verifyAlertSuccess')
    }
}



export { Login_invalid, Login_valid, LoginActions };
