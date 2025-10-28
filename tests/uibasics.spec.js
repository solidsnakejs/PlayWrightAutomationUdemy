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
    const userEmail = `testuser${Date.now()}@test.com`;
    const registerLink = page.locator("a.text-reset");
    const registerFirstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
    const registerLastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
    const emailTextBox = page.getByRole('textbox', { name: 'email@example.com' });
    const phoneTextBox = page.getByRole('textbox', { name: 'enter your number' });
    const occupationDropdown = page.getByRole('combobox');
    const genderMaleRadioBtn = page.getByRole('radio', { name: 'Male', exact: true });
    const registerUserPasswordTextBox = page.getByRole('textbox', { name: 'Passsword' });
    const confirmPasswordTextBox = page.getByRole('textbox', { name: 'Confirm Password' });
    const eighteenPlusCheckbox = page.getByRole('checkbox');
    const signUpBtn = page.getByRole('button', { name: 'Register' });
    const loginBtn = page.getByRole('button', { name: 'Login' });
    const loginEmailTextBox = page.getByRole('textbox', { name: 'Email' });
    const loginPasswordTextBox = page.getByRole('textbox', { name: 'enter your passsword' });
    const cardTitles = page.locator(".card-body b");

    //Go to registration page and fill the form, submit form
    await page.goto(loginPage);
    await registerLink.click();
    await registerFirstNameTextBox.fill("FirstName");
    await registerLastNameTextBox.fill("LastName");
    await emailTextBox.fill(userEmail);
    await phoneTextBox.fill("1123456789");  
    await occupationDropdown.selectOption("Engineer");
    await genderMaleRadioBtn.check();
    await registerUserPasswordTextBox.fill("TestPassword123!");
    await confirmPasswordTextBox.fill("TestPassword123!");
    await eighteenPlusCheckbox.check();
    await signUpBtn.click();
    await loginBtn.click();

    //Login, locate first product title and return it
    await loginEmailTextBox.fill(userEmail);
    await loginPasswordTextBox.fill("TestPassword123!");
    await loginBtn.click();
    await cardTitles.first().waitFor();
    const firstProductTitle = await cardTitles.first().textContent();
    console.log(firstProductTitle);
    
});