// Importing the core Playwright testing utilities
import { test, expect } from '@playwright/test';

test('Homepage loads successfully and displays key elements', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://www.wrighteck.com');

   // Pause so you can see the page and interact manually
  await page.pause();

  // Check that the header is visible
  const header = page.locator('header');
  await expect(header).toBeVisible();

  // Check that the footer is visible
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();

  // Check that "Support Services" appears somewhere on the page
  await expect(page.locator('body')).toHaveText(/Support Services/);
});
