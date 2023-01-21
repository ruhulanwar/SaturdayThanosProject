package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ShettyHomepageLocators {

	// Home button
	@FindBy(xpath = "//*[contains(text(),'Home')]")
	public WebElement btnHome;

	// Enter Your Name
	@FindBy(xpath = "//*[@id='name']")
	public WebElement enterName;

	// Alert Button
	@FindBy(xpath = "//input[@id='alertbtn']")
	public WebElement alertButton;

	// Alert Button
	@FindBy(xpath = "//input[@id='confirmbtn']")
	public WebElement confirmButton;

}
