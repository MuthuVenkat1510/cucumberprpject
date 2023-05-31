@Login
Feature: To validate the Login the functionality

  Background: 
    Given User have be in Fb page

  @invalid
  Scenario Outline: 
    to validate login functionality invalid email and invalid password

    When user have to enter the "<email>"  and "< pass>"
    And user have to click the login button
    Then check wheather user in invalid crendential page
    Examples: 
      | email | pass    |
      | 12234 | asdg    |
      | 67890 | qwertty |
      | 12345 | poiuy   |

  @invalid
  Scenario: to validate login functionality invalid email and empty password
    And max the page
    When user have to enter the invalid email and empty password
      | 1234567 |  | hjkl | sgdsgd |
    And user have to click the login button
    Then check wheather user in invalid crendential page

  @invalid
  Scenario: to validate login functionality invalid email and valid password
    When user have to enter the invalid email and valid password
      | Name  | Username | Password |
      | Muthu | Muthu123 | abcdeg   |
      | Kumar | kumar123 | poiuyr   |
    And user have to click the login button
    Then check wheather user in invalid crendential page

  @valid
  Scenario: to validate login functionality valid email and empty password
    When user have to enter the valid email and empty password
      | Kumar |  |
      | Muthu |  |
    And user have to click the login button
    Then check wheather user in invalid crendential page

  @valid
  Scenario: to validate login functionality valid email and invalid password
    When user have to enter the valid email and invalid password
      | Username | Muthu15@gmail.com |
      | Password | Mihtutj           |
    And user have to click the login button
    Then check wheather user in invalid crendential page

  @empty
  Scenario: to validate login functionality empty email and invalid password
    When user have to enter the empty email and invalid password
    And user have to click the login button
    Then check wheather user in invalid crendential page

  @empty
  Scenario: to validate login functionality empty email and valid password
    When user have to enter the empty email and valid password
    And user have to click the login button
    Then check wheather user in invalid crendential page

  @empty
  Scenario: to validate login functionality empty email and empty password
    When user have to enter the empty email and empty password
    And user have to click the login button
    Then check wheather user in invalid crendential page
