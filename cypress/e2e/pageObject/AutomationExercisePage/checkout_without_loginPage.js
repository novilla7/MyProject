const BASE_URL = "https://automationexercise.com/";


// Test Case checkout without logging in
class Checkout_Without_Login{
    static visitHomepage() {
        // cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
    }

    static Click_AddToCart(){
        cy.get('.title.text-center').should('exist');
        // Pastikan hanya memilih satu elemen yang akan diklik
        cy.get('a[data-product-id="2"]').first().click(); 
    }

    static verifyAlertSuccessAddToCart(){
        cy.get('.text-center').should('contain.text', "Your product has been added to cart.")
    }

    static click_ContinueShopping(){
        cy.get('a[href="/view_cart"] u').click()
    }

    static viewShoppingCart(){
        cy.get('.product_image').should('be.visible')
        cy.get('.cart_description').should('be.visible')
        cy.get('.cart_price').should('be.visible')
        cy.get('.cart_quantity').should('be.visible')
        cy.get('.cart_total').should('be.visible')
        cy.get('.cart_quantity_delete').should('be.visible')
    }

    static click_ProceedShopping(){
        cy.contains('a', 'Proceed To Checkout').click()
    }

    static view_ShoppingCartWithoutLogin(){
        cy.contains('p.text-center', 'Register / Login account to proceed on checkout.')
       
    }

}

export default {Checkout_Without_Login};