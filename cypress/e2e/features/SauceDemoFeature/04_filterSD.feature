Feature: Filter Item

  As a user
  I want to filter items on Saucedemo
  So that I can view items in a specific order

  Background: Already login
    Given I am on the Saucedemo login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click the Login button
    Then I should be logged in to the Saucedemo homepage

  Scenario Outline: Filter items
    Given I am on the Inventory Pages
    When I select the filter "<filterOption>"
    Then the items should be sorted by "<expectedResult>"

  Examples:
    | filterOption           | expectedResult                    |
    | Name (A to Z)          | alphabetically from A to Z        |
    | Name (Z to A)          | alphabetically from Z to A        |
    | Price (low to high)    | by price from low to high         |
    | Price (high to low)    | by price from high to low         |
