Feature: Bank Account

  Scenario: Client prints statement
    Given Client makes a deposit of 1000 on "10/01/2012"
    And Client makes a deposit of 2000 on "13/01/2012"
    And Client makes a withdrawal of 500 on "14/01/2012"
    When they print their bank statement
    Then they should see
      | Date          | Amount  | Balance |
      | '14/01/2012'  | -500    | 2500    |
      | '13/01/2012'  | 2000    | 3000    |
      | '10/01/2012'  | 1000    | 1000    |