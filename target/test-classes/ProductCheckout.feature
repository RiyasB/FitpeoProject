@Feature1
Feature: To verify that the product checkout process in Flipkart

	@Regression
  Scenario: To verify that whether user can checkout the searched product
    When To launch flipkart application in browser
    And To Verify that the homepage loads successfully
    And To search product by providing product name
    And To click any one of the product in product list page
    And To add the product into cart
    And To Verify that the correct item is in the cart
    And To check out the product from cart
    And To login the flipkart application using valid credentials
