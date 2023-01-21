package upskill.ebay.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.ShettyHomepageActions;

public class ShettyHomepageSteps {

	ShettyHomepageActions ShettyHomepageActionObj = new ShettyHomepageActions();

	@Given("^Open Shetty Homepage$")
	public void open_Shetty_Homepage() throws Throwable {
		ShettyHomepageActionObj.loadShettyHomepage();
	}

	@When("^Click on iFrame Home$")
	public void click_on_iFrame_Home() throws Throwable {
		ShettyHomepageActionObj.clickIframeHome();
	}

	@Then("^It should reload iframe homepage$")
	public void it_should_reload_iframe_homepage() throws Throwable {
		ShettyHomepageActionObj.verifyShettyHome();
	}

	@When("^Click on Alert$")
	public void click_on_Alert() throws Throwable {
		ShettyHomepageActionObj.handleAlert();
	}

	@Then("^Message displayed with an alert$")
	public void message_displayed_with_an_alert() throws Throwable {
		ShettyHomepageActionObj.verifyShettyHome();
	}
	
	@When("^Click on Confirm$")
	public void click_on_Confirm() throws Throwable {
		ShettyHomepageActionObj.handleConfirmation();
	}
	
	@Then("^Message displayed with a confirmation$")
	public void message_displayed_with_a_confirmation() throws Throwable {
		ShettyHomepageActionObj.verifyShettyHome();
	}
}
