const BASE_URL = "https://automationexercise.com"

// Test Case Background Invalid Data
class Background_Register {
    static visit_Home() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(BASE_URL)
        cy.url().should('include', 'automationexercise.com')
        cy.wait(3000)
    }

    static click_signUP() {
        cy.xpath('//a[@href="/login"]').click()
        
    }

    static verify_signUp(){
        cy.wait(2000);
        cy.url().should('include', '/login');
    }
}

// Test Case Register Invalid Data
class Register_invalid {
    static signUp_page(){
        cy.wait(2000);
        cy.url().should('include', '/login');
        cy.xpath('//h2[text()="New User Signup!"]').should('exist')
    }

    static fill_Name(Name) {
        if (Name) {
            cy.xpath('//input[@data-qa="signup-name"]').click().clear().type(Name);
        }
    }
    
    static fill_Email(Email_Address) {
        if (Email_Address) {
            cy.xpath('//input[@data-qa="signup-email"]').click().clear().type(Email_Address);
        }
    }

    static clickSignUp() {
        cy.get('[data-qa="signup-button"]').click();
    }

    static verifyAlert(Message) {
        cy.on('window:alert', (str) => {
          expect(str).to.exist;
          expect(str).to.contain(Message);
        });
        
      }
      
}      


// Test Case Register with missing required fields
class Register_required {
    static signUp_page2(){
        cy.wait(2000);
        cy.url().should('include', '/login');
        cy.xpath('//h2[text()="New User Signup!"]').should('exist')
    }

    static fill_Username_Name_required(name) {
        cy.xpath('//input[@data-qa="signup-name"]').click().clear().type(name);
    }

    static fill_Username_Email_required(email_address) {
        cy.xpath('//input[@data-qa="signup-email"]').click().clear().type(email_address);
    }

    static clickSignUp() {
        cy.xpath('//button[@data-qa="signup-button"]').click();
    }

    static verifyAccountPage() {
        cy.xpath('//b[contains(text(), "Enter Account Information")]').should('be.visible');
        cy.url().should('include', 'automationexercise.com/signup');
    }


    static fill_Account(Field_Name, Invalid_Data) {
    let fieldSelector;
    
    if (Field_Name === "Name") {
        fieldSelector = '#name';
    } else if (Field_Name === "Password") {
        fieldSelector = '#password';
    } else if (Field_Name === "First name") {
        fieldSelector = '#first_name';
    } else if (Field_Name === "Last name") {
        fieldSelector = '#last_name';
    } else if (Field_Name === "Address") {
        fieldSelector = '#address1';
    } else if (Field_Name === "State") {
        fieldSelector = '#state';
    } else if (Field_Name === "City") {
        fieldSelector = '#city';
    } else if (Field_Name === "Zipcode") {
        fieldSelector = '#zipcode';
    } else if (Field_Name === "Mobile Number") {
        fieldSelector = '#mobile_number';
    }

        if (Invalid_Data) {
        cy.get(fieldSelector).clear().type(Invalid_Data);
    }
}

    static clickSignUp_Button() {                           
        cy.get('[data-qa="create-account"]').click();
    }

    static verifyErrorRegister(expectedMessage) {                                      
        cy.on('window:alert', (Message) => {
            expect(Message).to.contain(expectedMessage);
          });
          
        }
}


    
    

// Test Case Register Valid Data
class Register_valid {
    static signUp_page3(){
        cy.wait(2000);
        cy.url().should('include', '/login');
        cy.xpath('//h2[text()="New User Signup!"]').should('exist')
    }

    static fill_Username_Name(Name) {
        cy.xpath('//input[@data-qa="signup-name"]').click().type(Name)     
    }

    static fill_Username_Email(Email_Address) {    
        cy.xpath('//input[@data-qa="signup-email"]').click().type(Email_Address)
    }

    static clickSignUp() {                                                
        cy.xpath('//button[@data-qa="signup-button"]').click()
    }

    static verifyAccountPage() {                                          
        cy.xpath('//b[contains(text(), "Enter Account Information")]').should('be.visible')
        cy.url().should('include', 'automationexercise.com/signup')
    }

    static select_Gender() {
        cy.get('#id_gender2').click()
    }

    static fill_AccountName(name){
        cy.get('#name').clear().type(name)
    }

    static fill_AccountEmail(email){
        cy.get('#email').should('have.value', email)
    }

    static fill_AccountPasword(password){
        cy.get('#password').clear().type(password)
    }

    static select_Days(days){
        cy.get('#days').select(days).should('have.value', days)
    }

    static select_Months(months){
        cy.get('#months').select(months).should('have.value', '6')
    }

    static select_Years(years){
        cy.get('#years').select(years).should('have.value', years)
    }

    static fill_AccountFirstName(first_name){
        cy.get('#first_name').type(first_name)
    }

    static fill_AccountLastName(last_name){
        cy.get('#last_name').type(last_name)
    }

    static fill_AccountCompany(company){
        cy.get('#company').type(company)
    }

    static fill_AccountAddress(address){
        cy.get('#address1').type(address)
    }

    static select_Country(country){
        cy.get('#country').select(country).should('have.value', country)
    }

    static fill_AccountState(state){
        cy.get('#state').type(state)
    }

    static fill_AccountCity(city){
        cy.get('#city').type(city)
    }

    static fill_AccountZipcode(zipcode){
        cy.get('#zipcode').type(zipcode)
    }

    static fill_AccountMobileNumber(mobile_number){
        cy.get('#mobile_number').type(mobile_number)
    }



    static clickSignUp_valid() {                           
        cy.get('[data-qa="create-account"]').click();
    }

    static verifySuccessRegister() {                                       
        cy.get('b').should('have.text', 'Account Created!')
        
    }
}

// Test Case Register with existing data
class Register_existing{
    static signUp_page4(){
        cy.wait(2000);
        cy.url().should('include', '/login');
        cy.xpath('//h2[text()="New User Signup!"]').should('exist')
    }

    static fill_Username_Name_Existing(Name){
        cy.xpath('//input[@data-qa="signup-name"]').click().type(Name)     
    }

    static fill_Username_Email_Existing(Email_Address){    
        cy.xpath('//input[@data-qa="signup-email"]').click().type(Email_Address)
    }

    static clickSignUp_existing(){
        cy.get('[data-qa="signup-button"]').click();
    }

    static verifyAlertExisting(message) {                                       
        cy.contains(message)
        .should('have.text', 'Email Address already exist!')
        
    }
}


export default { Register_invalid, Register_valid, Background_Register, Register_existing, Register_required }

