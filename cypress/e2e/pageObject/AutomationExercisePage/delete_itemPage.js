const BASE_URL = "https://automationexercise.com/";

// Test Case Delete Item
class DeleteItem {
    static visitHomepage() {
        // cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
        cy.wait(7000)
    }

    static clickLoginMenu() {
        cy.get('a[href="/login"]').click();
        cy.url().should('include', '/automationexercise.com/login')
        
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

    static Click_AddToCart(){
        cy.get('.title.text-center').should('exist');
        cy.get('a[data-product-id="2"]').first().click(); 
    }

    static verifyAlertSuccessAddToCart(){
        cy.get('.text-center').should('contain.text', "Your product has been added to cart.")
    }

    static Click_ViewCart(){
        cy.get('a[href="/view_cart"] u').click();
        cy.url('include', '/view_cart')
    }

    static verifyAlertShoppingCartPage(){
        cy.contains('a', 'Proceed To Checkout').should('exist')
    }

    static Click_ItemToDelete(){
        cy.get('a[data-product-id="2"]').click()
    }

    static verifyAlertSuccessDeleteItem(){
        cy.contains('b', 'Cart is empty!').should('exist')
    }

}

export { DeleteItem };