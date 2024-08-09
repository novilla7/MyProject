import {Login_invalid, Login_valid, LoginActions} from "../../pageObject/AutomationExercisePage/loginPage"
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'

// Background: Common steps for all scenarios
Given('I visit the website homepage', () => {
    LoginActions.visitHomepage(); 
});

When('I click sign up or Login menu', () => {
    LoginActions.clickLoginMenu();
});

Then('I Redirect to sign up or login menu', () => {
    LoginActions.signUp_page()
})


// Test Case Login Invalid Data
Given('I am already On the Sign Up or Login menu', () => {
    Login_invalid.signUp_page()
})

When('I fill in form Email Address {string}', (Email_Address) => {
    Login_invalid.LoginEmail(Email_Address);
});

When('I fill in form Password {string}', (Password) => {
    Login_invalid.LoginPassword(Password);
});

When('I press the login button for login', () => {
    Login_invalid.clickLoginButton()
})

Then('I see an error {string}', (Message) => {
    Login_invalid.verifyAlertError(Message);
});


// Test Case Login Valid Data
Given('I am already oN the Sign Up or Login menu', () => {
    Login_valid.signUp_page()
})

When('I fill in form Email', () => {
    Login_valid.LoginValid_email('siti@gmail.com');
});

When('I fill in form Password', () => {
    Login_valid.LoginValid_password('password123');
});

When('I click login button for login', () => {
    Login_valid.clickLoginButton()
})

Then('I Successful login', () => {
    Login_valid.verifyAlertSuccess();
});


