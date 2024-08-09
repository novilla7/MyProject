Feature: Login User

    As a User
    I want to log in with my account
    So that I can access my personal dashboard

Background: Already on the login page
    Given I visit the website homepage
    When I click sign up or Login menu
    Then I Redirect to sign up or login menu

Scenario Outline: Login with invalid data
    Given I am already On the Sign Up or Login menu
    When I fill in form Email Address "<Email_Address>" 
    And I fill in form Password "<Password>"
    And I press the login button for login
    Then I see an error "<Message>"

    Examples:
        | Email_Address         |   Password        |   Message                                 |
        |                       |   password123     |   Harap isi bidang ini.                   |
        | siti@gmail.com        |                   |   Harap isi bidang ini.                   |
        | sitigmail.com         |   password123     |   Sertakan '@' dan '.' pada alamat email. |
        | sitigmailcom          |   password123     |   Sertakan '@' dan '.' pada alamat email. |
        | siti@gmail.com        |   qwrertrytyu     |   Your email or password is incorrect!    |
        |                       |                   |   Harap isi bidang ini.                   |
        | belumDaftar@gmail.com |   test12345       |   Your email or password is incorrect!    |

Scenario: Login with valid data
    Given I am already oN the Sign Up or Login menu
    When I fill in form Email
    And I fill in form Password
    And I click login button for login
    Then I Successful login

