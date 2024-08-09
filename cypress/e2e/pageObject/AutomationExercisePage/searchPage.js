const BASE_URL = "https://automationexercise.com";


// Test Case Search Item Invalid
class SearchInvalid{
    static visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com')
        cy.wait(3000)
    }

    static Click_ProductMenu(){
        cy.get('a[href="/products"]').click();
    }
    
    static verifySearchBox(){
        cy.get('#search_product').should('be.visible')
    }

    static Input_InvalidSearch(Search_Invalid){
        cy.get('#search_product').clear().type(Search_Invalid)
    }

    static Click_SearchButton(){
        cy.get('#submit_search').click()
    }

    static verifyAlertUnsuccessful(){
        cy.contains('Item yang dicari tidak tersedia').should('be.visible');
    }
}



// Test Case Search Item Valid
class SearchValid{
    static visitHomepage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL);
        cy.url().should('include', '/automationexercise.com/')
    }

    static Click_ProductMenu(){
        cy.get('a[href="/products"]').click();
    }
    
    static verifySearchBox(){
        cy.get('#search_product').should('be.visible')
    }

    static Input_ValidSearch(SearchValid){
        cy.get('#search_product').clear().type(SearchValid)
    }

    static Click_SearchButton(){
        cy.get('#submit_search').click()
    }

    static verifyAlertSuccessful(){
        cy.contains('p', 'Sleeveless Dress').should('be.visible')
    }
}



export { SearchInvalid, SearchValid }