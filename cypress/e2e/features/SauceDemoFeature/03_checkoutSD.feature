Feature: Checkout Item

    As a user
    I want to checkout an item
    So that I can successfully complete the purchase

Background: Already on the login page
    Given I visit website homepage saucedemo
    When I fill in the username form with "standard_user"
    And I fill in the password form with "secret_sauce"
    And I click the login button to login to saucedemo
    Then I should be redirected to the Inventory page

Scenario: Checkout with invalid data information
    Given I am on the Inventory page
    When I add an item to the cart
    Then I can verify add item success add "1"
    When I navigate to the shopping cart
    Then I verify the item is in the cart 
    When I initiate the checkout process
    And I input the first name "<firstName>"
    And I input the last name "<lastName>"
    And I input the Zip code or Postal code "<zipCode>"
    And I click the continue button 
    Then I get an alert error "<message>"
Examples:
    | firstName | lastName  | zipCode   | message                                                       |
    | 12345     | Sumanti   | 12345     | Epic sadface: First Name required letters                     |
    | ,./       | Sumanti   | 12345     | Epic sadface: First Name required letters                     |
    | Siti      | 12345     | 12345     | Epic sadface: Last Name required letters                      |
    | Siti      | ,./       | 12345     | Epic sadface: Last Name required letters                      |
    | Siti      | Sumanti   | abcd      | Epic sadface: Zip code/Postal code required numbers           |
    | Siti      | Sumanti   | ,./       | Epic sadface: Zip code/Postal code required numbers           |
    |           | Sumanti   | 12345     | Error: First Name is required                                 |
    | Siti      |           | 12345     | Error: Last Name is required                                  |
    | Siti      | Sumanti   |           | Error: Postal Code is required                                |
    |           |           |           | Epic sadface: Error: All field is required                    |

Scenario: Checkout with valid data information
    Given I am on the Inventory page
    When I add an item to the cart
    Then I can verify add item success add "1"
    When I navigate to the shopping cart
    Then I verify the item is in the cart 
    When I initiate the checkout process
    And I input the first name "Siti"
    And I input the last name "Sumanti"
    And I input the Zip code or Postal code "12345"
    And I click the continue button 
    Then I go to the payment information page
    When I click finish button
    Then I complete the item checkout

Scenario: Checkout multiple items in the shopping cart
    Given I am on the Inventory page
    When I add an item to the cart
    And I add an items to the cart
    Then I can verify add item success add "2"
    When I navigate to the shopping cart
    Then I verify the item is in the cart 
    When I initiate the checkout process
    And I input the first name "Siti"
    And I input the last name "Sumanti"
    And I input the Zip code or Postal code "12345"
    And I click the continue button 
    Then I go to the payment information page
    When I click finish button
    Then I successfully checkout all items
