package upskill.ebay.pageAction;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

import upskill.ebay.pageElements.ShettyHomepageLocators;
import upskill.utilities.SetupDrivers;

public class ShettyHomepageActions {
	

	ShettyHomepageLocators ShettyHomepageLocatorsObj;
	
	public ShettyHomepageActions(){
		ShettyHomepageLocatorsObj = new ShettyHomepageLocators();
		PageFactory.initElements(SetupDrivers.driver, ShettyHomepageLocatorsObj);	
	}
	
	public void loadShettyHomepage() throws Exception{
		SetupDrivers.driver.get("https://rahulshettyacademy.com/AutomationPractice/");
		Thread.sleep(3000);
		
//		Selenium Wait : 1. Implicit wait(Global), 2. Explicit wait(Conditional), 3. Fluent wait(intermittent)

		SetupDrivers.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);				//Implicit Wait
		
		WebDriverWait wait = new WebDriverWait(SetupDrivers.driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(ShettyHomepageLocatorsObj.btnHome));	//Explicit wait
		
		FluentWait fluentWait = new FluentWait(SetupDrivers.driver);								//Fluent Wait
					fluentWait.withTimeout(20, TimeUnit.SECONDS);
					fluentWait.pollingEvery(5, TimeUnit.SECONDS);
					fluentWait.ignoring(NoSuchElementException.class);
					fluentWait.withMessage("Fluent Wait Time exceeded");


	}
	
	public void clickIframeHome(){
		
		List<WebElement> framelist = SetupDrivers.driver.findElements(By.id("courses-iframe"));
		
		for (int i = 0; i<framelist.size(); i++){
			SetupDrivers.driver.switchTo().frame(i);
			
			try{
				ShettyHomepageLocatorsObj.btnHome.click();
			} catch (Exception e){
				System.out.println("Element not found in iframe");
			}
		}
	}
	
	public void verifyShettyHome() throws Exception{
		Thread.sleep(5000);
		ShettyHomepageLocatorsObj.btnHome.isDisplayed();
	}
	
	public void handleIframe(){
		
		//i find iframe using iframe tag in DOM or HTML
		//i use switchTo().frame() to switch iframes
		
		//Switch iframe by Index
		SetupDrivers.driver.switchTo().frame(0);
		SetupDrivers.driver.switchTo().frame(1);
		
		//Switch iframe by Name or ID
		SetupDrivers.driver.switchTo().frame("iframe-name");
		SetupDrivers.driver.switchTo().frame("id");
		
		//Switch back to previous iframe
		SetupDrivers.driver.switchTo().defaultContent();
		SetupDrivers.driver.switchTo().parentFrame();
		SetupDrivers.driver.switchTo().frame("parent");
		
		//nested iframe
		SetupDrivers.driver.switchTo().frame("inner");
		SetupDrivers.driver.switchTo().frame("child");
	} 
	
	public void handleAlert() throws InterruptedException{
		ShettyHomepageLocatorsObj.enterName.sendKeys("Dipu");
		ShettyHomepageLocatorsObj.alertButton.click();
		Thread.sleep(3000);
		Alert alert = SetupDrivers.driver.switchTo().alert();
		alert.accept();
	}
	
	public void handleConfirmation() throws InterruptedException{
		ShettyHomepageLocatorsObj.enterName.sendKeys("Dipu");
		ShettyHomepageLocatorsObj.alertButton.click();
		Thread.sleep(3000);
		Alert alert = SetupDrivers.driver.switchTo().alert();
		alert.dismiss();
	}
}
