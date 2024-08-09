Feature: Log Out Account

    As a User
    I want to logout from my account
    So I success logout

    Scenario: Log Out Account
        Given I visit login page
        When I fill form user name "standard_user"
        And I fill in form passwords "secret_sauce"
        And I click login button for log in saucedemo
        Then I should be redirected to the inventory pages
        When I click side menu button
        And I click Logout button
        Then I redirected to the login page
