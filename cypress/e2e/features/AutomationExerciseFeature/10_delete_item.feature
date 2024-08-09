Feature: Delete Item

    As a user 
    I want to Delete account
    So i successful delete item

    Scenario: Delete Item from shopping cart
        Given I visit in the website
        When I click menu login page
        And I input email "siti@gmail.com"
        And I input password "password123"
        And I click login button for delete
        Then i successful login
        When I add item to the shopping cart
        Then I successful add item to shopping cart
        When I click view cart
        Then I can see all the items added to the shopping cart
        When I click the item to delete
        Then I Successful delete item
