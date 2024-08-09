import {Register_invalid, Register_valid, Background_Register, Register_existing, Register_required} from "../../pageObject/AutomationExercisePage/registerPage"; // Periksa jalur ini
const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor")
import 'cypress-xpath'


// Test Case Background Register
Given('I visit the website home page', () => {
    Background_Register.visit_Home()
})

When('I click Sign Up or Login menu', () => {
    Background_Register.click_signUP()
})

Then('I redirect to sign up or login menu', () => {
    Background_Register.verify_signUp()
})

// Test Case Register Invalid Data
Given('I am already on the Sign Up or Login menu', () => {
    Register_invalid.signUp_page()
})

When('I fill in invalid data Name {string}', (Name) => {
    Register_invalid.fill_Name(Name)
})

When('I fill in invalid data Email Address {string}', (Email_Address) => {
    Register_invalid.fill_Email(Email_Address)
})

When('I click sign up button for invalid data', () => {
    Register_invalid.clickSignUp()
})

Then('I see an error message {string}', (expectedMessage) => {
    Register_invalid.verifyAlert(expectedMessage)
})

// Test Case Register with missing required fields
Given('I am already on the Sign Up or login Menu', () => {
    Register_required.signUp_page2()
})

When('I have entered valid data with name {string}', (name) => {
    Register_required.fill_Username_Name_required(name);
});

When('I have entered valid data with email {string}', (email_address) => {
    Register_required.fill_Username_Email_required(email_address);
});

When('I click the sign up button for incomplete data', () => {
    Register_required.clickSignUp();
});

Then('I direct to register page two', () => {
    Register_required.verifyAccountPage();
});

When('I selected the required field {string}', (Field_Name) => {
    Register_required.fill_Account(Field_Name);
});

When('I Input with invalid data {string}', (Invalid_Data) => {
    Register_required.fill_Account(Invalid_Data);
});

When('I click create account button', () => {
    Register_required.clickSignUp_Button();
});

Then('I see an error {string} indicating the field is required', (Message) => {
    Register_required.verifyErrorRegister(Message);
});




// Test Case Register Valid Data
Given('I am already on the Sign up or login menu', () => {
    Register_valid.signUp_page3()
})

When('I have entered valid data name {string}', (Name) => {
    Register_valid.fill_Username_Name(Name)
})

When('I have entered valid data email {string}', (Email_Address) => {
    Register_valid.fill_Username_Email(Email_Address)
})

When('I click sign up button for valid data', () => {
    Register_valid.clickSignUp()
})

Then('I am directed to enter account information', () => {
    Register_valid.verifyAccountPage()
})

//

When('I select Account Gender Mrs.', () => {
    Register_valid.select_Gender()
})

When('I fill in Account Name {string}', (name) => {
    Register_valid.fill_AccountName(name)
})

When('I fill in Account Email {string}', (email) => {
    Register_valid.fill_AccountEmail(email)
})

When('I fill in Account Password {string}', (password) => {
    Register_valid.fill_AccountPasword(password)
})


When('I selected in Account Day {string}', (days) => {
    Register_valid.select_Days(days)
})

When('I selected in Account Month {string}', (months) => {
    Register_valid.select_Months(months)
})

When('I selected in Account Year {string}', (years) => {
    Register_valid.select_Years(years)
})

When('I fill in Account First Name {string}', (first_name) => {
    Register_valid.fill_AccountFirstName(first_name)
})

When('I fill in Account Last Name {string}', (last_name) => {
    Register_valid.fill_AccountLastName(last_name)
})

When('I fill in Account Company {string}', (company) => {
    Register_valid.fill_AccountCompany(company)
})

When('I fill in Account Address {string}', (address) => {
    Register_valid.fill_AccountAddress(address)
})

When('I selected in Account Country {string}', (country) => {
    Register_valid.select_Country(country)
})

When('I fill in Account State {string}', (state) => {
    Register_valid.fill_AccountState(state)
})

When('I fill in Account City {string}', (city) => {
    Register_valid.fill_AccountCity(city)
})

When('I fill in Account Zipcode {string}', (zipcode) => {
    Register_valid.fill_AccountZipcode(zipcode)
})

When('I fill in Account Mobile Number {string}', (mobile_number) => {
    Register_valid.fill_AccountMobileNumber(mobile_number)
})


//

When('I click Create Account', () => {  
   Register_valid.clickSignUp_valid()
})

Then('I successful register my data', () => {
    Register_valid.verifySuccessRegister()
})

// Test Case Register with existing data
Given('I am Already on the Sign Up or Login menu', () => {
    Register_existing.signUp_page4()
})

When('I fill in name field {string}', (Name) => {
    Register_existing.fill_Username_Name_Existing(Name)
})

When('I attempt to register with existing data email {string}', (Email_Address) => {
    Register_existing.fill_Username_Email_Existing(Email_Address)
})

When('I click sign up button for register with existing data', () => {
    Register_existing.clickSignUp_existing()
})

Then('I receive an error message {string} indicating duplicate registration', (message) => {
    Register_existing.verifyAlertExisting(message)
})


