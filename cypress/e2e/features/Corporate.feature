Feature: Open OrangeHRM End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website
     When Enter the user login with valid username & password
         | Username |  | Password |
         | Admin    |  | admin123 |
      Then Click The Login Button with Valid Username & Password

Scenario:Verify the Corporate branding button and then publish after edit
      When open admin panel
      Then Go to corporate branding
      Then Click on secondary color
      Then Select a color
      Then Publish corporate branding