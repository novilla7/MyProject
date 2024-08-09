import {View_WomenClothing, View_MenClothing, View_KidsClothing, View_Brands_Polo, View_Brands_HandM, View_Brands_Madame, View_Brands_Babyhug, 
    View_Brands_AllenSollyJunior, View_Brands_KookieKids, View_Brands_Biba, View_Product, view_Dress, view_Top, view_Saree, view_Thirts, view_Jeans, view_DressKids, view_TopsShirts} from "../../pageObject/AutomationExercisePage/view_productPage"; // Periksa jalur ini
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'



// Test Case View Women's Clothing Categories
Given('I visit the Automation Exercise website', () => {
    View_WomenClothing.visit_Home()
})

When('I click the Women button menu', () => {
    View_WomenClothing.Click_WomenButton()
})

Then('I successfully view types of women clothes', () => {
    View_WomenClothing.View_TypeWomenClothing()
})



// Test case view Dress Items
Given('I visiT the Automation Exercise Website', () => {
    view_Dress.visit_Home()
})

When('I click the Women button menu for Dress', () => {
    view_Dress.Click_WomenButton2()
})

Then('I successfully view types of women clothes for Dress', () => {
    view_Dress.View_TypeWomenClothing2()
})

When('I click the Dress button', () => {
    view_Dress.Click_DressButton()
})

Then('I successfully view all items from Dress', () => {
    view_Dress.view_AllItemDress()
})



// test case view Top Items
Given('I Visit the Automation Exercise website', () => {
   view_Top.visit_Home()
})

When('I click the Women button menu for Tops', () => {
    view_Top.Click_WomenButton3()
})

Then('I successfully view types of women clothes for Tops', () => {
    view_Top.View_TypeWomenClothing3()
})

When('I click the Tops button', () => {
    view_Top.Click_TopsButton()
})

Then('I successfully view all items from Tops', () => {
    view_Top.view_AllItemTops()
})



// test case view saree items
Given('I visit the automation Exercise website', () => {
    view_Saree.visit_Home()
})

When('I click the Women button menu for Saree', () => {
    view_Saree.Click_WomenButton4()
})

Then('I successfully view types of women clothes for Saree', () => {
    view_Saree.View_TypeWomenClothing4()
})

When('I click the Saree button', () => {
    view_Saree.Click_SareeButton()
})

Then('I successfully view all items from Saree', () => {
    view_Saree.view_AllItemSaree()
})

///////////////////////////////////////////////////////////////////////

// Test Case View Men's Clothing Categories
Given('I visit the Automation eXercise website', () => {
    View_MenClothing.visit_Home()
})

When('I click the Men button', () => {
    View_MenClothing.Click_MenButton()
})

Then('I successfully view types of men clothes', () => {
    View_MenClothing.View_TypeMenClothing()
})


// Test case view T-shirts items
Given('I visit The Automation Exercise website', () => {
    view_Thirts.visit_Home()
})

When('I click the Men button for Tshirts', () => {
    view_Thirts.Click_MenButton2()
})

Then('I successfully view types of men clothes for Tshirts', () => {
    view_Thirts.View_TypeMenClothing2()
})


When('I click the Tshirts button', () => {
    view_Thirts.Click_TshirtsButton()
})


Then('I successfully view all items from Tshirts', () => {
    view_Thirts.view_AllItemTshirts()
})



//  Test case view jeans items
Given('I visit the Automation Exercise Website', () => {
    view_Jeans.visit_Home()
})

When('I click the Men button for jeans', () => {
    view_Jeans.Click_MenButton3()
})

Then('I successfully view types of men clothes for jeans', () => {
    view_Jeans.View_TypeMenClothing3()
})

When('I click the Jeans button', () => {
    view_Jeans.Click_JeansButton()
})


Then('I successfully view all items from Jeans', () => {
    view_Jeans.view_AllItemJeans()
})

//////////////////////////////////////////////////////////////////////

// Test Case View Kids' Clothing Categories
Given('I visiT The Automation exercise Website', () => {
    View_KidsClothing.visit_Home()
})

When('I click the Kids button', () => {
    View_KidsClothing.Click_kidsButton()
})

Then('I successfully view types of kids clothes', () => {
    View_KidsClothing.View_TypeKidsClothing()
})


// Test case view Dress Kids items
Given('I Visit The Automation Exercise website', () => {
    view_DressKids.visit_Home()
})

When('I click the Kids button for Dress Kids', () => {
    view_DressKids.Click_kidsButton2()
})

Then('I successfully view types of kids clothes for Dress kids', () => {
    view_DressKids.View_TypeKidsClothing2()
})

When('I click the Dress Kids button', () => {
    view_DressKids.Click_DressKidsButton()
})

Then('I successfully view all items under Dress', () => {
    view_DressKids.view_AllItemDressKids()
})

// Test case view Tops & Shirts
Given('I visit The automation exercise website', () => {
    view_TopsShirts.visit_Home()
})

When('I click the Kids button for Tops & Shirts', () => {
    view_TopsShirts.Click_kidsButton3()
})

Then('I successfully view types of kids clothes for Tops & Shirts', () => {
    view_TopsShirts.View_TypeKidsClothing3()
})

When('I click the Tops & Shirts button', () => {
    view_TopsShirts.Click_TopShirtsButton()
})

Then('I successfully view all items from Tops & Shirts', () => {
    view_TopsShirts.view_AllItemTopShirts()
})

//////////////////////////////////////////////////////////////////////////////

// Test Case View Polo Brand Items
Given('I visit THE Automation Exercise website', () => {
    View_Brands_Polo.visit_Home()
})

When('I click the Polo button', () => {
    View_Brands_Polo.Click_BrandPolo()
})

Then('I successfully view all items from the Polo brand', () => {
    View_Brands_Polo.View_AllItemPolo()
})


// Test Case View View H&M Brand Items
Given('I visit the automation exercise Website', () => {
    View_Brands_HandM.visit_Home()
})

When('I click the H & M button', () => {
    View_Brands_HandM.Click_BrandHanM()
})

Then('I successfully view all items from the H&M brand', () => {
    View_Brands_HandM.View_AllItemHanM()
})


// Test Case View View Madame Brand Items
Given('I visit the automation exercise website', () => {
    View_Brands_Madame.visit_Home()
})

When('I click the Madame button', () => {
    View_Brands_Madame.Click_BrandMadame()
})

Then('I successfully view all items from the Madame brand', () => {
    View_Brands_Madame.View_AllItemMadame()
})


// Test Case View Babyhug Brand Items
Given('I visit The Automation Exercise Website', () => {
    View_Brands_Babyhug.visit_Home()
})

When('I click the Babyhug button', () => {
    View_Brands_Babyhug.Click_BrandBabyhug()
})

Then('I successfully view all items from the Babyhug brand', () => {
    View_Brands_Babyhug.View_AllItemBabyhug()
})


// Test Case View Allen Solly Junior Brand Items
Given('I Visit The Automation Exercise Website', () => {
    View_Brands_AllenSollyJunior.visit_Home()
})

When('I click the Allen Solly Junior button', () => {
    View_Brands_AllenSollyJunior.Click_BrandAllenSollyJunior()
})

Then('I successfully view all items from the Allen Solly Junior brand', () => {
    View_Brands_AllenSollyJunior.View_AllItemAllenSollyJunior()
})


// Test Case View Kookie Kids Brand Items
Given('I Visit the Automation exercise Website', () => {
    View_Brands_KookieKids.visit_Home()
})

When('I click the Kookie Kids button', () => {
    View_Brands_KookieKids.Click_BrandKookieKids()
})

Then('I successfully view all items from the Kookie Kids brand', () => {
    View_Brands_KookieKids.View_AllItemKookieKids()
})


// Test Case View View Biba Brand Items
Given('I visit The Automation exercise website', () => {
    View_Brands_Biba.visit_Home()
})

When('I click the Biba button', () => {
    View_Brands_Biba.Click_BrandBiba()
})

Then('I successfully view all items from the Biba brand', () => {
    View_Brands_Biba.View_AllItemBiba()
})



// Test Case View Product Description
Given('I Visit the automation Exercise Website', () => {
    View_Product.visit_Home()
})

When('I click the View Product button', () => {
    View_Product.Click_ViewProduct()
})

Then('I successfully view the product description', () => {
    View_Product.View_AllDescription()
})




