Feature: Open OrangeHRM End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website
     When Enter the user login with valid username & password
         | Username |  | Password |
         | Admin    |  | admin123 |
      Then Click The Login Button with Valid Username & Password
      When open admin panel
      
Scenario:Verify the qualification button and skill add in list
      Then Click on qualification
      Then Click on skill
      Then Click on add button
      Then Write the skill name
      Then Now save this skill

Scenario:Verify the Education button and add qualification in list
    Then Go to qualification for education
    Then Go to education
    Then Click on education add button
    Then Write the qualification level
    Then Save qualification

Scenario:Verify the language button and Add new language
    Then Go to qualification for add language
    Then Click on language
    Then Click on add for language
    Then Write the language name
    Then Now save the language

Scenario:Verify the Memberships button and Add new members
    Then Go again click on qualification
    Then Go to Memberships
    Then Add membership name
    Then Write the membership name
    Then Now save membership name