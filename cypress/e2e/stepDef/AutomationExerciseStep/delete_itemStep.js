import {DeleteItem} from "../../pageObject/AutomationExercisePage/delete_itemPage"
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'


// Test Case Delete Item
Given('I visit in the website', () => {
    DeleteItem.visitHomepage()
})

When('I click menu login page', () => {
    DeleteItem.clickLoginMenu()
})

When('I input email {string}', (email) => {
    DeleteItem.LoginValid_email(email)
})

When('I input password {string}', (password) => {
    DeleteItem.LoginValid_password(password)
})

When('I click login button for delete', () => {
    DeleteItem.clickLoginButton()
})

Then('i successful login', () => {
    DeleteItem.verifyAlertSuccess()
})

When('I add item to the shopping cart', () => {
    DeleteItem.Click_AddToCart()
})

Then('I successful add item to shopping cart', () => {
    DeleteItem.verifyAlertSuccess()
})

When('I click view cart', () => {
    DeleteItem.Click_ViewCart()
})

Then('I can see all the items added to the shopping cart', () => {
    DeleteItem.verifyAlertShoppingCartPage()
})

When('I click the item to delete', () => {
    DeleteItem.Click_ItemToDelete()
})

Then('I Successful delete item', () => {
    DeleteItem.verifyAlertSuccessDeleteItem()
})