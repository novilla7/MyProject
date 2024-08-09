import {Navigate_home, Navigate_product, Navigate_cart, Navigate_contactUs, visitHomepage} from "../../pageObject/AutomationExercisePage/navigationPage"
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'


// Test Case navigation to home menu
Given('I Am on the website homepage', () => {
    Navigate_home.visitHomepage(); 
});

When('I click on the home menu', () => {
    Navigate_home.Click_home_button()
})

Then('I should see the homepage content', () => {
    Navigate_home.verifyHome()
})


// Test Case navigation to Product menu
Given('I AM on the website homepage', () => {
    Navigate_product.visitHomepage(); 
});

When('I click on the product menu', () => {
    Navigate_product.Click_product_button()
})

Then('I should see the product content', () => {
    Navigate_product.verifyAlerProduct()
})

// Test Case navigation to Cart menu
Given('I am On the website homepage', () => {
    Navigate_cart.visitHomepage(); 
});

When('I click on the cart menu', () => {
    Navigate_cart.Click_cart_button()
})

Then('I should see the cart content', () => {
    Navigate_cart.verifyAlerCart()
})

// Test Case navigation to Contact Us menu
Given('I am ON the website homepage', () => {
    Navigate_contactUs.visitHomepage(); 
});

When('I click on the contact us menu', () => {
    Navigate_contactUs.Click_contactUs_button()
})

Then('I should see the contact us content', () => {
    Navigate_contactUs.verifyAlerContactUs()
})

