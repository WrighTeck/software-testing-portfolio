// Import core Playwright test utilities along with built-in device emulation options
import { test, expect, devices } from '@playwright/test';
// Configure the test to emulate an iPhone 12 device (mobile viewport and user agent)
test.use({
  ...devices['iPhone 12'],
});
// Define the test to verify mobile menu behavior when hamburger icon is clicked
test('Mobile menu opens when hamburger is clicked', async ({ page }) => {
// Navigate to the Wrighteck homepage
  await page.goto('https://www.wrighteck.com');
// Wait for the DOM content to finish loading before interacting with elements
  await page.waitForLoadState('domcontentloaded');
// Locate the hamburger menu icon using its element ID
  const hamburgerMenu = page.locator('#MENU_AS_CONTAINER_TOGGLE');
// Click the hamburger menu to trigger the mobile menu
  await hamburgerMenu.click();

// Locate the mobile menu container using its element ID
  const menuContainer = page.locator('#MENU_AS_CONTAINER');
// Assert that the mobile menu is visible after clicking the hamburger icon
  await expect(menuContainer).toBeVisible();
});
