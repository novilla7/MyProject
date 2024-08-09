import { LogOut } from "../../pageObject/SauceDemoPage/logoutPage";
const {Given, When, Then} = require ('@badeball/cypress-cucumber-preprocessor');
import 'cypress-xpath'


Given('I visit login page', () => {
    LogOut.visitHomepage()
})

When('I fill form user name {string}', (username) => {
    LogOut.fillUsername(username)
})

When('I fill in form passwords {string}', (password) => {
    LogOut.fillPassword(password)
})

When('I click login button for log in saucedemo', () => {
    LogOut.clickLoginButton()
})

Then('I should be redirected to the inventory pages', () => {
    LogOut.verifySuccess()
})

When('I click side menu button', () => {
    LogOut.click_sidebarButton()
})

When('I click Logout button', () => {
    LogOut.clickLogOutButton()
})

Then('I redirected to the login page', () => {
    LogOut.verifySuccessLogOut()
})