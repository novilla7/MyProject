const BASE_URL = 'https://www.saucedemo.com/';
const FILL_USERNAME = '#user-name';
const FILL_PASSWORD ='#password';
const LOGIN_BUTTON ='#login-button';


class Background {
    visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', 'saucedemo.com/');
    }
}

class Login {
    fillUsername(username) {
        if (username) { // Mengecek apakah username ada (yg kosong terbaca string dari step makanya yg else klo dihapus tetep benar)
            cy.get(FILL_USERNAME).clear().type(username); // Jika ada, ketikkan username
        } else {
            // Jika username kosong, bisa tambahkan logika ini
            // cy.get(FILL_USERNAME).clear(); 
        }
    }

    fillPassword(password) {
        if (password) { // Mengecek apakah password ada
            cy.get(FILL_PASSWORD).clear().type(password); // Jika ada, ketikkan password
        } else {
            // Jika password kosong, bisa tambahkan logika untuk menangani hal ini
            // cy.get(FILL_PASSWORD).clear(); 
        } 
    }

    clickLoginButton() {
        cy.get(LOGIN_BUTTON).click();
    }

    verifyErrorMessage(expectedMessage) {
        cy.get('[data-test="error"]').should('contain', expectedMessage);
        cy.screenshot('verifyErrorMessage');
    }

    verifySuccess() {
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.screenshot('verifySuccess');
    }
}

export { Background, Login };
