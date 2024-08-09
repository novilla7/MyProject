const BASE_URL = 'https://www.saucedemo.com/';
const FILL_USERNAME = '#user-name';
const FILL_PASSWORD ='#password';
const LOGIN_BUTTON ='#login-button';

class Login {
    static visitHomepage() {
        cy.visit(BASE_URL);
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
        cy.wait(2000);
    }
}

class Filter {
    static InventoryPage() {
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.wait(2000);
    }

    // milih menu
    static selectFilter(filterOption) {
        cy.get('.product_sort_container').should('be.visible').select(filterOption);
    }

    // assert menunya
    static verifyFilterResults(expectedResult) {
        if(expectedResult === "alphabetically from A to Z"){
            cy.contains('Sauce Labs Backpack').should('be.visible');
        }else if(expectedResult === "alphabetically from Z to A"){
            cy.contains('Test.allTheThings() T-Shirt (Red)').should('be.visible');
        }else if(expectedResult === "by price from low to high"){
            cy.contains('Sauce Labs Onesie').should('be.visible');
        }else{
            cy.contains('Sauce Labs Fleece Jacket').should('be.visible');
        }
    }
}


export{Login, Filter}