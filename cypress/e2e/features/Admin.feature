Feature: Open OrangeHRM End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website
     When Enter the user login with valid username & password
         | Username |  | Password |
         | Admin    |  | admin123 |
      Then Click The Login Button with Valid Username & Password
     
Scenario:Verify admin & find the admin name in admin panel
    When open admin panel
    Then Enter the admin name searching 
    Then Now search the admin

Scenario:Verify job button & job tile button with add job
      When open admin panel
      Then Go to job board
      Then Click the job title
      Then add new job
      Then Write job title
      Then Save this job

Scenario: Verify The Job delete Confirmation
    When open admin panel
    Then Go to job board
    Then Click the job title
    Then Delete this job
    Then Confirm delete