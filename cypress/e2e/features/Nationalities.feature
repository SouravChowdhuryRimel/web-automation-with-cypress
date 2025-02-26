Feature: Open OrangeHRM End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website
     When Enter the user login with valid username & password
         | Username |  | Password |
         | Admin    |  | admin123 |
      Then Click The Login Button with Valid Username & Password
      
Scenario:Verify the Nationalities button and added new nationalities
      When open admin panel
      Then Go to nationalities
      Then Click add button for added nationalities name
      Then Write the nationalities name
      Then Now save it