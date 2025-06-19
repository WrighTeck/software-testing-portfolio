import { test, expect } from '@playwright/test';

test('Main menu options are visible on the homepage', async ({ page }) => {
  await page.goto('https://www.wrighteck.com');

  const menuItems = [
    'Home',
    'Teck Education',
    'Free AI Assistants',
    'Blog',
    'Support Services',
  ];

  for (const item of menuItems) {
    const menuLink = page.locator(`text=${item}`);
    await expect(menuLink, `${item} should be visible`).toBeVisible();
  }
});
