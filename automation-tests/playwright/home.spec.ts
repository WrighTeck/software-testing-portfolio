import { test, expect } from '@playwright/test';

test('Homepage loads successfully and displays key elements', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://www.wrighteck.com');

  // Verify that the header is visible
  const header = page.locator('header');
  await expect(header).toBeVisible();

  // Verify that the footer is visible
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();

  // Optional: Check for a key phrase or section
  await expect(page).toHaveText(/Support Services/);
});
