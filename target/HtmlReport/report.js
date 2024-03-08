$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/ProductCheckout.feature");
formatter.feature({
  "name": "To verify that the product checkout process in Flipkart",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.scenario({
  "name": "To verify that whether user can checkout the searched product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch flipkart application in browser",
  "keyword": "When "
});
formatter.match({
  "location": "ProductCheckout.to_launch_flipkart_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Verify that the homepage loads successfully",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCheckout.to_Verify_that_the_homepage_loads_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To search product by providing product name",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCheckout.to_search_product_by_providing_product_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click any one of the product in product list page",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCheckout.to_click_any_one_of_the_product_in_product_list_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To add the product into cart",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCheckout.to_add_the_product_into_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Verify that the correct item is in the cart",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCheckout.to_Verify_that_the_correct_item_is_in_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check out the product from cart",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCheckout.to_check_out_the_product_from_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To login the flipkart application using valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCheckout.to_login_the_flipkart_application_using_valid_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d122.0.6261.112)\nBuild info: version: \u00274.16.1\u0027, revision: \u00279b4c83354e\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [649dac9abf9d2f7ed7a33ecfb8c8bf08, findElement {using\u003dxpath, value\u003d//span[text()\u003d\u0027Login\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.112, chrome: {chromedriverVersion: 122.0.6261.111 (9d4c1072da6..., userDataDir: C:\\Users\\briya\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:60609}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:60609/devtoo..., se:cdpVersion: 122.0.6261.112, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 649dac9abf9d2f7ed7a33ecfb8c8bf08\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:523)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:354)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat org.base.classes.BaseClass.clickWebelement(BaseClass.java:113)\r\n\tat org.stepdefinitions.ProductCheckout.to_login_the_flipkart_application_using_valid_credentials(ProductCheckout.java:75)\r\n\tat ✽.To login the flipkart application using valid credentials(file:src/test/resources/ProductCheckout.feature:13)\r\n",
  "status": "failed"
});
});