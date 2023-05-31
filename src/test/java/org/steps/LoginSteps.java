package org.steps;

import java.util.List;
import java.util.Map;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.pojo.FbLoginPojo;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends BaseClass {

	@Given("User have be in Fb page")
	public void user_have_be_in_Fb_page() {
		//launchBrowser();
		loadUrl("https://www.facebook.com/");
	}
	@When("user have to enter the {string}  and {string}")
	public void user_have_to_enter_the_and(String v1, String v2) {
		FbLoginPojo l = new FbLoginPojo();
		WebElement txtEmail = l.getTxtEmail();
		txtEmail.sendKeys(v1);
		WebElement txtpass = l.getTxtpass();
		txtpass.sendKeys(v2);
		l.getBtnlogin();
	}
	@When("user have to enter the invalid email and invalid password")
	public void user_have_to_enter_the_invalid_email_and_invalid_password() {
		FbLoginPojo l = new FbLoginPojo();
		WebElement txtEmail = l.getTxtEmail();
		txtEmail.sendKeys("abcd");
		WebElement txtpass = l.getTxtpass();
		txtpass.sendKeys("12345");
		l.getBtnlogin();
	}

	@When("user have to click the login button")
	public void user_have_to_click_the_login_button() {
		FbLoginPojo l = new FbLoginPojo();
		l.getBtnlogin();
	}

	@Then("check wheather user in invalid crendential page")
	public void check_wheather_user_in_invalid_crendential_page() {
String currentUrl = toCurrentUrl();
if (currentUrl.contains("privacy_mutation_toke")) {
	System.out.println("User in valid page ");
	
} else {
System.out.println("user in not valid page");
}
	}

	@Given("max the page")
	public void max_the_page() {
		toMaximize();
	}

	@When("user have to enter the invalid email and empty password")
	public void user_have_to_enter_the_invalid_email_and_empty_password(DataTable d) {
		FbLoginPojo l = new FbLoginPojo();
		WebElement txtEmail = l.getTxtEmail();
		List<String> v1 = d.asList();
		String val1 = v1.get(0);
		String val2 = v1.get(1);
		txtEmail.sendKeys(val1);
		WebElement txtpass = l.getTxtpass();
		txtpass.sendKeys(val2);
		l.getBtnlogin();
	}

	@When("user have to enter the invalid email and valid password")
	public void user_have_to_enter_the_invalid_email_and_valid_password(DataTable d) {
		FbLoginPojo l = new FbLoginPojo();
		WebElement txtEmail = l.getTxtEmail();
		List<Map<String,String>> asMaps = d.asMaps();
		Map<String, String> map = asMaps.get(1);
		String val = map.get("Username");
		String val2 = asMaps.get(0).get("Password");
		txtEmail.sendKeys(val);
		WebElement txtpass = l.getTxtpass();
		txtpass.sendKeys(val2);
		l.getBtnlogin();
	}

	@When("user have to enter the valid email and empty password")
	public void user_have_to_enter_the_valid_email_and_empty_password(DataTable d) {
		FbLoginPojo l = new FbLoginPojo();
		WebElement txtEmail = l.getTxtEmail();
		List<List<String>> asLists = d.asLists();
		List<String> list = asLists.get(5);
		String val1 = list.get(0);
		String val2 = list.get(1);
		txtEmail.sendKeys(val1);
		WebElement txtpass = l.getTxtpass();
		txtpass.sendKeys(val2);
		l.getBtnlogin();
	}

	@When("user have to enter the valid email and invalid password")
	public void user_have_to_enter_the_valid_email_and_invalid_password(DataTable d) {
		FbLoginPojo l = new FbLoginPojo();
		WebElement txtEmail = l.getTxtEmail();
		Map<String, String> asMap = d.asMap(String.class, String.class);
		String val1 = asMap.get("Username");
		String val2 = asMap.get("Password");
		txtEmail.sendKeys(val1);
		WebElement txtpass = l.getTxtpass();
		txtpass.sendKeys(val2);
		l.getBtnlogin();

	}

	@When("user have to enter the empty email and invalid password")
	public void user_have_to_enter_the_empty_email_and_invalid_password() {
		FbLoginPojo l = new FbLoginPojo();
		WebElement txtEmail = l.getTxtEmail();
		txtEmail.sendKeys("");
		WebElement txtpass = l.getTxtpass();
		txtpass.sendKeys("123423455");
		l.getBtnlogin();
	}

	@When("user have to enter the empty email and valid password")
	public void user_have_to_enter_the_empty_email_and_valid_password() {
		FbLoginPojo l = new FbLoginPojo();
		WebElement txtEmail = l.getTxtEmail();
		txtEmail.sendKeys("");
		WebElement txtpass = l.getTxtpass();
		txtpass.sendKeys("madhu@123;");
		l.getBtnlogin();

	}

	@When("user have to enter the empty email and empty password")
	public void user_have_to_enter_the_empty_email_and_empty_password() {
		FbLoginPojo l = new FbLoginPojo();
		WebElement txtEmail = l.getTxtEmail();
		txtEmail.sendKeys("");
		WebElement txtpass = l.getTxtpass();
		txtpass.sendKeys("");
		l.getBtnlogin();
	}

}
