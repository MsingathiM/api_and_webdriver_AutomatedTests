package driverAssessment;

import com.aventstack.extentreports.Status;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

public class DriverAutomation {

    // Instantiate a WebDriver class.
//    public static WebDriver driver = new ChromeDriver();
    public static WebDriver driver = new FirefoxDriver();
    public static ExtentTest test;
    public static ExtentHtmlReporter htmlReporter;

    @AfterClass
    public static void closeBrowser(){
        //WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.quit();
    }

    @BeforeClass
    public static void setUP(){
//        System.setProperty("webdriver.chrome.driver", "/Users/admin/Downloads/chromedriver");
        System.setProperty("webdriver.gecko.driver", "/Users/admin/Downloads/geckodriver");

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        // Launch Website
        driver.navigate().to("https://www.ilabquality.com");
        driver.manage().window().maximize();
    }

    @Test
    public void jobApplication() throws InterruptedException {

         htmlReporter = new ExtentHtmlReporter(
                 "/Users/admin/Downloads/api_and_webdriver_AutomatedTests-main/src/test/java/ilabReport.html");
        ExtentReports extent = new ExtentReports();
        extent.attachReporter(htmlReporter);
        ExtentTest test = extent.createTest("iLabAssessment");


        // Navigate to Find careers and click
        Thread.sleep(3000);
        Actions actions = new Actions(driver); WebElement menuHoverLink = driver.findElement(By.linkText("Get in Touch"));
        actions.moveToElement(menuHoverLink).perform();

                driver.findElement(By.xpath("//*[contains(text(),'Career Opportunities')]")).click();

        Thread.sleep(3000);
        test.log(Status.INFO, "clicked careers link");

        //Scroll page and find element
        WebElement country = driver.findElement(By.xpath("//*[contains(text(),'South Africa')]"));

        //scroll to middle with Javascript Executor
        JavascriptExecutor j = (JavascriptExecutor) driver;
        j.executeScript("arguments[0].scrollIntoView({block: 'center', inline: 'nearest'})", country);
        country.click();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        test.log(Status.INFO, "clicked South Africa on country link");


        // Click on first available job post
        WebElement job =
                driver.findElement(By.xpath("//*[contains(text(),'Software Quality Assurance (SQA) Lead')]"));
        job.click();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        test.log(Status.INFO, "selected first job post");


        //click to Apply
        //scroll to middle with Javascript Executor
        WebElement apply = driver.findElement(By.xpath("//*[contains(text(),'Apply Now')]"));

        JavascriptExecutor je = (JavascriptExecutor) driver;
        je.executeScript("arguments[0].scrollIntoView({block: 'center', inline: 'nearest'})", apply);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);


        //calling form filling
//        fillForm();
        //writing to report
        extent.flush();

    }

    //Fill in form
    public static void fillForm() {
        //firstname
        WebElement firstname = driver.findElement(By.id("firstname-91269253-d0ea-4409-a821-873cda679554"));
        firstname.clear();
        firstname.sendKeys("John");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        test.log(Status.INFO, "populated name fields");

        //lastname
        WebElement lastname = driver.findElement(By.id("lastname-91269253-d0ea-4409-a821-873cda679554"));
        lastname.clear();
        lastname.sendKeys("Doe");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        test.log(Status.INFO, "populated name fields");

        //parse email address
        WebElement email = driver.findElement(By.id("email-91269253-d0ea-4409-a821-873cda679554"));
        email.clear();
        email.sendKeys("automationTest@iLABQuality.com");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        test.log(Status.INFO, "populated email field");


        //cellphone number
        WebElement phone = driver.findElement(By.id("phone-91269253-d0ea-4409-a821-873cda679554"));
        phone.clear();
        phone.sendKeys("083 568 7859");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        test.log(Status.INFO, "populated phone number field");


        //motivational message
        WebElement message = driver.findElement(By.id("message-91269253-d0ea-4409-a821-873cda679554"));
        message.clear();
        message.sendKeys("I think with an organisation like iLab, there is a lot of room to grow " +
                "and for me share what I have learnt, that for me is definitely the reason why I think it would be " +
                "a great opportunity for both sides.");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        test.log(Status.INFO, "populated message field");

        //upload
        WebElement upload = driver.findElement(By.id("resume-91269253-d0ea-4409-a821-873cda679554"));
        upload.click();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        test.log(Status.INFO, "clicked");

        //submit
        WebElement submit = driver.findElement(By.id("//*[contains(text(),'Submit')]"));
        submit.click();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        test.log(Status.INFO, "clicked the submit button");


        //Validate Error message displayed after submitting without an upload
        WebElement error = driver.findElement(By.xpath("//*[contains(text(),'Please complete this required field.')]"));
        Assert.assertEquals(true,error.isDisplayed());
        test.log(Status.PASS, "error message displayed");

    }
}
