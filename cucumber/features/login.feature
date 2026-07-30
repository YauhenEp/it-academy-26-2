Feature: The Internet Guinea Pig Website

  @smoke
  Scenario Outline: As a user, I can log into the secure area
    Given I navigate to the https://opensource-demo.orangehrmlive.com/web/index.php/auth/login page
    When I login with username <username> and password <password>
    And I wait for 3 seconds
    And I click on "Admin Page > User Dropdown" webElement
    And I click on "Admin Page > Left Navigation > Search Field" webElement
    Then I expect element hello should be visible

    Examples:
      | username | password             | message                        |
      | Admin | admin123 | You logged into a secure area! |
      # | foobar   | barfoo               | Your username is invalid!      |

  Scenario: New Scenario
    Given I navigate to the https://opensource-demo.orangehrmlive.com/web/index.php/auth/login page
    When I login with username <username> and password <password>