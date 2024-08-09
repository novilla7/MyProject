Feature: List Users

    As a QA
    I want to search user data
    So I can find valid user data registered

    Scenario: Search List Users
        When make a request to the users valid data List Users
        Then response status code should be 200 List Users
        And  response status body data should match key with value List Users
    
    Scenario: Search List Users NOT FOUND
        When make a request to the users valid data List Users Not Found
        Then response status code should be 404 List Users Not Found
        And  response status body data should match key with Value List Users

    Scenario: Search Single Users
        When make a request to the users valid data Single Users
        Then response status code should be 200 Single User
        And  response status body data should match key with value Single Users
    
    Scenario: Search Single Users NOT FOUND
        When make a request to the users valid data Single Users Not Found
        Then response status code should be 404 Single User Not Found
        And  response status body data should empty Search Single User

    Scenario: List Resource
        When make a request to the users valid data List Resource
        Then response status code should be 200 List Resource
        And  response status body data should match Key and Value List Resource

    Scenario: List Resource NOT FOUND
        When make a request to the users valid data List Resource Not Found
        Then response status code should be 404 List Resource Not Found
        And  response status body data should Match Key and Value List Resource

    Scenario: Single Resource
        When make a request to the users valid data Single Resource
        Then response status code should be 200 Single Resource
        And  response status body data should match Key and Value Single Resource

     Scenario: Search Single Resource NOT FOUND
        When make a request to the users valid data Single Resource Not Found
        Then response status code should be 404 Single Resource
        And  response status body data should empty Single Resource






    Scenario: Create
        When make a request to create user
        Then response status code should be 201 Create
        And  response status body data should key and value

    Scenario: Create Missing Required Fields
        When make a request to create user with missing required
        Then response status code should be 400 Create
        And  response status body data should key And value

    Scenario: Update
        When make a request to update data
        Then response status code should be 200 update
        And  response status body data should key and value Update

    Scenario: Delete
        When make a request to delete data
        Then response status code should be 204 update
        And  response status body data should empty






    Scenario: Register Successful
        When make a request to Succsessfull Registrasi
        Then response status code should be 200 Succsessfull Registrasi
        And  response status body data should key and value Succsessfull Registrasi

    Scenario: Register Unsuccsessfull
        When make a request to Unsuccsessfull Registrasi
        Then response status code should be 400 Unsuccsessfull Registrasi
        And  response status body data should key and value Unsuccsessfull Registrasi





    Scenario: Login Successfully
        When make a request to Login Successfully
        Then response status code should be 200 Login Successfully
        And  response status body data should key and value Login Successfully

    Scenario: Login Unsuccessfully
        When make a request to Login Unsuccessfully
        Then response status code should be 400 Login Unsuccessfully
        And  response status body data should key and value Login Unsuccessfully

     Scenario: Delay Response
        When make a request to Delay Response
        Then response status code should be 200 Delay Response
        And  response status body data should key and value Delay Response