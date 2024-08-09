import {Checkout_Without_Login} from "../../pageObject/AutomationExercisePage/checkout_without_loginPage"
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'


// Test Case checkout without logging in
Given('I visited the main site', () => {
    Checkout_Without_Login.visitHomepage()
})

When('I clicked add to cart Button', () => {
    Checkout_Without_Login.Click_AddToCart()
})

Then('I Successfully add item to shopping cart', () => {
    Checkout_Without_Login.verifyAlertSuccessAddToCart()
})

When('I click view cart button', () => {
    Checkout_Without_Login.click_ContinueShopping()
})

When('I can views item in shopping cart page', () => {
    Checkout_Without_Login.viewShoppingCart()
})

When('I click Proceed to checkout', () => {
    Checkout_Without_Login.click_ProceedShopping()
})


Then('I Unsuccessful checkout', () => {
    Checkout_Without_Login.view_ShoppingCartWithoutLogin()
})