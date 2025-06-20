import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 12'],
});

test('Mobile menu opens when hamburger is clicked', async ({ page }) => {
  await page.goto('https://www.wrighteck.com');
  await page.waitForLoadState('domcontentloaded');

  const hamburgerMenu = page.locator('#MENU_AS_CONTAINER_TOGGLE');
  await hamburgerMenu.click();

  // Assert the mobile menu is now visible
  const menuContainer = page.locator('#MENU_AS_CONTAINER');
  await expect(menuContainer).toBeVisible();
});
