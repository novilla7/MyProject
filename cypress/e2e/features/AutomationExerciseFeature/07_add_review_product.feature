Feature: Add Review Product

    As a user
    I want to add review product
    So successful add review product

    Scenario: Add review without logging in
        Given I visiT the home page
        When I Click View Product Button
        Then I can view write your review
        When I enter my name "Siti"
        And I enter my email address "siti@gmail.com"
        And I write a review in the text area "Thank you!"
        And I press the submit button
        Then I get alert Error "You need to log in first to add a review."

    Scenario Outline: Add review with invalid name while logged in
        Given I Visit the home page
        When I Click the Login page
        Then I can view login pages
        When I enter my email As "siti@gmail.com"
        And I enter my password As "password123"
        And I click the login button for Add review
        Then I should be redirected to my dashboard
        When I Click View Product Buttons
        Then I can view write your reviews
        When I fill in the name field with "<your_name>"
        And I provide the email address "<email_Address>"
        And I type "Thank you!" in the review text box
        And I submit the review
        Then I get alert error "<message>"
    Examples:
        | your_name   |  email_Address   | message                                                                      |
        | 12345       | siti@gmail.com   | Bidang tidak sesuai.                                                         |
        | ,./-=       | siti@gmail.com   | Bidang tidak sesuai.                                                         |
        | Siti        |     12345        | Should issue an error alert message: Sertakan '@' dan '.' pada alamat email. |
        | Siti        |     ,./-=        | Should issue an error alert message: Sertakan '@' dan '.' pada alamat email. |

    Scenario: Successfully add review after logging in
        Given I Visit The home page
        When I click the Login Page
        And I input my email "siti@gmail.com"
        And I input my password "password123"
        And I click the login button
        Then I should be taken to my dashboard

        When I open a product page
        Then I can see the review section
        When I fill in the name "Siti"
        And I enter the email "siti@gmail.com"
        And I write the review "Thank you!"
        And I hit the submit button
        Then I should see a message "Thank you for your review."
