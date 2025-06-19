import { test, expect } from '@playwright/test';

test('Broken link - Buy Guide button leads to 404 page', async ({ page }) => {
  await page.goto('https://www.wrighteck.com/teck-education');
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
