import { expect, test } from '@playwright/test';

test.only('First Playwright Test', async ({browser})=>
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