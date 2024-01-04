Feature: Login
  As user I want to log in orangehrm
 
  Scenario Outline: test test
    Given the user test
    When the user enters "<username>" and "<password>"
    And the user clicks on login button
    Then the user is on the dashboard page
 
    Examples:
      | username | password |
      | Admin    | admin123 |