const Base_Url = "https://www.saucedemo.com/";
const FILL_USERNAME = '#user-name';
const FILL_PASSWORD ='#password';
const LOGIN_BUTTON ='#login-button';
const Verify_IconShoppingCart = '[data-test="shopping-cart-badge"]'
const click_iconShoppingCart = '[data-test="shopping-cart-link"]'
const Checkout_Button = '#checkout'
const fill_firstname = '#first-name'
const fill_lastname = '#last-name'
const fill_zipCode = '#postal-code'
const click_continue = '#continue'
const click_finish = '#finish'

// Background
class AlreadyLogin {
    static visitHomepage() {
        cy.visit(Base_Url);
        cy.url().should('include', 'saucedemo.com/');
    }

    static fillUsername(username) {
        cy.get(FILL_USERNAME).clear().type(username);
    }

    static fillPassword(password) {
        cy.get(FILL_PASSWORD).clear().type(password);
    }

    static clickLoginButton() {
        cy.get(LOGIN_BUTTON).click();
    }

    static verifySuccessLogin() {
        cy.get('[data-test="title"]').should('have.text', 'Products');
    }
}

// Test case Checkout
class Checkout {
    static InventoryPage() {
        cy.get('[data-test="title"]').should('have.text', 'Products');
    }

    // add 1 item
    static clickAddItem() {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
    }

    // add 2 item
    static clickAddAnotherItem() {
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
    }

    static verifyAddIcon(numbers) {
        cy.get(Verify_IconShoppingCart).should('have.text', numbers);
    }

    static clickIconShoppingCart() {
        cy.get(click_iconShoppingCart).click();
    }

    static verifyAddItem() {
        cy.get('.inventory_item_name').should('be.visible');
        cy.url().should('include', 'cart.html');
    }

    static clickCheckoutButton() {
        cy.get(Checkout_Button).click();
    }

    static fillFirstName(firstName) {
        if (firstName) {
            cy.get(fill_firstname).clear().type(firstName);
        }
    }

    static fillLastName(lastName) {
        if (lastName) {
            cy.get(fill_lastname).clear().type(lastName);
        }
    }

    static fillZipCode(zipCode) {
        if (zipCode) {
            cy.get(fill_zipCode).clear().type(zipCode);
        }
    }

    static clickContinueButton() {
        cy.get(click_continue).click();
        cy.screenshot('clickContinueButton');
    }

    //verify invalid
    static verifyErrorMessage(message) {
        cy.get('[data-test="error"]').should('have.text', message);
    }

    // navigate payment information
    static verifyPaymentInformation() {
        cy.url().should('include', '/checkout-step-two.html');
        cy.get('.summary_total_label').should('be.visible');
    }

    static clickFinishButton() {
        cy.get(click_finish).click();
    }

    // verify success checkout valid & multiple
    static verifySuccessCheckout() {
        cy.url().should('include', '/checkout-complete.html');
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    }
}


export {AlreadyLogin, Checkout}