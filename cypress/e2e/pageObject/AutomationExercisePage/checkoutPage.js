const BASE_URL = "https://automationexercise.com/";

// Test case background Already logged in
class Login_valid {
    static visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
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
        cy.url().should('include', '/automationexercise.com/');
        cy.screenshot('verifyAlertSuccess')
    }
}


// Test Case Input Invalid Payment while Checkout Single Item with a logged-in account
class Checkout_Invalid{
    static Home_page(){
        cy.contains('h2', 'Full-Fledged practice website for Automation Engineers').should('be.visible');
    }

    static Click_AddToCart(){
        cy.get('.title.text-center').should('exist');
        // Pastikan hanya memilih satu elemen yang akan diklik
        cy.get('a[data-product-id="2"]').first().click(); 
    }

    static verifyAlertSuccessAddToCart(){
        cy.get('.text-center').should('contain.text', "Your product has been added to cart.")
    }

    static click_viewCart(){
        cy.get('a[href="/view_cart"] u').click();
    }

    static verifyViewCartSingleInvalid(){
        cy.get('#cart_info_table').should('exist');
    }

    static Click_ProceedToCheckout(){
        cy.contains('a', 'Proceed To Checkout').click()
    }

    static view_AddressDetails(){
        cy.get('h2.heading').contains('Address Details');
    }

    static Input_comment(Comment){
        if (Comment) {
            cy.get('textarea[name="message"]').clear().type(Comment);
        }
    }

    static Click_PlaceOrder(){
        cy.contains('a', 'Place Order').click()
    }

    static view_Payment(){
        cy.get('h2.heading').contains('Payment');
    }

    static Input_NameOnCard(Name_on_Card){
        if(Name_on_Card) {
            cy.get('input[name="name_on_card"]').clear().type(Name_on_Card)
        }
    }

    static Input_CardNumber(Card_Number){
        if(Card_Number){
            cy.get('input[name="card_number"]').clear().type(Card_Number)
        }
    }

    static Input_CVC(CVC){
        if(CVC){
            cy.get('input[data-qa="cvc"]').clear().type(CVC)
        }
    }

    static Input_Expiration(Expiration){
        if(Expiration){
            cy.get('input[name="expiry_month"]').clear().type(Expiration)
        }
    }

    static Input_Year(Year){
        if(Year){
            cy.get('input[data-qa="expiry-year"]').clear().type(Year)
        }
    }

    static Click_PayConfirm(){
        cy.get('#submit').should('have.text', 'Pay and Confirm Order').click()
    }

    static view_OrderPlaced_Invalid(Message){
        cy.on('window:alert', (str) => {
            expect(str).to.exist;
            expect(str).to.contain(Message);
            
            cy.viewport(1280, 720)
            cy.screenshot('view_OrderPlaced_Invalid')
        });
     }
}


// Input Valid Payment Checkout Single Item with a logged-in account
class Checkout_Valid{
    static Home_page(){
        cy.contains('h2', 'Full-Fledged practice website for Automation Engineers').should('be.visible');
    }

    static Click_AddToCart(){
        cy.get('.title.text-center').should('exist');
        // Pastikan hanya memilih satu elemen yang akan diklik
        cy.get('a[data-product-id="1"]').first().click(); 
    }

    static verifyAlertSuccessAddToCart(){
        cy.get('.text-center').should('contain.text', "Your product has been added to cart.")
    }

    static click_viewCart2(){
        cy.get('a[href="/view_cart"] u').click();
    }

    static verifyViewCartSingle(){
        cy.get('#cart_info_table').should('exist');
    }

    static Click_ProceedToCheckout(){
        cy.contains('a', 'Proceed To Checkout').click()
    }

    static view_AddressDetails(){
        cy.get('h2.heading').contains('Address Details');
    }

    static Input_comment(Comment){
        cy.get('textarea[name="message"]').clear().type(Comment)
    }

    static Click_PlaceOrder(){
        cy.contains('a', 'Place Order').click()
    }

    static view_Payment(){
        cy.get('h2.heading').contains('Payment');
    }

    static Input_NameOnCard(Name_on_Card){
        cy.get('input[name="name_on_card"]').clear().type(Name_on_Card)
    }

    static Input_CardNumber(Card_Number){
        cy.get('input[name="card_number"]').clear().type(Card_Number)
    }

    static Input_CVC(CVC){
        cy.get('input[data-qa="cvc"]').clear().type(CVC)
    }

    static Input_Expiration(Expiration){
        cy.get('input[name="expiry_month"]').clear().type(Expiration)
    }

    static Input_Year(Year){
        cy.get('input[data-qa="expiry-year"]').clear().type(Year)
    }

    static Click_PayConfirm(){
        cy.get('#submit').should('have.text', 'Pay and Confirm Order').click()
    }

    static view_OrderPlaced(){
        cy.contains('h2', 'Order Placed!');
        cy.screenshot('view_OrderPlaced')
    }
}

// Test Case Checkout Multiple Item with a logged-in account
class Checkout_Multiple_Item{
    static Home_page(){
        cy.contains('h2', 'Full-Fledged practice website for Automation Engineers').should('be.visible');
    }

    static Click_AddToCart(){
        cy.get('.title.text-center').should('exist');
        // Pastikan hanya memilih satu elemen yang akan diklik
        cy.get('a[data-product-id="2"]').first().click(); 
    }

    static Click_ContinueShopping(){
        cy.contains('button', 'Continue Shopping').click();
    }

    static Click_AddToCart_Multiple(){
        cy.get('.title.text-center').should('exist');
        // Pastikan hanya memilih satu elemen yang akan diklik
        cy.get('a[data-product-id="1"]').first().click(); 
    }
    
    static verifyAlertSuccessAddToCart(){
        cy.get('.text-center').should('contain.text', "Your product has been added to cart.")
    }

    static click_cartView(){
        cy.get('a[href="/view_cart"] u').click();
    }

    
    static verifyCartPage(){
        cy.get('.product_image').should('be.visible')
        cy.get('.cart_description').should('be.visible')
        cy.get('.cart_price').should('be.visible')
        cy.get('.cart_quantity').should('be.visible')
        cy.get('.cart_total_price').should('be.visible')
        cy.get('.cart_quantity_delete').should('be.visible')
    }

    
    //

    static Click_ProceedToCheckout(){
        cy.contains('a', 'Proceed To Checkout').click()
    }

    static view_AddressDetails(){
        cy.get('h2.heading').contains('Address Details');
    }

    static Input_comment(Comment){
        cy.get('textarea[name="message"]').clear().type(Comment)
    }

    static Click_PlaceOrder(){
        cy.contains('a', 'Place Order').click()
    }


    static view_Payment(){
        cy.get('h2.heading').contains('Payment');
    }

    //

    static Input_NameOnCard(Name_on_Card){
        cy.get('input[name="name_on_card"]').clear().type(Name_on_Card)
    }

    static Input_CardNumber(Card_Number){
        cy.get('input[name="card_number"]').clear().type(Card_Number)
    }

    static Input_CVC(CVC){
        cy.get('input[data-qa="cvc"]').clear().type(CVC)
    }

    static Input_Expiration(Expiration){
        cy.get('input[name="expiry_month"]').clear().type(Expiration)
    }

    static Input_Year(Year){
        cy.get('input[data-qa="expiry-year"]').clear().type(Year)
    }

    static Click_PayConfirm(){
        cy.get('#submit').should('have.text', 'Pay and Confirm Order').click()
    }

    static view_OrderPlaced(){
        cy.contains('h2', 'Order Placed!');
        cy.screenshot('view_OrderPlaced')
    }
}




// Download invoice


export {Login_valid, Checkout_Invalid, Checkout_Valid, Checkout_Multiple_Item};
