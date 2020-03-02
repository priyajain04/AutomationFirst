Feature: Test login

Scenario: Login with valid username and password
Given User is at login page of newtours website
When  User enters valid username "batman"
And User enters valid password "batman"
And  User clicks login button
And Login should be successful


Scenario: Login with invalid username 
Given User is at login page of newtours website
When  User enters invalid username
And User enters valid password "batman"
And  User clicks login button "123"
Then Login should not be successful

