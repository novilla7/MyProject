Feature: Delete Account

    As a user
    I want to delete my account
    So I can successfully delete my account

    Scenario: Successfully delete account
        Given I open the website homepage
        When I select the Login menu
        Then I can view Login pages
        When I enter my email as "siti@gmail.com"
        And I enter my password as "password123"
        And I press the login button
        Then I should see the dashboard

        When I click Delete menu
        Then I Successful Delete my account
