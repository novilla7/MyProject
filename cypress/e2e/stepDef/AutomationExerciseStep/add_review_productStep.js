import {visit_Home, Add_review_without_login, Add_review_with_invalid_data, Add_review_with_login} from "../../pageObject/AutomationExercisePage/add_review_productPage"
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'


// Test case Add review without Login
Given('I visiT the home page', () => {
    Add_review_without_login.visitHomepage()
});

When('I Click View Product Button', () => {
    Add_review_without_login.Click_viewProduct()
})

Then('I can view write your review', () => {
    Add_review_without_login.view_WriteYourReview()
})

When('I enter my name {string}', (name) => {
    Add_review_without_login.Input_YourName(name)
})

When('I enter my email address {string}', (email) => {
    Add_review_without_login.Input_EmailAddress(email)
})

When('I write a review in the text area {string}', (text) => {
    Add_review_without_login.Input_AddReview(text)
})

When('I press the submit button', () => {
    Add_review_without_login.Submit_AddReview()
})

Then('I get alert Error {string}', () => {
    Add_review_without_login.Unsuccessful_AddReview()
})






// Test case Add review with invalid name while logged in
Given('I Visit the home page', () => {
    Add_review_with_invalid_data.visitHomepage()
});

When('I Click the Login page', () => {
    Add_review_with_invalid_data.clickLoginMenu()
})

When('I can view login pages', () => {
    Add_review_with_invalid_data.viewLoginPage()
})

When('I enter my email As {string}', (email_valid) => {
    Add_review_with_invalid_data.LoginValid_email(email_valid)
})

When('I enter my password As {string}', (password_valid) => {
    Add_review_with_invalid_data.LoginValid_password(password_valid)
})

When('I click the login button', () => {
    Add_review_with_invalid_data.clickLoginButton()
})

Then('I should be redirected to my dashboard', () => {
    Add_review_with_invalid_data.verifyAlertSuccess()
})

When('I Click View Product Buttons', () => {
    Add_review_with_invalid_data.Click_viewProduct()
})

Then('I can view write your reviews', () => {
    Add_review_with_invalid_data.view_WriteYourReview()
})

When('I fill in the name field with {string}', (your_name) => {
    Add_review_with_invalid_data.Input_YourName(your_name)
})

When('I provide the email address {string}', (email_Address) => {
    Add_review_with_invalid_data.Input_EmailAddress(email_Address)
})

When('I type {string} in the review text box', (text) => {
    Add_review_with_invalid_data.Input_AddReview(text)
})

When('I submit the review', () => {
    Add_review_with_invalid_data.Submit_AddReview()
})

Then('I get alert error {string}', (message) => {
    Add_review_with_invalid_data.Unsuccessful_AddReview(message)
})




// Test case Add review with Login
Given('I Visit The home page', () => {
    Add_review_with_login.visitHomepage()
});

When('I click the Login Page', () => {
    Add_review_with_login.clickLoginMenu()
})

When('I input my email {string}', (email_valid) => {
    Add_review_with_login.LoginValid_email(email_valid)
})

When('I input my password {string}', (password_valid) => {
    Add_review_with_login.LoginValid_password(password_valid)
})

When('I click the login button for Add review', () => {
    Add_review_with_login.clickLoginButton()
})

Then('I should be taken to my dashboard', () => {
    Add_review_with_login.verifyAlertSuccess()
})

When('I open a product page', () => {
    Add_review_with_login.Click_viewProduct()
})

Then('I can see the review section', () => {
    Add_review_with_login.view_WriteYourReview()
})

When('I fill in the name {string}', (name) => {
    Add_review_with_login.Input_YourName(name)
})

When('I enter the email {string}', (email) => {
    Add_review_with_login.Input_EmailAddress(email)
})

When('I write the review {string}', (text) => {
    Add_review_with_login.Input_AddReview(text)
})

When('I hit the submit button', () => {
    Add_review_with_login.Submit_AddReview()
})

Then('I should see a message {string}', (message) => {
    Add_review_with_login.Successful_AddReview(message)
})