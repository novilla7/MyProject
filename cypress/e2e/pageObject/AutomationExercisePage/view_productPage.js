const BASE_URL = "https://automationexercise.com/"


//Test Case View Women's Clothing Categories
class View_WomenClothing{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        cy.screenshot('visit_Home')
    }

    static Click_WomenButton(){
        cy.get('a[href="#Women"]').click()
    }

    static View_TypeWomenClothing(){
        cy.get('a[href="/category_products/1"]').should('contain', 'Dress')
        cy.get('a[href="/category_products/2"]').should('contain', 'Tops')
        cy.get('a[href="/category_products/7"]').should('contain', 'Saree')
    }
}

class view_Dress{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
    
    }

    static Click_WomenButton2(){
        cy.get('a[href="#Women"]').click()
    }

    static View_TypeWomenClothing2(){
        cy.get('a[href="/category_products/1"]').should('contain', 'Dress')
        cy.get('a[href="/category_products/2"]').should('contain', 'Tops')
        cy.get('a[href="/category_products/7"]').should('contain', 'Saree')
       
    }

    static Click_DressButton(){
        cy.get('a[href="/category_products/1"]').click()
    }

    static view_AllItemDress(){
        cy.contains('h2', 'Women - Dress Products').should('be.visible')
       
    }

}

class view_Top{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        
    }

    static Click_WomenButton3(){
        cy.get('a[href="#Women"]').click()
    }

    static View_TypeWomenClothing3(){
        cy.get('a[href="/category_products/1"]').should('contain', 'Dress')
        cy.get('a[href="/category_products/2"]').should('contain', 'Tops')
        cy.get('a[href="/category_products/7"]').should('contain', 'Saree')
       
    }

    static Click_TopsButton(){
        cy.get('a[href="/category_products/2"]').click()
    }

    static view_AllItemTops(){
        cy.contains('h2', 'Women - Tops Products').should('be.visible')
    }
}

class view_Saree{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
       
    }

    static Click_WomenButton4(){
        cy.get('a[href="#Women"]').click()
    }

    static View_TypeWomenClothing4(){
        cy.get('a[href="/category_products/1"]').should('contain', 'Dress')
        cy.get('a[href="/category_products/2"]').should('contain', 'Tops')
        cy.get('a[href="/category_products/7"]').should('contain', 'Saree')
        
    }

    static Click_SareeButton(){
        cy.get('a[href="/category_products/7"]').click()
    }

    static view_AllItemSaree(){
        cy.contains('h2', 'Women - Saree Products').should('be.visible')
    }
}

// ///////////////////////////////////////////////////////////

// Test Case View Men's Clothing Categories
class View_MenClothing{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
    
    }

    static Click_MenButton(){
        cy.get('a[href="#Men"]').click()
    }

    static View_TypeMenClothing(){
        cy.get('a[href="/category_products/3"]').should('contain', 'Tshirts')
        cy.get('a[href="/category_products/6"]').should('contain', 'Jeans')
    }
    
}

class view_Thirts{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
       
    }

    static Click_MenButton2(){
        cy.get('a[href="#Men"]').click()
    }

    static View_TypeMenClothing2(){
        cy.get('a[href="/category_products/3"]').should('contain', 'Tshirts')
        cy.get('a[href="/category_products/6"]').should('contain', 'Jeans')
    }

    static Click_TshirtsButton(){
        cy.get('a[href="/category_products/3"]').click()
    }

    static view_AllItemTshirts(){
        cy.contains('h2', 'Men - Tshirts Products').should('be.visible')
    }
}


class view_Jeans{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
      
    }

    static Click_MenButton3(){
        cy.get('a[href="#Men"]').click()
    }

    static View_TypeMenClothing3(){
        cy.get('a[href="/category_products/3"]').should('contain', 'Tshirts')
        cy.get('a[href="/category_products/6"]').should('contain', 'Jeans')
    }

    static Click_JeansButton(){
        cy.get('a[href="/category_products/6"]').click()
    }

    static view_AllItemJeans(){
        cy.contains('h2', 'Men - Jeans Products').should('be.visible')
    
    }
}


/////////////////////////////////////////////////////////


class View_KidsClothing{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        
    }

    static Click_kidsButton(){
        cy.get('a[href="#Kids"]').click();
    }

    static View_TypeKidsClothing(){
        cy.get('a[href="/category_products/4"]').should('contain', 'Dress')
        cy.get('a[href="/category_products/5"]').should('contain', 'Tops & Shirts')
    }

}

// Test case view Dress Kids items
class view_DressKids{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        
    }

    static Click_kidsButton2(){
        cy.get('a[href="#Kids"]').click();
    }

    static View_TypeKidsClothing2(){
        cy.get('a[href="/category_products/4"]').should('contain', 'Dress')
        cy.get('a[href="/category_products/5"]').should('contain', 'Tops & Shirts')
    }

    static Click_DressKidsButton(){
        cy.get('a[href="/category_products/4"]').click()
    }

    static view_AllItemDressKids(){
        cy.contains('h2', 'Kids - Dress Products').should('be.visible')
    }
}


// Test case view Tops & Shirts
class view_TopsShirts{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        
    }

    static Click_kidsButton3(){
        cy.get('a[href="#Kids"]').click();
    }

    static View_TypeKidsClothing3(){
        cy.get('a[href="/category_products/4"]').should('contain', 'Dress')
        cy.get('a[href="/category_products/5"]').should('contain', 'Tops & Shirts')
    }

    static Click_TopShirtsButton(){
        cy.get('a[href="/category_products/5"]').click()
    }

    static view_AllItemTopShirts(){
        cy.contains('h2', 'Kids - Tops & Shirts Products').should('be.visible')
        
    }
}



/////////////////////////////////////////////////////////////



// Test Case View Polo Brand Items
class View_Brands_Polo{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        
    }

    static Click_BrandPolo(){
        cy.get('a[href="/brand_products/Polo"]').click()
    }

    static View_AllItemPolo(){
        cy.contains('h2', 'Brand - Polo Products').should('be.visible')
        
    }
}


// Test Case View View H&M Brand Items
class View_Brands_HandM{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        
    }

    static Click_BrandHanM(){
        cy.get('a[href="/brand_products/H&M"]').click()
    }

    static View_AllItemHanM(){
        cy.contains('h2', 'Brand - H&M Products').should('be.visible')
       
    }
}


// Test Case View View Madame Brand Items
class View_Brands_Madame{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        
    }

    static Click_BrandMadame(){
        cy.get('a[href="/brand_products/Madame"]').click()
    }

    static View_AllItemMadame(){
        cy.contains('h2', 'Brand - Madame Products').should('be.visible')
        
    }
}


// Test Case View Babyhug Brand Items
class View_Brands_Babyhug{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
       
    }

    static Click_BrandBabyhug(){
        cy.get('a[href="/brand_products/Babyhug"]').click()
    }

    static View_AllItemBabyhug(){
        cy.contains('h2', 'Brand - Babyhug Products').should('be.visible')
       
    }
}


// Test Case View Allen Solly Junior Brand Items
class View_Brands_AllenSollyJunior{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        
    }

    static Click_BrandAllenSollyJunior(){
        cy.get('a[href="/brand_products/Allen Solly Junior"]').click()
    }

    static View_AllItemAllenSollyJunior(){
        cy.contains('h2', 'Brand - Allen Solly Junior Products').should('be.visible')
        
    }
}


// Test Case View Kookie Kids Brand Items
class View_Brands_KookieKids{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        
    }

    static Click_BrandKookieKids(){
        cy.get('a[href="/brand_products/Kookie Kids"]').click()
    }

    static View_AllItemKookieKids(){
        cy.contains('h2', 'Brand - Kookie Kids Products').should('be.visible')
       
    }
}


// Test Case View View Biba Brand Items
class View_Brands_Biba{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
     
    }

    static Click_BrandBiba(){
        cy.get('a[href="/brand_products/Biba"]').click()
    }

    static View_AllItemBiba(){
        cy.contains('h2', 'Brand - Biba Products').should('be.visible')
       
    }
}


// Test Case View Product Description
class View_Product{
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com/')
        cy.wait(7000)
        
    }

    static Click_ViewProduct(){
        cy.get('a[href="/product_details/1"]').click()
    }

    static View_AllDescription(){
        cy.contains('h2', 'Blue Top').should('have.text', 'Blue Top')
        
    }
}






export default {View_WomenClothing, View_MenClothing, View_KidsClothing, 
    View_Brands_Polo, View_Brands_HandM, View_Brands_Madame, View_Brands_Babyhug, 
    View_Brands_AllenSollyJunior, View_Brands_KookieKids, View_Brands_Biba, View_Product, view_Dress, view_Top, view_Saree, view_Thirts, 
    view_Jeans, view_DressKids, view_TopsShirts}