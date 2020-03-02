package stepDefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;




@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="src\\test\\resources\\Features\\login.feature",
		glue="stepDefinition",
		//plugin= { "pretty","html:target/cucumber-reports" }
				//plugin= { "pretty","json:target/cucumber-reports/Cucumber.json" }
		plugin= {"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:target/cucumber-reports/reports.html"}
		
		)

public class TestRunner {
	

}
