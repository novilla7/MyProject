Feature: Log Out User

    As a User
    I want to log in with my account
    So that I can access my personal dashboard

    Scenario: Successful Log Out User
        Given I visit the website homepage
        When I click Login menu
        And I fill up form Email "siti@gmail.com"
        And I fill up form Password "password123"
        And I click login button for logout
        Then I Successful login

        When I click logout button
        Then I successful logout account 