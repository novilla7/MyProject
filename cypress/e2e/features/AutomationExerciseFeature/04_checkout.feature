Feature: Checkout

    As a User
    I want to add item to cart
    So I can Checkout item

    Background: Already on the login page
        Given I visit the website homepage for login valid
        When I click Sign Up or Login menU
        And I fill in form Email "siti@gmail.com" for checkout
        And I fill in form Password "password123" for checkout
        And I click login button
        Then I redirect to homepage

    Scenario Outline: Input Invalid Payment while Checkout Single Item with a logged-in account
        Given I am already on the homepage
        When I click add to cart Button
        Then I Successful add item to shopping cart

        When I click view cart invalid
        Then I can view item in shopping cart
        
        When I click Proceed To Checkout button
        Then I can view Address Details
        When I add Comment Text "Thankyou!"
        When I click Place Order
        Then I can view Payment Page

        When I input Name on Card as "<Name_on_Card>"
        And I input Card Number as "<Card_Number>"
        And I Input CVC as "<CVC>"
        And I input Expiration as "<Expiration>"
        And I input Year as "<Year>"
        And I click Pay and Confirm Order button
        Then I get an alert Error "<Message>"

    Examples:
        | Name_on_Card  | Card_Number      | CVC   | Expiration | Year  | Message                                 |
        |               | 9876543210987654 | 123   | 12         | 2024  | Harap isi bidang ini.                   |
        | Siti Sumanti  |                  | 123   | 12         | 2024  | Harap isi bidang ini.                   |
        | Siti Sumanti  | 9876543210987654 |       | 12         | 2024  | Harap isi bidang ini.                   |
        | Siti Sumanti  | 9876543210987654 | 123   |            | 2024  | Harap isi bidang ini.                   |
        | Siti Sumanti  | 9876543210987654 | 123   | 12         |       | Harap isi bidang ini.                   |
        | 12345         | 9876543210987654 | 123   | 12         | 2024  | Bidang tidak sesuai.                    |
        | ,./           | 9876543210987654 | 123   | 12         | 2024  | Bidang tidak sesuai.                    |
        | Siti Sumanti  | abcd             | 123   | 12         | 2024  | Bidang tidak sesuai.                    |
        | Siti Sumanti  | ,./              | 123   | 12         | 2024  | Bidang tidak sesuai.                    |
        | Siti Sumanti  | 9876543210987654 | abc   | 12         | 2024  | Bidang tidak sesuai.                    |
        | Siti Sumanti  | 9876543210987654 | ,./   | 12         | 2024  | Bidang tidak sesuai.                    |
        | Siti Sumanti  | 9876543210987654 | 123   | ab         | 2024  | Bidang tidak sesuai.                    |
        | Siti Sumanti  | 9876543210987654 | 123   | ,.         | 2024  | Bidang tidak sesuai.                    |
        | Siti Sumanti  | 9876543210987654 | 123   | 12         | abcd  | Bidang tidak sesuai.                    |
        | Siti Sumanti  | 9876543210987654 | 123   | 12         | ,./-  | Bidang tidak sesuai.                    |
        |               |                  |       |            |       | Harap isi bidang ini.                   |

   Scenario: Input Valid Payment Checkout Single Item with a logged-in account
        Given I am already on the Homepage
        When I click add cart Button
        Then I Successfuly add item to shopping cart

        When I click view cart valid
        Then I can view item in shopping cart page
        
        When I click Proceed Checkout button
        Then I can view Address Detail
        When I add Comment as "Thank You"
        When I click Place Order button
        Then I can view Payment Pages

        When I fill input Name on Card as "Siti Sumanti"
        And I fill input Card Number as "9876543210987654"
        And I fill Input CVC as "123"
        And I fill input Expiration as "12"
        And I fill input Year as "2024"
        And I click Pay and Confirm Order
        Then I can view Order Placed

    Scenario: Checkout Multiple Item with a logged-in account
        Given I am already on the HomePagE
        When I click add to cart Button for item 1
        And I click continue shopping
        And I click add to cart Button for item 2
        Then I Successfully added add item to shopping cart
        When I click view cart buttons
        Then I Successful views item in shopping cart

        When I click Proceed Checkout buttonn
        Then I can views Address Detail
        When I input Comments as "Thank You"
        When I click Place Order buttonn
        Then I can views Payment Pages

        When I enter Name on Card as "Siti Sumanti"
        And I enter Card Number as "987654321098765"
        And I enter CVC as "123"
        And I enter Expiration as "12"
        And I enter Year as "2024"
        And I click Pay & Confirm Order button
        Then I successful view Order Placed



