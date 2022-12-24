package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ShettyHomepageLocators {

	@FindBy(xpath = "//div[@class='nav-outer clearfix']//a[normalize-space()='Home']")
	public WebElement btnHome;
	
}
