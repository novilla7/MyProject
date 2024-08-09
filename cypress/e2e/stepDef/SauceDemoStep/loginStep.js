import { Background, Login } from "../../pageObject/SauceDemoPage/loginPage";
const {Given, When, Then} = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'

// Instance dari kelas Background dan Login
const background = new Background();
const login = new Login();

// Background
Given('I visit website Homepage', () => {
    background.visitHomepage(); // 
});

// Test case 
When('I fill in field Username {string}', (username) => {
    login.fillUsername(username); 
});

When('I fill in field Password {string}', (password) => {
    login.fillPassword(password); 
});

When('I press login button for login', () => {
    login.clickLoginButton();
});

// verify untuk login tidak valid
Then('I should see an error message {string}', (message) => {
    login.verifyErrorMessage(message); 
});

// verify untuk login valid
Then('I should be redirected to the inventory page', () => {
    login.verifySuccess();
});
