package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayHomePageLocators {

	@FindBy(xpath = "//input[@placeholder='Search for anything']")
	public WebElement txtbxSearch;

	@FindBy(xpath = "//input[@value='Search']")
	public WebElement btnSearch;
	
	@FindBy(xpath = "//*[@title='My eBay']")
	public WebElement linkMyEbay;
	
	@FindBy(xpath = "//a[contains(text(),'Summary')]")
	public WebElement linkSummary;

}