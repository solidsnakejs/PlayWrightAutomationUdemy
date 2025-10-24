import { expect, test } from '@playwright/test';

test('First Playwright Test', async ({browser})=>
{
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator(username).fill("testusername");
    await expect(page).toHaveTitle(/LoginPage Practise | Rahul Shetty Academy/);

});

test('Second Playwright Test', async ({page})=>
{

    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle(/Google/);
    
});