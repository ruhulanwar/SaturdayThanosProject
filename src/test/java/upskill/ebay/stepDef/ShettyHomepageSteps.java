package upskill.ebay.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.ShettyHomepageActions;

public class ShettyHomepageSteps {
	
	ShettyHomepageActions shettyHomepageActionsObj = new ShettyHomepageActions();

	@Given("^Open Shetty Homepage$")
	public void open_Shetty_Homepage() throws Throwable {
		shettyHomepageActionsObj.loadShettyHomepage();
	}

	@When("^Click on iFrame Home$")
	public void click_on_iFrame_Home() throws Throwable {
		
		shettyHomepageActionsObj.clickIframeHome();
	}

	@Then("^It should reload iframe homepage$")
	public void it_should_reload_iframe_homepage() throws Throwable {
		shettyHomepageActionsObj.verifyShettyHome();
	}

}
