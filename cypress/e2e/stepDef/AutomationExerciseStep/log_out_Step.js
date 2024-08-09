import {Logout_account} from "../../pageObject/AutomationExercisePage/log_out_Page"
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'


// Test case background Already logged in
Given('I visit the website homepage for login', () => {
    Logout_account.visitHomepage(); 
});

When('I click Login menu', () => {
    Logout_account.clickLoginMenu();
});

When('I fill up form Email {string}', (email) => {
    Logout_account.fillLoginForm_email(email);
});

When('I fill up form Password {string}', (password) => {
    Logout_account.fillLoginForm_password(password);
});

When('I click login button for logout', () => {
    Logout_account.clickLoginButton()
})

Then('I Successful login for delete', () => {
    Logout_account.verifyAlertSuccess();
});


// Test Case Log Out Account
When('I click logout button', () => {
    Logout_account.click_logout_button()
})

Then('I successful logout account', () => {
    Logout_account.verifyLogOut()
})
