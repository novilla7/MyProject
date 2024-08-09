import {List_User, Single_User, Single_User_Not_Found, List_Resource, Single_Resource, Single_Resource_Not_Found, 
    Create, Update, Delete, Registrasi_Successfully, Unsuccsessfull_Registrasi, Login_Successfully, 
    Login_Unsuccessfully, Delay_Response, List_User_Not_Found, List_Resource_Not_Found, Create_Missing_Required} from "../pageObject_API/full_reqresPage"
const {When, Then} = require("@badeball/cypress-cucumber-preprocessor")

// Test Case LIST USERS
When('make a request to the users valid data List Users', () => {
    List_User.req_ListUsers()
})

Then('response status code should be 200 List Users', () => {
    List_User.status_ListUsers()
})

Then('response status body data should match key with value List Users', () => {
    List_User.status_body_ListUsers()
})

// Test Case LIST USERS NOT FOUND
When('make a request to the users valid data List Users Not Found', () => {
    List_User_Not_Found.req_List_User_Not_Found()
})

Then('response status code should be 404 List Users Not Found', () => {
    List_User_Not_Found.status_List_User_Not_Found()
})

Then('response status body data should match key with Value List Users', () => {
    List_User_Not_Found.status_body_List_User_Not_Found()
})


// Test Case SINGLE USERS
When('make a request to the users valid data Single Users', () => {
    Single_User.req_SingleUsers()
})

Then('response status code should be 200 Single User', () => {
    Single_User.status_SingleUsers();
})

Then('response status body data should match key with value Single Users', () => {
    Single_User.status_body_SingleUsers();
})

// Test Case SINGLE USERS NOT FOUND
When('make a request to the users valid data Single Users Not Found', () => {
    Single_User_Not_Found.req_Single_User_Not_Found();
})

Then('response status code should be 404 Single User Not Found', () => {
    Single_User_Not_Found.status_Single_User_Not_Found();
})

Then('response status body data should empty Search Single User', () => {
    Single_User_Not_Found.status_body_Single_User_Not_Found();
})

// Test Case LIST RESOURCE
When('make a request to the users valid data List Resource', () => {
    List_Resource.req_List_Resource();
})

Then('response status code should be 200 List Resource', () => {
    List_Resource.status_List_Resource();
})

Then('response status body data should match Key and Value List Resource', () => {
    List_Resource.status_body_List_Resource();
})

// Test Case LIST RESOURCE NOT FOUND
When('make a request to the users valid data List Resource Not Found', () => {
    List_Resource_Not_Found.req_List_Resource_Not_Found();
})

Then('response status code should be 404 List Resource Not Found', () => {
    List_Resource_Not_Found.status_List_Resource_Not_Found();
})

Then('response status body data should Match Key and Value List Resource', () => {
    List_Resource_Not_Found.status_body_List_Resource_Not_Found();
})

// Test Case SINGLE RESOURCE 
When('make a request to the users valid data Single Resource' ,() => {
    Single_Resource.req_Single_Resource();
})

Then('response status code should be 200 Single Resource', () => {
    Single_Resource.status_Single_Resource();
})

Then('response status body data should match Key and Value Single Resource', () => {
    Single_Resource.status_body_Single_Resource();
})

// Test Case SINGLE RESOURCE NOT FOUND
When('make a request to the users valid data Single Resource Not Found', () => {
    Single_Resource_Not_Found.req_Single_Resource_Not_Found();
})

Then('response status code should be 404 Single Resource', () => {
    Single_Resource_Not_Found.status_Single_Resource_Not_Found();
})

Then('response status body data should empty Single Resource', () => {
    Single_Resource_Not_Found.status_body_Single_Resource_Not_Found();
})

// Test Case CREATE 
When('make a request to create user', () => {
    Create.req_Create()
})

Then('response status code should be 201 Create', () =>{
    Create.status_Create()
})

Then('response status body data should key and value', () => {
    Create.status_body_Create()
})

// Test Case Create Missing Required Fields
When('make a request to create user with missing required', () => {
    Create_Missing_Required.req_Create_Missing()
})

Then('response status code should be 400 Create', () =>{
    Create_Missing_Required.status_Create_Missing()
})

Then('response status body data should key And value', () => {
    Create_Missing_Required.status_body_Create_Missing()
})


// Test Case UPDATE 
When('make a request to update data', () => {
    Update.req_Update()
})

Then('response status code should be 200 update', () => {
    Update.status_Update()
})

Then('response status body data should key and value Update', () => {
    Update.status_body_update()
})

// Test Case DELETE
When('make a request to delete data', () => {
    Delete.req_Delete()
})

Then('response status code should be 204 update', () => {
    Delete.status_Delete()
})

Then('response status body data should empty', () => {
    Delete.status_body_Delete()
})

// Test Case Succsessfull Registrasi

When('make a request to Succsessfull Registrasi', () => {
    Registrasi_Successfully.req_Registrasi_Successfully()
})

Then('response status code should be 200 Succsessfull Registrasi', () => {
    Registrasi_Successfully.status_Registrasi_Successfully()
})

Then('response status body data should key and value Succsessfull Registrasi', () => {
    Registrasi_Successfully.status_body_Registrasi_Successfully()
})


// Test Case Unsuccsessfull Registrasi

When('make a request to Unsuccsessfull Registrasi', () => {
    Unsuccsessfull_Registrasi.req_Unsuccsessfull_Registrasi()
})

Then('response status code should be 400 Unsuccsessfull Registrasi', () => {
    Unsuccsessfull_Registrasi.status_Unsuccsessfull_Registrasi()
})

Then('response status body data should key and value Unsuccsessfull Registrasi', () => {
    Unsuccsessfull_Registrasi.status_body_Unsuccsessfull_Registrasi()
})

// Test Case Login Successfully

When('make a request to Login Successfully', () => {
    Login_Successfully.req_Login_Successfully()
})

Then('response status code should be 200 Login Successfully', () => {
    Login_Successfully.status_Login_Successfully()
})

Then('response status body data should key and value Login Successfully', () => {
    Login_Successfully.status_body_Login_Successfully()
})

// Test Case Login Unsuccessfully

When('make a request to Login Unsuccessfully', () => {
    Login_Unsuccessfully.req_Login_Unsuccessfully()
})

Then('response status code should be 400 Login Unsuccessfully', () => {
    Login_Unsuccessfully.status_Login_Unsuccessfully()
})

Then('response status body data should key and value Login Unsuccessfully', () => {
    Login_Unsuccessfully.status_body_Login_Unsuccessfully()
})

// Test Case Delay Response

When('make a request to Delay Response', () => {
    Delay_Response.req_Delay_Response()
})

Then('response status code should be 200 Delay Response', () => {
    Delay_Response.status_Delay_Response()
})

Then('response status body data should key and value Delay Response', () => {
    Delay_Response.status_body_Delay_Response()
})