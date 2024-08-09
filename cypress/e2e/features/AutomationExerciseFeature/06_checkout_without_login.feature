Feature: Checkout Without Login

    As a User
    I want to add item to cart
    So I unsuccessful checkout

    Scenario: Checkout without login
        Given I visited the main site
        When I clicked add to cart Button
        Then I Successfully add item to shopping cart
        When I click view cart button
        Then I can views item in shopping cart page
        When I click Proceed to checkout
        Then I Unsuccessful checkout
