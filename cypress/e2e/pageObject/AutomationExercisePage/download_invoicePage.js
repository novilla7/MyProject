const BASE_URL = "https://automationexercise.com/";


// Test Case Download Paymenent Invoice 
class Download_Invoice {
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

    static Click_AddToCart(){
        cy.get('.title.text-center').should('exist');
        // Pastikan hanya memilih satu elemen yang akan diklik
        cy.get('a[data-product-id="1"]').first().click(); 
    }

    static verifyAlertSuccessAddToCart(){
        cy.get('.text-center').should('contain.text', "Your product has been added to cart.")
    }

    static click_CartView(){
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

    static Click_DownloadInvoice(){
        cy.get('a[href="/download_invoice/500"]').click()
    }

    static Successful_DownloadInvoice(){
        const downloads = Cypress.config('downloadsFolder');
        const fileName = 'invoice.txt';

        // Verifikasi bahwa file telah diunduh
        cy.readFile(`${downloads}/${fileName}`).should('exist');
       
    }
}

// ubah di settingan browser cyress jika gagal menyimpan ke folder cypress download 
//'cypress/downloads/*.txt'

export default {Download_Invoice}