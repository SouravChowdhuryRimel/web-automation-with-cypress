Feature: Open OrangeHRM End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website
     When Enter the user login with valid username & password
         | Username |  | Password |
         | Admin    |  | admin123 |
      Then Click The Login Button with Valid Username & Password
      When open admin panel



Scenario:Verify the PIM
      When Check the PIM
      Then Show the employ list
      Then Check rest button