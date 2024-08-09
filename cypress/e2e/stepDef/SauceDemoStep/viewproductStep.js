import { ViewProduct } from "../../pageObject/SauceDemoPage/viewproductPage"; 
const {Given, When, Then} = require ('@badeball/cypress-cucumber-preprocessor')
import 'cypress-xpath'


Given('I visit saucedemo homepage', () => {
    ViewProduct.visitHomepage()
})

When('I enter The username {string}', (username) => {
    ViewProduct.fillUsername(username)
})

When('I Enter the password {string}', (password) => {
    ViewProduct.fillPassword(password)
})

When('I click the Login Button', () => {
    ViewProduct.clickLoginButton()
})

Then('I should be logged in to the Saucedemo Homepage', () => {
    ViewProduct.verifySuccess()
})

When('I click on a product', () => {
    ViewProduct.clickItem()
})

Then('I should see the product details', () => {
    ViewProduct.verifyViewProduct()
})