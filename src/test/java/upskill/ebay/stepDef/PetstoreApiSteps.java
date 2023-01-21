package upskill.ebay.stepDef;

import cucumber.api.java.en.*;
import upskill.api.restAssured.PetstoreRestAssuredActions;

public class PetstoreApiSteps {
	
	PetstoreRestAssuredActions PestoreRestAssuredActionsObj = new PetstoreRestAssuredActions();

	@Given("^Create pet$")
	public void create_pet() throws Throwable {
		PestoreRestAssuredActionsObj.createPet();
	}

	@When("^Update pet$")
	public void update_pet() throws Throwable {
		PestoreRestAssuredActionsObj.updatePet();
	}

	@Then("^Get pet$")
	public void get_pet() throws Throwable {
		PestoreRestAssuredActionsObj.getPet();
	}

	@Then("^Delete pet$")
	public void delete_pet() throws Throwable {
		PestoreRestAssuredActionsObj.deletePet();
	}

}
