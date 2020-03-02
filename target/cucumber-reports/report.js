$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "Test login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is at login page of newtours website",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_is_at_login_page_of_newtours_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid username",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_enters_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid password",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_enters_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be successful",
  "keyword": "And "
});
formatter.match({
  "location": "login.login_should_be_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid username",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is at login page of newtours website",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_is_at_login_page_of_newtours_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid username",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_enters_invalid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid password",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_enters_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should not be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "login.login_should_not_be_successful()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Comparing title expected:\u003c[WelCome] Mercury Tours:\u003e but was:\u003c[Find a Flight:] Mercury Tours:\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat stepDefinition.login.login_should_not_be_successful(login.java:63)\r\n\tat ✽.Login should not be successful(file:src/test/resources/Features/login.feature:16)\r\n",
  "status": "failed"
});
});