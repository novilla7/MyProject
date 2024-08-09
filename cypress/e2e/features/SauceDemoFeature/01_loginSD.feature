Feature: Login
  As a user
  I want to log in with my account
  So that I can access my personal dashboard

  Background:
    Given I visit website Homepage

  Scenario Outline: Login with invalid data
    When I fill in field Username "<Username>"
    And I fill in field Password "<Password>"
    And I press login button for login
    Then I should see an error message "<Message>"

  Examples:
    | Username        | Password       | Message                                                                      |
    | invalid_user    | wrong_password | Epic sadface: Username and password do not match any user in this service    |
    | wrong_username  | secret_sauce   | Epic sadface: Username and password do not match any user in this service    |
    |                 | secret_sauce   | Epic sadface: Username is required                                           |
    | standard_user   |                | Epic sadface: Password is required                                           |
    | locked_out_user | secret_sauce   | Epic sadface: Sorry, this user has been locked out                           |
    |                 |                | Epic sadface: Username and Password is required                              |

  Scenario: Login with valid data
    When I fill in field Username "standard_user"
    And I fill in field Password "secret_sauce"
    And I press login button for login
    Then I should be redirected to the inventory page
