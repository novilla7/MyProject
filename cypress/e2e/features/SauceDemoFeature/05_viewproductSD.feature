Feature: View Product Details

    As a user
    I want to view the details of a product
    So that I can make an informed decision before purchasing it

    Scenario: View Product Details
        Given I visit saucedemo homepage
        When I enter The username "standard_user"
        And I Enter the password "secret_sauce"
        And I click the Login Button
        Then I should be logged in to the Saucedemo Homepage
        When I click on a product
        Then I should see the product details