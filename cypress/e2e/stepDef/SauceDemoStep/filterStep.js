import { Login, Filter } from "../../pageObject/SauceDemoPage/filterPage"
const {Given, When, Then} = require ('@badeball/cypress-cucumber-preprocessor')
import 'cypress-xpath'

// Background login
Given('I am on the Saucedemo login page', () => {
    Login.visitHomepage();
});

When('I enter the username {string}', (userName) => {
    Login.fillUsername(userName);
});

When('I enter the password {string}', (Password) => {
    Login.fillPassword(Password);
});

When('I click the Login button', () => {
    Login.clickLoginButton();
});

Then('I should be logged in to the Saucedemo homepage', () => {
    Login.verifySuccessLogin();
});

// Implementasi untuk masuk ke halaman Inventory
Given('I am on the Inventory Pages', () => {
    Filter.InventoryPage();
});

// Implementasi untuk memilih filter
When('I select the filter {string}', (filterOption) => {
    Filter.selectFilter(filterOption);
});

// Implementasi untuk memverifikasi hasil
Then('the items should be sorted by {string}', (expectedResult) => {
    Filter.verifyFilterResults(expectedResult);
});