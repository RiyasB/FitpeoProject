package org.stepdefinitions;

import java.awt.AWTException;
import java.io.IOException;

import org.base.classes.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.pojo.ProductCheckoutPOJO;

import cucumber.api.java.en.When;

public class ProductCheckout extends BaseClass{
	
	ProductCheckoutPOJO p;

	@When("To launch flipkart application in browser")
	public void to_launch_flipkart_application_in_browser() throws IOException {
	    
		launchUrl(getPropertyDatas("url")); 
		waitsUsingImplicit();
	}

	@When("To Verify that the homepage loads successfully")
	public void to_Verify_that_the_homepage_loads_successfully() throws IOException {
	    
		Assert.assertEquals("User not successfully entered into homepage", getUrl(), getPropertyDatas("url"));	
	}

	@When("To search product by providing product name")
	public void to_search_product_by_providing_product_name() throws AWTException, IOException {
	    
		p = new ProductCheckoutPOJO();
		passText(p.getSearchBox(), getPropertyDatas("productname")); 
		pressEnter();
	}

	@When("To click any one of the product in product list page")
	public void to_click_any_one_of_the_product_in_product_list_page() throws IOException {
	    
		clickWebelement(p.getSelectProduct());
	}

	@When("To add the product into cart")
	public void to_add_the_product_into_cart() throws IOException {
		
	    switchWindow(1);
	    waitsUsingImplicit();
		clickWebelement(p.getAddToCart());
	}

	@When("To Verify that the correct item is in the cart")
	public void to_Verify_that_the_correct_item_is_in_the_cart() throws IOException {
	    		
		Assert.assertTrue("In valid product got added", p.getVerifyProductInCart().getText().contains(getPropertyDatas("productname")));
	}

	@When("To check out the product from cart")
	public void to_check_out_the_product_from_cart() {
	    
		clickWebelement(p.getPlaceOrder());
	}

	@When("To login the flipkart application using valid credentials")
	public void to_login_the_flipkart_application_using_valid_credentials() throws IOException, InterruptedException {
	    
		passText(p.getLoginSearchBox(), getPropertyDatas("phonenumber"));
		clickWebelement(p.getContinueBtn());
		
		/* below code it doesn't work because of so many time loggedin to account 
		 * so its shows message like Something's not right, try again later.
		 */
		
		Thread.sleep(30000); 
		clickWebelement(p.getLogin());
		clickWebelement(p.getAddAddress());
		passTextUsingJs(p.getName(), getPropertyDatas("name"));
		passTextUsingJs(p.getPhNo(), getPropertyDatas("phonenumber"));
		passTextUsingJs(p.getPinCode(), getPropertyDatas("pincode"));
		passTextUsingJs(p.getLocality(), getPropertyDatas("locality"));
		passTextUsingJs(p.getAddress(), getPropertyDatas("address"));
		clickWebelement(p.getSelectHome());
		clickWebelement(p.getSaveAddress());
		
		Assert.assertTrue("This is invaid product", p.getOrderSummary().getText().contains(getPropertyDatas("productname")));
		clickWebelement(p.getSumContinue());
		clickWebelement(p.getAccept());
	}
	

}
