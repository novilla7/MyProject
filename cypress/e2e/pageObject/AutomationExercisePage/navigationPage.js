const BASE_URL = "https://automationexercise.com/";


// Test Case navigation to home menu
class Navigate_home{
    static visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL);
        // cy.visit(BASE_URL, { timeout: 180000 });
        cy.url().should('include', '/automationexercise.com/')
        cy.wait(3000)
    }

    static Click_home_button(){
        cy.contains('a', 'Home').click();

    }

    static verifyHome(){
        cy.contains('h2', 'Features Items').should('be.visible');
        cy.screenshot('verifyAlertHome')
    }
}


// Test Case navigation to Product menu
class Navigate_product{
    static visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
    }
    
    static Click_product_button(){
        cy.contains('a', 'Products').click();
    }

    static verifyAlerProduct(){
        cy.contains('h2', 'All Products').should('be.visible');
        
    }
}

// Test Case navigation to Cart menu
class Navigate_cart{
    static visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
    }

    static Click_cart_button(){
        cy.contains('a', 'Cart').click();
    }

    static verifyAlerCart(){
        cy.contains('b', 'Cart is empty!').should('be.visible');
        cy.screenshot('verifyAlerCart')
    }
}

// Test Case navigation to Contact Us menu
class Navigate_contactUs{
    static visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
    }

    static Click_contactUs_button(){
        cy.contains('a', 'Contact us').click();
    }

    static verifyAlerContactUs(){
        cy.contains('h2', 'Get In Touch').should('be.visible');
        cy.screenshot('verifyAlerContactUs')
    }
}


export { Navigate_home, Navigate_product, Navigate_cart, Navigate_contactUs };