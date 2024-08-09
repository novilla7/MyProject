Feature: Download

    As a User
    I want to download payment invoice
    So i successful download payment invoice

    Scenario: Successful Download Payment Invoice
        Given I visit the website homepage for download invoice
        When I click Login menu button for download invoice
        And I fill in form Email "siti@gmail.com" for download invoice
        And I fill in form Password "password123" for download invoice
        And I click login button for download invoice
        Then I Successfuly login for download invoice
        When I click add cart Button for download invoice
        Then I Successfuly add item to shopping cart for download invoice

        When I click view cart for download invoice
        Then I can view item in shopping cart page for download invoice
        
        When I click Proceed Checkout button for download invoice
        Then I can view Address Detail for download invoice
        When I add Comment "Thank You"
        When I click Place Order button for download invoice
        Then I can view Payment Pages for download invoice

        When I fill input Name on Card "Siti Sumanti"
        And I fill input Card Number "9876543210987654"
        And I fill Input CVC "123"
        And I fill input Expiration "12"
        And I fill input Year "2024"
        And I click Pay and Confirm Order button for download invoice
        Then I can view Order Placed for download invoice


        When I click Download Invoice Button
        Then I successful save payment invoice 