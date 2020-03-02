package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.assertEquals;

public class login {
	static WebDriver driver;
	
	@Given("User is at login page of newtours website")
	public void user_is_at_login_page_of_newtours_website() {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Priya\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://newtours.demoaut.com/");
	
	}

	/*@When("User enters valid username")
	public void user_enters_valid_username() {
		driver.findElement(By.name("userName")).sendKeys("batman");
	    
	    
	}

	@When("User enters invalid username")
	public void user_enters_invalid_username() {
		driver.findElement(By.name("userName")).sendKeys("batman");
	    
	    
	}

	@When("User enters valid password")
	public void user_enters_valid_password() {
		driver.findElement(By.name("password")).sendKeys("batman");
		}
	    
*/	
	    
	

	@When("User clicks login button")
	public void user_clicks_login_button() {
		driver.findElement(By.name("login")).click();
		
	    
	    
	}

	@When("Login should be successful")
	public void login_should_be_successful() {
		assertEquals("Comparing title","Find a Flight: Mercury Tours:",driver.getTitle());
	   
	    
	}
	@Then("Login should not be successful")
	public void login_should_not_be_successful() {
		assertEquals("Comparing title","Find a Flight: Mercury Tours:",driver.getTitle());
	   
	    
	}

	
	
		
	}




