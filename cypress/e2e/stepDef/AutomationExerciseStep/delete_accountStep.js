import {Delete_account} from "../../pageObject/AutomationExercisePage/delete_accountPage"
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'


// Test Case Delete Data
Given('I open the website homepage', () => {
    Delete_account.visitHomepage(); 
});

When('I select the Login menu', () => {
    Delete_account.clickLoginMenu();
});

Then('I can view Login pages', () => {
    Delete_account.verifyLoginPage()
})

When('I enter my email as {string}', (email) => {
    Delete_account.fillLoginForm_email(email);
});

When('I enter my password as {string}', (password) => {
    Delete_account.fillLoginForm_password(password);
});

When('I press the login button', () => {
    Delete_account.clickLoginButton()
})

Then('I should see the dashboard', () => {
    Delete_account.verifyAlertSuccess();
});

When('I click Delete menu', () => {
    Delete_account.Delete()
})

Then('I Successful Delete my account', () => {
    Delete_account.verifyDelete()
})
