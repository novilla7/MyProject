import {Login_valid, Checkout_Invalid, Checkout_Valid, Checkout_Multiple_Item} from "../../pageObject/AutomationExercisePage/checkoutPage"
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'

// Test case background Already logged in
Given('I visit the website homepage for login valid', () => {
    Login_valid.visitHomepage(); 
});

When('I click Sign Up or Login menU', () => {
    Login_valid.clickLoginMenu();
});

When('I fill in form Email {string} for checkout', (email) => {
    Login_valid.fillLoginForm_email(email);
});

When('I fill in form Password {string} for checkout', (password) => {
    Login_valid.fillLoginForm_password(password);
});

When('I click login button', () => {
    Login_valid.clickLoginButton();
});

Then('I redirect to homepage', () => {
    Login_valid.verifyAlertSuccess();
});

// Test Case Input Invalid Payment while Checkout Single Item with a logged-in account
Given('I am already on the homepage', () => {
    Checkout_Invalid.Home_page()
})

When('I click add to cart Button', () => {
    Checkout_Invalid.Click_AddToCart()
})

Then('I Successful add item to shopping cart', () => {
    Checkout_Invalid.verifyAlertSuccessAddToCart()
})

When('I click view cart invalid', () => {
    Checkout_Invalid.click_viewCart()
})

Then('I can view item in shopping cart', () => {
    Checkout_Invalid.verifyViewCartSingleInvalid()
})

When('I click Proceed To Checkout button', () => {
    Checkout_Invalid.Click_ProceedToCheckout()
})

Then('I can view Address Details', () => {
    Checkout_Invalid.view_AddressDetails()
})

When('I add Comment Text {string}', (Comment) => {
    Checkout_Invalid.Input_comment(Comment)
})

When('I click Place Order', () => {
    Checkout_Invalid.Click_PlaceOrder()
})

Then('I can view Payment Page', () => {
    Checkout_Invalid.view_Payment()
})

When('I input Name on Card as {string}', (Name_on_Card) => {
    Checkout_Invalid.Input_NameOnCard(Name_on_Card)
})

When('I input Card Number as {string}', (Card_Number) => {
     Checkout_Invalid.Input_CardNumber(Card_Number)
})

When('I Input CVC as {string}', (CVC) => {
    Checkout_Invalid.Input_CVC(CVC)
})

When('I input Expiration as {string}', (Expiration) => {
    Checkout_Invalid.Input_Expiration(Expiration)
})

When('I input Year as {string}', (Year) => {
    Checkout_Invalid.Input_Year(Year)
})

When('I click Pay and Confirm Order button', () => {
    Checkout_Invalid.Click_PayConfirm()
})

Then('I get an alert Error {string}', (Message) => {
    Checkout_Invalid.view_OrderPlaced_Invalid(Message)
})


// Test Case Input Valid Payment Checkout Single Item with a logged-in account
Given('I am already on the Homepage', () => {
    Checkout_Valid.Home_page()
})

When('I click add cart Button', () => {
    Checkout_Valid.Click_AddToCart()
})

Then('I Successfuly add item to shopping cart', () => {
    Checkout_Valid.verifyAlertSuccessAddToCart()
})

When('I click view cart valid', () => {
    Checkout_Valid.click_viewCart2()
})

Then('I can view item in shopping cart page', () => {
    Checkout_Valid.verifyViewCartSingle()
})

When('I click Proceed Checkout button', () => {
    Checkout_Valid.Click_ProceedToCheckout()
})

Then('I can view Address Detail', () => {
    Checkout_Valid.view_AddressDetails()
})

When('I add Comment as {string}', (Comment) => {
    Checkout_Valid.Input_comment(Comment)
})

When('I click Place Order button', () => {
    Checkout_Valid.Click_PlaceOrder()
})

Then('I can view Payment Pages', () => {
    Checkout_Valid.view_Payment()
})


When('I fill input Name on Card as {string}', (Name_on_Card) => {
    Checkout_Valid.Input_NameOnCard(Name_on_Card)
})

When('I fill input Card Number as {string}', (Card_Number) => {
     Checkout_Valid.Input_CardNumber(Card_Number)
})

When('I fill Input CVC as {string}', (CVC) => {
    Checkout_Valid.Input_CVC(CVC)
})

When('I fill input Expiration as {string}', (Expiration) => {
    Checkout_Valid.Input_Expiration(Expiration)
})

When('I fill input Year as {string}', (Year) => {
    Checkout_Valid.Input_Year(Year)
})

When('I click Pay and Confirm Order', () => {
    Checkout_Valid.Click_PayConfirm()
})

Then('I can view Order Placed', () => {
    Checkout_Valid.view_OrderPlaced()
})

// Test Case Checkout Multiple Item with a logged-in account
Given('I am already on the HomePagE', () => {
    Checkout_Multiple_Item.Home_page()
})

When('I click add to cart Button for item 1', () => {
    Checkout_Multiple_Item.Click_AddToCart()
})

When('I click continue shopping', () => {
    Checkout_Multiple_Item.Click_ContinueShopping()
})

When('I click add to cart Button for item 2', () => {
    Checkout_Multiple_Item.Click_AddToCart_Multiple()
})

Then('I Successfully added add item to shopping cart', () => {
    Checkout_Multiple_Item.verifyAlertSuccessAddToCart()
})

When('I click view cart buttons', () => {
    Checkout_Multiple_Item.click_cartView()
})


Then('I Successful views item in shopping cart', () => {
    Checkout_Multiple_Item.verifyCartPage()
})




When('I click Proceed Checkout buttonn', () => {
    Checkout_Multiple_Item.Click_ProceedToCheckout()
})

Then('I can views Address Detail', () => {
    Checkout_Multiple_Item.view_AddressDetails()
})

When('I input Comments as {string}', (Comment) => {
    Checkout_Multiple_Item.Input_comment(Comment)
})

When('I click Place Order buttonn', () => {
    Checkout_Multiple_Item.Click_PlaceOrder()
})

Then('I can views Payment Pages', () => {
    Checkout_Multiple_Item.view_Payment()
})

When('I enter Name on Card as {string}', (Name_on_Card) => {
    Checkout_Multiple_Item.Input_NameOnCard(Name_on_Card)
})

When('I enter Card Number as {string}', (Card_Number) => {
     Checkout_Multiple_Item.Input_CardNumber(Card_Number)
})

When('I enter CVC as {string}', (CVC) => {
    Checkout_Multiple_Item.Input_CVC(CVC)
})

When('I enter Expiration as {string}', (Expiration) => {
    Checkout_Multiple_Item.Input_Expiration(Expiration)
})

When('I enter Year as {string}', (Year) => {
    Checkout_Multiple_Item.Input_Year(Year)
})

When('I click Pay & Confirm Order button', () => {
    Checkout_Multiple_Item.Click_PayConfirm()
})

Then('I successful view Order Placed', () => {
    Checkout_Multiple_Item.view_OrderPlaced()
})