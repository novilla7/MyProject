Feature: Navigation

    As a User
    I want to switch between menus
    So that I can explore various sections of the website

Scenario: Navigate to Home
    Given I Am on the website homepage
    When I click on the home menu
    Then I should see the homepage content

Scenario: Navigate to Product
    Given I AM on the website homepage
    When I click on the product menu
    Then I should see the product content

Scenario: Navigate to Cart
    Given I am On the website homepage
    When I click on the cart menu
    Then I should see the cart content

Scenario: Navigate to Contact Us
    Given I am ON the website homepage
    When I click on the contact us menu
    Then I should see the contact us content
