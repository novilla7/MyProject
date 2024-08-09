import {Download_Invoice} from "../../pageObject/AutomationExercisePage/download_invoicePage"
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'




// Test Case Download Paymenent Invoice 
Given('I visit the website homepage for download invoice', () => {
    Download_Invoice.visitHomepage(); 
});

When('I click Login menu button for download invoice', () => {
    Download_Invoice.clickLoginMenu();
});

When('I fill in form Email {string} for download invoice', (email) => {
    Download_Invoice.fillLoginForm_email(email);
});

When('I fill in form Password {string} for download invoice', (password) => {
    Download_Invoice.fillLoginForm_password(password);
});

When('I click login button for download invoice', () => {
    Download_Invoice.clickLoginButton();
});

Then('I Successfuly login for download invoice', () => {
    Download_Invoice.verifyAlertSuccess();
});

When('I click add cart Button for download invoice', () => {
    Download_Invoice.Click_AddToCart()
})

Then('I Successfuly add item to shopping cart for download invoice', () => {
    Download_Invoice.verifyAlertSuccessAddToCart()
})

When('I click view cart for download invoice', () => {
    Download_Invoice.click_CartView()
})

Then('I can view item in shopping cart page for download invoice', () => {
    Download_Invoice.verifyViewCartSingleInvalid()
})

When('I click Proceed Checkout button for download invoice', () => {
    Download_Invoice.Click_ProceedToCheckout()
})

Then('I can view Address Detail for download invoice', () => {
    Download_Invoice.view_AddressDetails()
})

When('I add Comment {string}', (Comment) => {
    Download_Invoice.Input_comment(Comment)
})

When('I click Place Order button for download invoice', () => {
    Download_Invoice.Click_PlaceOrder()
})

Then('I can view Payment Pages for download invoice', () => {
    Download_Invoice.view_Payment()
})

When('I fill input Name on Card {string}', (Name_on_Card) => {
    Download_Invoice.Input_NameOnCard(Name_on_Card)
})

When('I fill input Card Number {string}', (Card_Number) => {
    Download_Invoice.Input_CardNumber(Card_Number)
})

When('I fill Input CVC {string}', (CVC) => {
    Download_Invoice.Input_CVC(CVC)
})

When('I fill input Expiration {string}', (Expiration) => {
    Download_Invoice.Input_Expiration(Expiration)
})

When('I fill input Year {string}', (Year) => {
    Download_Invoice.Input_Year(Year)
})

When('I click Pay and Confirm Order button for download invoice', () => {
    Download_Invoice.Click_PayConfirm()
})

Then('I can view Order Placed for download invoice', () => {
    Download_Invoice.view_OrderPlaced()
})

When('I click Download Invoice Button', () => {
    Download_Invoice.Click_DownloadInvoice()
})

Then('I successful save payment invoice', () => {
    Download_Invoice.Successful_DownloadInvoice()
})