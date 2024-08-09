import { SearchInvalid, SearchValid } from "../../pageObject/AutomationExercisePage/searchPage";
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'


// Test Case Search Item Invalid
Given('I am on the website homepage for Search Item', () => {
    SearchInvalid.visitHomepage(); 
});

When('I navigate to the product menu', () => {
    SearchInvalid.Click_ProductMenu()
})

Then('I should see the search box for invalid items', () => {
    SearchInvalid.verifySearchBox()
})

When('I input an invalid search term {string}', (Search_Invalid) => {
    SearchInvalid.Input_InvalidSearch(Search_Invalid)
})

When('I click Search button', () => {
    SearchInvalid.Click_SearchButton()
})

Then('I should see no matching results', () => {
    SearchInvalid.verifyAlertUnsuccessful()
})



// Test Case Search Item Valid
Given('I am on the website homepage For Search Item', () => {
    SearchValid.visitHomepage(); 
});

When('I access the product menu', () => {
    SearchValid.Click_ProductMenu()
})

Then('I should locate the search box for valid items', () => {
    SearchValid.verifySearchBox()
})

When('I input {string} in the search box', (Search_valid) => {
    SearchValid.Input_ValidSearch(Search_valid)
})

When('I click Search button with valid data', () => {
    SearchValid.Click_SearchButton()
})

Then('I should see the search results for Dress', () => {
    SearchValid.verifyAlertSuccessful()
})