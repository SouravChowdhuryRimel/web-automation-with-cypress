Feature: Open OrangeHRM End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website
     When Enter the user login with valid username & password
         | Username |  | Password |
         | Admin    |  | admin123 |
      Then Click The Login Button with Valid Username & Password
      When open admin panel

 Scenario:Verify The Organization Button & and Check Info
      Then Click organization
      Then Check organization info

   Scenario:Verify the organization edit info & save button
      Then Click organization
      Then Check organization info
      Then Edit Organization info and save it
      Then Write organization name
      Then Write reginumber on regi box
      Then Write taxid on taxid box
      Then Write phone number on phone box
      Then Write email on email box
      Then Click save button

   Scenario:Verify the Location button &  Search location
      Then Click again organization
      Then Click again location
      Then Write location name
      Then Search Location name and city

   Scenario:Verify the Organization Structure Button and confirm add new structure
      Then Click organization once again
      Then Click structure
      Then Click edit button
      Then Click add button
      Then Write structure name
      Then Now save structure