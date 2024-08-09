Feature: Search for Items

    As a user
    I want to search for an item
    So that I can find the item I am looking for

    Scenario: Searching for missing items
        Given I am on the website homepage for Search Item
        When I navigate to the product menu
        Then I should see the search box for invalid items
        When I input an invalid search term "skirt"
        And I click Search button
        Then I should see no matching results

    Scenario: Search for available items
        Given I am on the website homepage For Search Item
        When I access the product menu
        Then I should locate the search box for valid items
        When I input "Dress" in the search box
        And I click Search button with valid data
        Then I should see the search results for Dress
