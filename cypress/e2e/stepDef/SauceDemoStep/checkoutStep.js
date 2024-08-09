import { AlreadyLogin, Checkout} from "../../pageObject/SauceDemoPage/checkoutPage";
const {Given, When, Then} = require ('@badeball/cypress-cucumber-preprocessor')
import 'cypress-xpath'

// Background
Given('I visit website homepage saucedemo', () => {
    AlreadyLogin.visitHomepage();
});

When('I fill in the username form with {string}', (username) => {
    AlreadyLogin.fillUsername(username);
});

When('I fill in the password form with {string}', (password) => {
    AlreadyLogin.fillPassword(password);
});

When('I click the login button to login to saucedemo', () => {
    AlreadyLogin.clickLoginButton();
});

Then('I should be redirected to the Inventory page', () => {
    AlreadyLogin.verifySuccessLogin();
});

// Test case checkout 
Given('I am on the Inventory page', () => {
    Checkout.InventoryPage();
});

When('I add an item to the cart', () => {
    Checkout.clickAddItem();
});

When('I add an items to the cart', () => {
    Checkout.clickAddAnotherItem(); 
});

Then('I can verify add item success add {string}', (numbers) => {
    Checkout.verifyAddIcon(numbers);
});

When('I navigate to the shopping cart', () => {
    Checkout.clickIconShoppingCart();
});

Then('I verify the item is in the cart', () => {
    Checkout.verifyAddItem();
});

When('I initiate the checkout process', () => {
    Checkout.clickCheckoutButton();
});


When('I input the first name {string}', (firstName) => {
    Checkout.fillFirstName(firstName);
});


When('I input the last name {string}', (lastName) => {
    Checkout.fillLastName(lastName);
});


When('I input the Zip code or Postal code {string}', (zipCode) => {
    Checkout.fillZipCode(zipCode);
});


When('I click the continue button', () => {
    Checkout.clickContinueButton();
});

// Invalid
Then('I get an alert error {string}', (message) => {
    Checkout.verifyErrorMessage(message);
});

// Valid
Then('I complete the item checkout', () => {
    Checkout.verifySuccessCheckout();
});

// navigate payment information valid & Multiple
Then('I go to the payment information page', () => {
    Checkout.verifyPaymentInformation();
});

// multiple
When('I click finish button', () => {
    Checkout.clickFinishButton();
});

Then('I successfully checkout all items', () => {
    Checkout.verifySuccessCheckout();
});

