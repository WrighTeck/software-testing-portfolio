import { test, expect } from '@playwright/test';
// Test to ensure the Home link navigates to the Home section
test('Click Home and verify visible section', async ({ page }) => {
// Navigate to the homepage
  await page.goto('https://www.wrighteck.com');
// Click the 'Home' link in the navigation menu
  await page.getByRole('link', { name: 'Home' }).click();
// Wait briefly to allow for scroll or animation transition
  await page.waitForTimeout(1000);
// Assert that the 'Home' section or heading is visible on the page
  await expect(page.locator('text=Home')).toBeVisible(); // Can adjust locator if necessary
});
// Test to ensure the 'Teck Education' link works and its section is visible
test('Click Teck Education and verify visible section', async ({ page }) => {
// Navigate to the homepage  
  await page.goto('https://www.wrighteck.com');
// Wait for the page to fully load before interacting
  await page.waitForLoadState('domcontentloaded');
// Click the 'Teck Education' link in the navigation menu
  await page.getByRole('link', { name: 'Teck Education' }).click();
// Allow time for smooth scroll or transition to finish
  await page.waitForTimeout(1000); 
 // Assert that the corresponding section or title is now visible
  await expect(page.locator('text=Teck Education')).toBeVisible();
});
// Test to ensure the 'Free AI Assistants' link displays the correct section
  test('Click Free AI Assistants and verify visible section', async ({ page }) => {
// Navigate to the homepage
  await page.goto('https://www.wrighteck.com');
 // Click the 'Free AI Assistants' menu option
  await page.getByRole('link', { name: 'Free AI Assistants' }).click();
 // Wait for UI to scroll or animate into position
  await page.waitForTimeout(1000);
// Assert that the 'Free AI Assistants' section is visible on screen
  await expect(page.locator('text=Free AI Assistants')).toBeVisible();
});
// Test to check if clicking 'Blog' reveals the blog section correctly
  test('Click Blog and verify visible section', async ({ page }) => {
// Navigate to the homepage
    await page.goto('https://www.wrighteck.com');
// Click the 'Blog' link
    await page.getByRole('link', { name: 'Blog' }).click();
// Allow any scroll or animation to complete
    await page.waitForTimeout(1000);
// Verify that the 'Blog' section or label is visible
    await expect(page.locator('text=Blog')).toBeVisible();
  });
  
// Test to ensure the 'Support Services' link navigates to the correct page
test('Click Support Services and verify navigation works', async ({ page }) => {
// Navigate to the homepage
  await page.goto('https://www.wrighteck.com');
// Locate the Support Services link by its href attribute
  const supportLink = page.locator('a[href="https://www.wrighteck.com/support-services"]');
// Click the support services link
  await supportLink.click();
 // Wait to allow the new page or section to fully load
  await page.waitForTimeout(1000);
  // Confirm that the URL now includes 'support-services'
  await expect(page).toHaveURL(/support-services/);
});
