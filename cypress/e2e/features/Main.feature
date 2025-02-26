Feature: Open OrangeHRM End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website

 Scenario:Verify that user Login with Invalid Username
     When Enter the user login with  invalid username
       | Username |  | Password |
       | Admin    |  | admin123 |
     Then Click The Login Button

 Scenario:Verify that user Login with Invalid Password
     When Enter the user login with invalid password
         | Username |  | Password |
         | Admin    |  | admi |
      Then Click The Login Button for invalid password

 Scenario:Verify that user Login with valid Username and Password
     When Enter the user login with valid username & password
         | Username |  | Password |
         | Admin    |  | admin123 |
      Then Click The Login Button with Valid Username & Password








































      
    # And click the collectors id & select delhi
 
       


    # And Click The LanguageDrop Dropdown Button
    # And Select English From LanguageDrop
    # And Click Button which saves
    # And Saved Successfully PoP Up is Showing And Then Click OK
    # And Click on rafaree Email & Enter candidate email ID
    #     | email_id | automa8e405@gmail.com |





    # And Click The Next Button
    # And Click The Title Dropdown Button
    # And Select Title From The Title Dropdown Menu
    # And Fill up candidate name and father name
    #     | first_name  |automatddin|
    #     | father_name |automadsfton|
    # And Select date of birth from calender
    # And Select Male From Gender Dropdown List
    # And Click The Maritial Status Dropdown Button and Select Single
    # And Enter The Nationality
    #     | nationality  |udadas|
    # And Click The Add Contact Details Plus Icon
    # And Click The Select Dropdown Onption
    # And Enter candidate mobile Number
    #     | mobile_number |3241234123|
    # And Click The Add Contact Details Plus Icon Agin
    # And Click The Select Dropdown Option Again
    # And Enter candidate email ID
    #     | email_id | automa8e405@gmail.com |
    # And Click The Save Button
    # And Saved Successfully PoP Up is Showing And Then Clicking OK
    # And Clicks The Next Button    