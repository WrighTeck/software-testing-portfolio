// Importing necessary functions from Playwright test module
import { test, expect } from '@playwright/test';

// Define a test case to check if the "Buy Guide" button leads to a broken (404) page
test('Broken link - Buy Guide button leads to 404 page', async ({ page }) => {
// Navigate to the Teck Education page on the website
  await page.goto('https://www.wrighteck.com/teck-education');
// Wait until the initial DOM content has loaded
  await page.waitForLoadState('domcontentloaded');

  // Click the "Buy Guide" button
  await page.getByRole('link', { name: /Buy Guide/i }).click();

  // Wait for navigation
  await page.waitForLoadState('networkidle');

// Check for 404 text
// Wait for navigation and confirm path
await expect(page).toHaveURL(/\/error404/);

// Assert a visible element on the 404 page, e.g.:
await expect(page.locator('text=Looks like there\’s nothing here')).toBeVisible();
});
