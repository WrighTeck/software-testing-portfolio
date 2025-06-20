// Import the Playwright testing utilities: 'test' to define a test case, and 'expect' for assertions
import { test, expect } from '@playwright/test';
// Define a test case to verify that main menu options are visible on the homepage
test('Main menu options are visible on the homepage', async ({ page }) => {
// Navigate to the homepage of the WrightEck website
  await page.goto('https://www.wrighteck.com');
// Define an array of the expected main menu item labels
  const menuItems = [
    'Home',
    'Teck Education',
    'Free AI Assistants',
    'Blog',
    'Support Services',
  ];
// Loop through each menu item in the array
  for (const item of menuItems) {
// Locate the menu link on the page using its visible text
    const menuLink = page.locator(`text=${item}`);
// Assert that the menu link is visible on the page
    await expect(menuLink, `${item} should be visible`).toBeVisible();
  }
});
