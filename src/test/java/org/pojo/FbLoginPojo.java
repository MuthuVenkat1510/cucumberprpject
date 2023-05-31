package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class FbLoginPojo extends BaseClass {


	public FbLoginPojo() {
		PageFactory.initElements(driver, this);
	}
	@CacheLookup
     @FindBys({
    	 @FindBy(xpath="//input[@id='email']"),
    	 @FindBy(xpath="//input[@name='email']")
     })
     private WebElement txtEmail;
     @FindAll({
    	 @FindBy(xpath="//input[@id='pass']"),
    	 @FindBy(xpath="//input[@name='idpass']")
     })
     private WebElement txtpass;
     public WebElement getTxtEmail() {
		return txtEmail;
	}
	public WebElement getTxtpass() {
		return txtpass;
	}
	public WebElement getBtnlogin() {
		return btnlogin;
	}
	@FindBy(name="login")
    private  WebElement btnlogin;

	
	



}
