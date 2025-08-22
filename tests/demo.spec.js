import { test, expect } from '@playwright/test';

// Test to navigate to LetCode test page and verify the title
test('Navigate to LetCode test page', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/login');
  // Assert the page title contains 'LetCode'
  await expect(page).toHaveTitle(/Conduit/);
});
test('user facing locator', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/login');
  // Example of using a user-facing locator
  const Email = await page.getByRole('textbox').first();
  //first textbox is used to select the first textbox on the page
  // Fill the Fullname field with a value
  await Email.fill('pavan16@gmail.com');
  // Assert that the Fullname field has the expected value
  await expect(Email).toHaveValue('pavan16@gmail.com');
  await page.getByPlaceholder('Password').fill('Xam@2025');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  //crereate new article
  await page.getByRole('link', { name: ' New Article ' }).click();
  await page.getByPlaceholder('Article Title').fill('Playwright Demo');
  await page.getByPlaceholder('What\'s this article about?').fill('Playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API.');
  await page.getByPlaceholder('Write your article (in markdown)').fill('Playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API.');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  // Assert that the article was created successfully
  await expect(page.getByRole('heading', { name: 'Playwright Demo' })).toBeVisible();
  // Assert that the article content is visible   
  await expect(page.getByText('Playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API.')).toBeVisible();
  // Assert that the article has a tag
 
  //delete the article
  await page.getByRole('button', { name: /Delete Article/ }).first().click();
});