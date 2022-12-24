package upskill.ebay.stepDef;

import cucumber.api.java.en.*;
import upskill.ebay.pageAction.EbayHomePageActions;

public class EbayHomePageSteps {

	EbayHomePageActions EbayHomePageActionsObj = new EbayHomePageActions();

	@Given("^Open Ebay Homepage$")
	public void open_Ebay_Homepage() throws Throwable {

	}

	@When("^Search for Shoes$")
	public void search_for_Shoes() throws Throwable {
		EbayHomePageActionsObj.searchShoes();

	}

	@When("^Search for Shirts$")
	public void search_for_Shirts() throws Throwable {
		EbayHomePageActionsObj.searchShirts();

	}

	@When("^Search for Pants$")
	public void search_for_Pants() throws Throwable {
		EbayHomePageActionsObj.searchPants();

	}

	@Given("^Search for \"([^\"]*)\"$")
	public void search_for(String items) throws Throwable {
		EbayHomePageActionsObj.searchItems(items);

	}
	
	@Given("^Search for Big Tall Cotton Tee$")
	public void search_for_Big_Tall_Cotton_Tee() throws Throwable {
		EbayHomePageActionsObj.searchItems("big tall cotton tee");
	}
	
	@When("^Mouse Hover to MyEbay Summary$")
	public void mouse_Hover_to_MyEbay_Summary() throws Throwable {
		EbayHomePageActionsObj.mouseHoverMyEbay();
	}
	
	@Then("^Click on Summary$")
	public void click_on_Summary() throws Throwable {
		EbayHomePageActionsObj.clickSummary();
	}
}