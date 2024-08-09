Feature: Register in Automation Exercise

    As a User
    I want to register my data
    So I can successful have an account

    Background: I am already on the Sign Up menu
        Given I visit the website home page
        When I click Sign Up or Login menu
        Then I redirect to sign up or login menu

    Scenario Outline: Register with invalid data
        Given I am already on the Sign Up or Login menu
        When I fill in invalid data Name "<Name>" 
        And I fill in invalid data Email Address "<Email_Address>"
        And I click sign up button for invalid data
        Then I see an error message "<Message>"

    Examples: test data invalid
        |      Name         |   Email_Address   |  Message                                |
        |       ,./         |  siti@gmail.com   | Bidang tidak sesuai.                    |
        |      1234         |  siti@gmail.com   | Bidang tidak sesuai.                    |

        |      Siti         |       ,./         | Sertakan '@' dan '.' pada alamat email. |
        |      Siti         |       1234        | Sertakan '@' dan '.' pada alamat email. |

        |      Siti         |  sitigmail.com    | Sertakan '@' dan '.' pada alamat email. |
        |      Siti         |  sitigmailcom     | Sertakan '@' dan '.' pada alamat email. |

        |                   |  siti@gmail.com   | Harap isi bidang ini.                   |
        |      Siti         |                   | Harap isi bidang ini.                   |
        |                   |                   | Harap isi bidang ini.                   |


    Scenario Outline: Register with missing required fields
        Given I am already on the Sign Up or login Menu
        When I have entered valid data with name "Siti" 
        And I have entered valid data with email "sitiy@gmail.com"
        And I click the sign up button for incomplete data
        Then I direct to register page two
        When I selected the required field "<Field_Name>" 
        And I Input with invalid data "<Invalid_Data>"
        And I click create account button
        Then I see an error "<Message>" indicating the field is required

    Examples: form Name
        | Field_Name | Invalid_Data   | Message               |
        | Name       |                | Harap isi bidang ini. |

    Examples: form Password
        | Field_Name | Invalid_Data   | Message               |
        | Password   |                | Harap isi bidang ini. |

    Examples: form First Name
        | Field_Name | Invalid_Data   | Message               |
        | First name |                | Harap isi bidang ini. |

    Examples: form Last Name
        | Field_Name | Invalid_Data   | Message               |
        | Last name  |                | Harap isi bidang ini. |

    Examples: form Address
        | Field_Name | Invalid_Data   | Message               |
        | Address    |                | Harap isi bidang ini. |

    Examples: form State
        | Field_Name | Invalid_Data   | Message               |
        | State      |                | Harap isi bidang ini. |

    Examples: form City
        | Field_Name | Invalid_Data   | Message               |
        | City       |                | Harap isi bidang ini. |

    Examples: form Zipcode
        | Field_Name | Invalid_Data   | Message               |
        | Zipcode    |                | Harap isi bidang ini. |

    Examples: form Mobile Number
        | Field_Name    | Invalid_Data | Message               |
        | Mobile Number |              | Harap isi bidang ini. |


    Scenario: Register with valid data
        Given I am already on the Sign up or login menu
        When I have entered valid data name "Siti" 
        And I have entered valid data email "siti@gmail.com"
        And I click sign up button for valid data
        Then I am directed to enter account information
        When I select Account Gender Mrs.
        And I fill in Account Name "Siti"
        And I fill in Account Email "siti@gmail.com"
        And I fill in Account Password "password123"
        And I selected in Account Day "7"
        And I selected in Account Month "June"
        And I selected in Account Year "1994"
        And I fill in Account First Name "Siti"
        And I fill in Account Last Name "Susanti"
        And I fill in Account Company "pt. bunga mawar"
        And I fill in Account Address "jl. bunga matahari"
        And I selected in Account Country "Australia"
        And I fill in Account State "jl. bunga melati"
        And I fill in Account City "depok"
        And I fill in Account Zipcode "12345"
        And I fill in Account Mobile Number "081234567890"
        And I click Create Account
        Then I successful register my data

    Scenario: Registration with an already registered email
        Given I am Already on the Sign Up or Login menu
        When I fill in name field "Siti" 
        And I attempt to register with existing data email "siti@gmail.com"
        And I click sign up button for register with existing data
        Then I receive an error message "Email Address already exist!" indicating duplicate registration


