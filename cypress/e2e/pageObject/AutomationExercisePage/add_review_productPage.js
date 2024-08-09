const BASE_URL = "https://automationexercise.com/";


// Test case Add review without Login
class Add_review_without_login{
    static visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
        cy.wait(3000)
    }

    static Click_viewProduct(){
        cy.get('a[href="/product_details/1"]').click()
    }

    static view_WriteYourReview(){
        cy.get('a[href="#reviews"]').should('have.text', 'Write Your Review')
    }

    static Input_YourName(name){
        cy.get('#name').clear().type(name)
    }

    static Input_EmailAddress(email){
        cy.get('#email').clear().type(email)
    }

    static Input_AddReview(text){
        cy.get('#review').clear().type(text)
    }

    static Submit_AddReview(){
        cy.get('#button-review').click()
    }

    static Unsuccessful_AddReview(message){
        cy.get('span').contains(message).should('be.visible')
    }
}


// Test case Add review with invalid data
class Add_review_with_invalid_data{
    static visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
        cy.wait(3000)
    }

    static clickLoginMenu() {
        cy.get('a[href="/login"]').click();
        
    }

    static viewLoginPage(){
        cy.url().should('include', '/automationexercise.com/login')
        cy.screenshot('clickLoginMenu')
    }

    static LoginValid_email(email_valid){
        cy.get('[data-qa="login-email"]').clear().type(email_valid);
    }

    static LoginValid_password(password_valid){
        cy.get('[data-qa="login-password"]').clear().type(password_valid);
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


    static Click_viewProduct(){
        cy.get('a[href="/product_details/1"]').click()
    }

    static view_WriteYourReview(){
        cy.get('a[href="#reviews"]').should('have.text', 'Write Your Review')
    }

    static Input_YourName(your_name){
        cy.get('#name').clear().type(your_name)
    }

    static Input_EmailAddress(email_Address){
        cy.get('#email').clear().type(email_Address)
    }

    static Input_AddReview(text){
        cy.get('#review').clear().type(text)
    }

    static Submit_AddReview(){
        cy.get('#button-review').click()
    }

    static Unsuccessful_AddReview(message){
        cy.get('span').contains(message).should('be.visible')
    }

    static closeBrowser(){
        Cypress.exit();
    }
    
}


// Test case Add review with Login
class Add_review_with_login{
    static visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
        cy.wait(3000)
    }

    static clickLoginMenu() {
        cy.get('a[href="/login"]').click();
        cy.url().should('include', '/automationexercise.com/login')
        cy.screenshot('clickLoginMenu')
    }

    static LoginValid_email(email){
        cy.get('[data-qa="login-email"]').clear().type(email);
    }

    static LoginValid_password(password){
        cy.get('[data-qa="login-password"]').clear().type(password);
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


    static Click_viewProduct(){
        cy.get('a[href="/product_details/1"]').click()
    }

    static view_WriteYourReview(){
        cy.get('a[href="#reviews"]').should('have.text', 'Write Your Review')
    }

    static Input_YourName(){
        cy.get('#name').clear().type("Siti")
    }

    static Input_EmailAddress(){
        cy.get('#email').clear().type("Siti")
    }

    static Input_AddReview(){
        cy.get('#review').clear().type("good job!")
    }

    static Submit_AddReview(){
        cy.get('#button-review').click()
    }

    static Successful_AddReview(message){
        cy.get('span').contains(message).should('exist')
    }

    static closeBrowser(){
        Cypress.exit();
    }
}


export {Add_review_without_login, Add_review_with_invalid_data, Add_review_with_login}