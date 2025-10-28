import { expect, test } from '@playwright/test';

test('First Playwright Test', async ({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const signInBtn = page.locator('#signInBtn');
    //const errorMsg = page.locator("[style*='block']");
    const cardTitles = page.locator(".card-body a");
    const terms = page.locator('#terms');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("testusername");
    await expect(page).toHaveTitle(/LoginPage Practise | Rahul Shetty Academy/);
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await terms.check();
    await signInBtn.click();
    // console.log(await errorMsg.textContent());
    // await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    console.log(await cardTitles.nth(0).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

});

test('Second Playwright Test', async ({page})=>
{

    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle(/Google/);

});

test.only('Register, login, obtain first product title [Task]', async ({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = "https://rahulshettyacademy.com/client/#/auth/login";
    const registerLink = page.locator("a.text-reset");
    const firstNameTextBox = page.locator("#firstName");
    const lastNameTextBox = page.locator("#lastName");
    const emailTextBox = page.locator("#userEmail");
    const phoneTextBox = page.locator("#userMobile");
    const occupationDropdown = page.locator(".custom-select.ng-untouched.ng-pristine.ng-valid");
    const genderMaleRadioBtn = page.locator("input[value='Male']");
    const userPasswordTextBox = page.locator("#userPassword");
    const confirmPasswordTextBox = page.locator("#confirmPassword");
    const eighteenPlusCheckbox = page.locator("input[type='checkbox']");
    const signUpBtn = page.locator("#signUpBtn");

    //Go to registration page and fill the form, submit form
    await page.goto(loginPage);
    await expect(page).locator("h1[class='title'] em").textContent("Rahul Shetty Academy");
    await registerLink.click();
    await firstNameTextBox.fill("TestFirstName");
    await lastNameTextBox.fill("TestLastName");
    await emailTextBox.fill(`testuser${Date.now()}@test.com`);
    await phoneTextBox.fill("0123456789");  
    await occupationDropdown.selectOption("Engineer");
    await genderMaleRadioBtn.check();
    await userPasswordTextBox.fill("TestPassword123!");
    await confirmPasswordTextBox.fill("TestPassword123!");
    await eighteenPlusCheckbox.check();
    await signUpBtn.click();
    await page.pause();

    //Landing page for products list, locate first product title and return it
    // const firstProductTitle = page.locator(".card-body b").first();
    // await expect(firstProductTitle).toBeVisible();
    // console.log("First product title is: " + await firstProductTitle.textContent());

    
});